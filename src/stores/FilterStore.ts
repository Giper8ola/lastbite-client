import { create } from 'zustand';

import { IBox } from '@/types';
import { BOXES_LIST } from '@/utils/consts';

interface FilterState {
	searchResult: string;
	priceRange: number[];
	scoreRange: number[];
	filteredList: IBox[];
	categories: string[];
	setSearchResult: (newSearch: string) => void;
	setPriceRange: (priceRange: number | number[]) => void;
	MinScoreChange: (minScore: number) => void;
	MaxScoreChange: (maxScore: number) => void;
	setCategory: (category: string | string[]) => void;
	clearCategories: () => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
	searchResult: '',
	priceRange: [Math.min(...BOXES_LIST.map((box) => box.price)), Math.max(...BOXES_LIST.map((box) => box.price))],
	scoreRange: [0, 5],
	filteredList: BOXES_LIST,
	categories: [],
	setSearchResult: (newSearch) =>
		set((state) => {
			return {
				searchResult: newSearch,
				filteredList: BOXES_LIST.filter(
					(box) =>
						box.name.toLowerCase().includes(newSearch.toLowerCase()) &&
						box.price >= state.priceRange[0] &&
						box.price <= state.priceRange[1] &&
						box.score >= state.scoreRange[0] &&
						box.score <= state.scoreRange[1] &&
						state.categories.every((cat) => box.categories.includes(cat))
				)
			};
		}),
	setPriceRange: (value) =>
		set((state) => {
			const newPriceRange = Array.isArray(value) ? value : [value, value];
			return {
				priceRange: newPriceRange,
				filteredList: BOXES_LIST.filter(
					(box) =>
						box.name.includes(state.searchResult) &&
						box.price >= newPriceRange[0] &&
						box.price <= newPriceRange[1] &&
						box.score >= state.scoreRange[0] &&
						box.score <= state.scoreRange[1] &&
						state.categories.every((cat) => box.categories.includes(cat))
				)
			};
		}),
	MinScoreChange: (value) =>
		set((state) => ({
			scoreRange: [value, state.scoreRange[1]],
			filteredList: BOXES_LIST.filter(
				(box) =>
					box.name.includes(state.searchResult) &&
					box.price >= state.priceRange[0] &&
					box.price <= state.priceRange[1] &&
					box.score >= value &&
					box.score <= state.scoreRange[1] &&
					state.categories.every((cat) => box.categories.includes(cat))
			)
		})),
	MaxScoreChange: (value) =>
		set((state) => ({
			scoreRange: [state.scoreRange[0], value],
			filteredList: BOXES_LIST.filter(
				(box) =>
					box.name.includes(state.searchResult) &&
					box.price >= state.priceRange[0] &&
					box.price <= state.priceRange[1] &&
					box.score >= state.scoreRange[0] &&
					box.score <= value &&
					state.categories.every((cat) => box.categories.includes(cat))
			)
		})),
	setCategory: (categories) =>
		set((state) => {
			const newCategories = Array.isArray(categories)
				? categories
				: state.categories.includes(categories)
					? state.categories.filter((cat) => cat !== categories)
					: [...state.categories, categories];

			return {
				categories: newCategories,
				filteredList: BOXES_LIST.filter(
					(box) =>
						box.name.includes(state.searchResult) &&
						box.price >= state.priceRange[0] &&
						box.price <= state.priceRange[1] &&
						box.score >= state.scoreRange[0] &&
						box.score <= state.scoreRange[1] &&
						(newCategories.length === 0 || newCategories.every((cat) => box.categories.includes(cat)))
				)
			};
		}),
	clearCategories: () =>
		set((state) => ({
			categories: [],
			filteredList: BOXES_LIST.filter(
				(box) =>
					box.name.includes(state.searchResult) &&
					box.price >= state.priceRange[0] &&
					box.price <= state.priceRange[1] &&
					box.score >= state.scoreRange[0] &&
					box.score <= state.scoreRange[1] &&
					state.categories.every((cat) => box.categories.includes(cat))
			)
		}))
}));
