import React, { ReactElement } from 'react';

import { BigBoxItem } from '@/components/BigBoxItem';
import { BoxItem } from '@/components/BoxItem';
import { IBox } from '@/types';
import { BoxesSize } from '@/types/enum';

import { SmallBoxItem } from './SmallBoxItem';

export function BoxList({
	list,
	toCart = false,
	size = BoxesSize.Normal,
	className = 'my-3 w-full',
	indexes
}: {
	list: IBox[];
	toCart?: boolean;
	size?: BoxesSize;
	className?: string;
	indexes?: number[];
}) {
	const filteredList = indexes ? list.filter((_, index) => indexes.includes(index)) : list;

	return filteredList.map((el, index) => {
		const baseProps = {
			id: el.id,
			imageUrl: el.imageUrl,
			name: el.name,
			categories: el.categories,
			restaurant: el.restaurant,
			address: el.address,
			score: el.score,
			price: el.price,
			toCart,
			className
		};

		const BOXES: Record<BoxesSize, ReactElement> = {
			[BoxesSize.Normal]: <BoxItem key={index} {...baseProps} />,
			[BoxesSize.Big]: <BigBoxItem key={index} {...baseProps} />,
			[BoxesSize.Small]: <SmallBoxItem key={index} {...baseProps} />
		};

		return BOXES[size];
		// return big ? <BigBoxItem key={index} {...baseProps} /> : <BoxItem key={index} {...baseProps} />;
	});
}
