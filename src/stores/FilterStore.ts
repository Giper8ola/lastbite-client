import { create } from 'zustand';

import { IBox } from '@/types';
import { BOXES_LIST } from '@/utils/consts';

interface FilterState {
	priceRange: number[];
	scoreRange: number[];
	filteredList: IBox[];
	setPriceRange: (value: number | number[]) => void;
	MinScoreChange: (value: number) => void;
	MaxScoreChange: (value: number) => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
	priceRange: [Math.min(...BOXES_LIST.map((box) => box.price)), Math.max(...BOXES_LIST.map((box) => box.price))],
	scoreRange: [0, 5],
	filteredList: BOXES_LIST,
	setPriceRange: (value) =>
		set((state) => {
			const newPriceRange = Array.isArray(value) ? value : [value, value];
			return {
				priceRange: newPriceRange,
				filteredList: BOXES_LIST.filter(
					(box) =>
						box.price >= newPriceRange[0] &&
						box.price <= newPriceRange[1] &&
						box.score >= state.scoreRange[0] &&
						box.score <= state.scoreRange[1]
				)
			};
		}),
	MinScoreChange: (value) =>
		set((state) => ({
			scoreRange: [value, state.scoreRange[1]],
			filteredList: BOXES_LIST.filter(
				(box) =>
					box.price >= state.priceRange[0] &&
					box.price <= state.priceRange[1] &&
					box.score >= value &&
					box.score <= state.scoreRange[1]
			)
		})),
	MaxScoreChange: (value) =>
		set((state) => ({
			scoreRange: [state.scoreRange[0], value],
			filteredList: BOXES_LIST.filter(
				(box) =>
					box.price >= state.priceRange[0] &&
					box.price <= state.priceRange[1] &&
					box.score >= state.scoreRange[0] &&
					box.score <= value
			)
		}))
}));
