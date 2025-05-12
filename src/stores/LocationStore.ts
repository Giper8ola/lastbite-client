import { create } from 'zustand';

interface LocationState {
	city: string;
	setCity: (newCity: string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
	city: 'voronezh',
	setCity: (newCity) => set({ city: newCity })
}));
