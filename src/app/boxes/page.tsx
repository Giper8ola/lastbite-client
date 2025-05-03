'use client';
import { useState } from 'react';

import { Input, ScrollShadow } from '@heroui/react';
import { ChefHat, ConciergeBell, Funnel, Search, Wrench } from 'lucide-react';

import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import { FilterAccordion } from '@/features/FilterAccordion';
import { FilterList } from '@/features/FilterList';
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
	return (
		<div className="py-5">
			<Container>
				<div className="grid grid-cols-[25%_75%]">
					<div className={`bg-white rounded-[28px] shadow-md h-[80vh]`}>
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
						<div className="overflow-y-auto h-[70vh] rounded-2xl [&::-webkit-scrollbar]:w-0">
							{isFilter ? FilterList(FILTER_TYPES) : FilterAccordion(FILTER_TYPES)}
						</div>
					</div>
					<ScrollShadow
						hideScrollBar
						className="px-7 h-[80vh] grid grid-cols-[49%_49%] gap-x-6"
						offset={100}
						orientation="vertical"
					>
						<BoxList list={BOXES_LIST} toCart={true} />
						<BoxList list={BOXES_LIST} toCart={true} />
						<BoxList list={BOXES_LIST} toCart={true} />
						<BoxList list={BOXES_LIST} toCart={true} />
					</ScrollShadow>
				</div>
			</Container>
		</div>
	);
};

export default Boxes;
