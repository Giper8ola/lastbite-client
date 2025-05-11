import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IBox } from '@/types';

interface CartBox extends IBox {
	Count: number;
}

interface CartState {
	boxes: CartBox[];
	cost: number;
	updateBox: (box: IBox, Count: number) => void;
	deleteBox: (id: number, price: number) => void;
	clear: () => void;
}

export const useCartStore = create<CartState>()(
	persist(
		(set) => ({
			boxes: [],
			cost: 0,
			updateBox: (box, Count) =>
				set((state) => {
					const boxExists = state.boxes.some((el) => el.id === box.id);
					let updatedBoxes;

					if (boxExists) {
						updatedBoxes = state.boxes.map((el) => (el.id === box.id ? { ...el, Count } : el));
					} else {
						updatedBoxes = [...state.boxes, { ...box, Count }];
					}
					return {
						boxes: updatedBoxes,
						cost: updatedBoxes.reduce((sum, item) => sum + item.price * item.Count, 0)
					};
				}),
			deleteBox: (id, price) =>
				set((state) => ({
					cost: state.cost - price,
					boxes: [...state.boxes.filter((el) => el.id !== id)]
				})),
			clear: () =>
				set({
					boxes: [],
					cost: 0
				})
		}),
		{ name: 'cart-storage' }
	)
);
