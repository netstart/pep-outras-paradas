// Validation script for peptide reference requirements
// Ensures each peptide data file has at least 10 scientific references (effects, adverse events)
// and that each reference includes a verifiable link (url, pmid, or doi).

const fs = require('fs');
const path = require('path');

const peptidesDir = path.resolve(__dirname, '../../data/peptides');

function getReferenceCount(fileContent) {
  // Simple heuristic: count occurrences of "referencias": [
  const regex = /"referencias"\s*:\s*\[/g;
  const matches = fileContent.match(regex) || [];
  // For each array, count objects inside by counting "{"
  let total = 0;
  for (const m of matches) {
    // Locate the start of the array after the match
    const startIdx = fileContent.indexOf('[', m.index);
    const endIdx = findClosingBracket(fileContent, startIdx);
    const arrayContent = fileContent.slice(startIdx + 1, endIdx);
    // Count objects: number of '{' characters (rudimentary)
    const objCount = (arrayContent.match(/\{/g) || []).length;
    total += objCount;
  }
  return total;
}

function findClosingBracket(str, startIdx) {
  let depth = 0;
  for (let i = startIdx; i < str.length; i++) {
    if (str[i] === '[') depth++;
    else if (str[i] === ']') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function checkLinkPresence(refObjString) {
  // Look for url, pmid or doi inside the reference object string
  return /"url"\s*:/i.test(refObjString) || /"pmid"\s*:/i.test(refObjString) || /"doi"\s*:/i.test(refObjString);
}

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const refCount = getReferenceCount(content);
  const issues = [];
  if (refCount < 10) {
    issues.push(`⚠️ Only ${refCount} references found (minimum 10 required).`);
  }
  // Find each reference object and ensure it has a link
  const refArrayRegex = /"referencias"\s*:\s*\[([\s\S]*?)\]/g;
  let match;
  while ((match = refArrayRegex.exec(content)) !== null) {
    const arrayBody = match[1];
    // split by '},' to get each object (rough heuristic)
    const objects = arrayBody.split('},');
    objects.forEach((objStr, idx) => {
      if (!checkLinkPresence(objStr)) {
        issues.push(`⚠️ Reference #${idx + 1} in a "referencias" array lacks url/pmid/doi.`);
      }
    });
  }
  if (issues.length) {
    console.log(`🧐 Validation issues in ${path.basename(filePath)}:`);
    issues.forEach((i) => console.log('  - ' + i));
  } else {
    console.log(`✅ ${path.basename(filePath)} passes reference validation.`);
  }
}

fs.readdirSync(peptidesDir).forEach((file) => {
  if (file.endsWith('.ts')) {
    const fullPath = path.join(peptidesDir, file);
    validateFile(fullPath);
  }
});

// To run: `node src/lib/validateReferences.js`
