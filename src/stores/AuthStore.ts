import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
	isAuth: boolean;
	changeAuth: (value?: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			isAuth: false,
			changeAuth: (value) =>
				set((state) => ({
					isAuth: value ? value : !state.isAuth
				}))
		}),
		{ name: 'auth-storage' }
	)
);
