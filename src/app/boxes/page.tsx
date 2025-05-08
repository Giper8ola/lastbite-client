'use client';
import { useState } from 'react';

import { ScrollShadow } from '@heroui/react';
import { ChefHat, ConciergeBell, Wrench } from 'lucide-react';

import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import CustomSearch from '@/features/CustomSearch';
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
						<CustomSearch isFilter setFilter={setFilter}></CustomSearch>
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
