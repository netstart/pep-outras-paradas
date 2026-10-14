import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AppState {
  disclaimerAccepted: boolean;
  acceptDisclaimer: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  profile: 'paciente' | 'profissional' | 'atleta' | 'curioso' | null;
  setProfile: (p: NonNullable<AppState['profile']>) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      disclaimerAccepted: false,
      acceptDisclaimer: () => set({ disclaimerAccepted: true }),
      favorites: [],
      toggleFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.includes(id)
            ? s.favorites.filter((f) => f !== id)
            : [...s.favorites, id],
        })),
      profile: null,
      setProfile: (profile) => set({ profile }),
    }),
    { name: 'peptide-lab-store', storage: createJSONStorage(() => AsyncStorage) }
  )
);