'use client';
import { useState } from 'react';

import { Input, NumberInput, ScrollShadow, Slider } from '@heroui/react';
import { ChefHat, ConciergeBell, Funnel, Search, Wrench } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import { FilterAccordion } from '@/features/FilterAccordion';
import { FilterList } from '@/features/FilterList';
import { useFilterStore } from '@/stores/FilterStore';
import { BOXES_LIST, COOKERY, PREFERENCES, TYPE_DISHES } from '@/utils/consts';

const FILTER_TYPES = [
	{
		key: '1',
		title: (
			<>
				<ConciergeBell />
				Тип блюд
			</>
		),
		list: TYPE_DISHES
	},
	{
		key: '2',
		title: (
			<>
				<ChefHat />
				Кухня
			</>
		),
		list: COOKERY
	},
	{
		key: '3',
		title: (
			<>
				<Wrench />
				Персональные предпочтения
			</>
		),
		list: PREFERENCES
	}
];

const Boxes = () => {
	const [isFilter, setFilter] = useState(false);
	const maxPrice = Math.max(...BOXES_LIST.map((box) => box.price));
	const minPrice = Math.min(...BOXES_LIST.map((box) => box.price));
	const { filteredList, setPriceChange, MinScoreChange, MaxScoreChange } = useFilterStore(
		useShallow((state) => ({
			filteredList: state.filteredList,
			setPriceChange: state.setPriceRange,
			MinScoreChange: state.MinScoreChange,
			MaxScoreChange: state.MaxScoreChange
		}))
	);

	return (
		<div className="">
			<Container width={1600}>
				<div className="min-w-[915px] px-10 h-[70vh]">
					<div className="grid grid-cols-[25%_75%] h-[70vh]">
						<div className={`bg-white rounded-[28px] shadow-md pb-2 *:`}>
							<Input
								classNames={{
									label: 'text-black/50 dark:text-white/90',
									input: [
										'bg-transparent',
										'text-black/90 dark:text-white/90',
										'placeholder:text-default-700/50 dark:placeholder:text-white/60'
									],
									innerWrapper: 'bg-transparent',
									inputWrapper: [
										'shadow-xl',
										'bg-default-200/50',
										'dark:bg-default/60',
										'backdrop-blur-xl',
										'backdrop-saturate-200',
										'hover:bg-default-200/70',
										'dark:hover:bg-default/70',
										'group-data-[focus=true]:bg-default-200/50',
										'dark:group-data-[focus=true]:bg-default/60',
										'text-default-700/50',
										'!cursor-text'
									]
								}}
								placeholder="Поиск"
								radius="full"
								endContent={
									<Funnel
										className="cursor-pointer text-black opacity-40 hover:opacity-75"
										onClick={() => setFilter(!isFilter)}
									></Funnel>
								}
								startContent={<Search />}
								className="p-4"
							/>
							<Slider
								className="px-5 py-2 font-bold"
								classNames={{
									filler: 'bg-c-primary',
									thumb: 'bg-c-primary',
									label: 'text-[16px]'
								}}
								defaultValue={[minPrice, maxPrice]}
								formatOptions={{ style: 'currency', currency: 'RUB', roundingMode: 'ceil', roundingPriority: 'morePrecision' }}
								label="Цена"
								maxValue={maxPrice}
								minValue={minPrice}
								step={50}
								onChange={setPriceChange}
							/>
							<div className="w-full grid gap-2">
								<p className="row-start-1 pl-5 pt-3 pb-1 font-bold text-[16px]">Оценка</p>
								<div className="row-start-2 flex gap-2">
									<NumberInput
										className="pb-5 pl-5"
										minValue={0}
										maxValue={5}
										onValueChange={(value) => MinScoreChange(value ? value : 0)}
										size="sm"
										placeholder="От"
									/>
									<NumberInput
										className="pb-5 pr-5"
										minValue={0}
										maxValue={5}
										onValueChange={(value) => MaxScoreChange(value ? value : 5)}
										size="sm"
										placeholder="До"
									/>
								</div>
							</div>
							<div className="overflow-y-auto h-[53vh] rounded-3xl [&::-webkit-scrollbar]:w-0">
								{isFilter ? FilterList(FILTER_TYPES) : FilterAccordion(FILTER_TYPES)}
							</div>
						</div>
						<ScrollShadow
							hideScrollBar
							className="px-7 grid grid-cols-[49%_49%] gap-x-6 auto-rows-min"
							offset={100}
							orientation="vertical"
						>
							<BoxList list={filteredList} toCart={true} />
						</ScrollShadow>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Boxes;
