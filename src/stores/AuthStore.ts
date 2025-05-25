import { parseDate } from '@internationalized/date';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/types';

export interface AuthState {
	isAuth: boolean;
	user: User;
	changeAuth: (value?: boolean) => void;
	setUser: (newUser: User) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			isAuth: false,
			user: {
				first_name: 'Матвей',
				last_name: 'Перегудов',
				phone_number: '+79009851322',
				email: 'email@mail.ru',
				birth_date: parseDate('2024-04-04')
			},
			changeAuth: (value) =>
				set((state) => ({
					isAuth: value ? value : !state.isAuth
				})),
			setUser: (newUser) =>
				set((state) => ({
					user: newUser
				}))
		}),
		{ name: 'auth-storage' }
	)
);
