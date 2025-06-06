'use client';

import React from 'react';

import { ScrollShadow } from '@heroui/react';
import { ChefHat } from 'lucide-react';

import CustomImage from '@/features/CustomImage';
import { RatingButton } from '@/features/RatingButton';
import { Score } from '@/features/Score';
import { ToCartButton } from '@/features/ToCartButton';
import { BoxItemProps } from '@/types';

export const BigBoxItem: React.FC<BoxItemProps> = ({
	id,
	imageUrl,
	name,
	categories,
	restaurant,
	address,
	score,
	price,
	toCart,
	className
}) => {
	return (
		<div className={`font-f-primary bg-c-secondary rounded-3xl shadow-md p-4 ` + className}>
			<div className="flex gap-x-1">
				<CustomImage className="rounded-2xl" alt="Box logo" src={imageUrl} width={179} height={179} priority />
				<div className="flex flex-col gap-2 pl-2 w-full justify-between">
					<div className="flex flex-row justify-between items-center">
						<h1 className="font-bold text-xl">{name}</h1>
						<Score number={score} />
					</div>
					<ScrollShadow hideScrollBar={true} orientation="horizontal" offset={100} className="flex-1">
						<div className="flex flex-auto flex-wrap max-h-[90px] gap-1">
							{categories.map((el, ind) => (
								<div key={ind}>
									<p className="bg-[#D4D4D4] rounded-[15px] px-[6px] py-1 text-xs pl-1.5 text-gray-500 font-thin">{el}</p>
								</div>
							))}
						</div>
					</ScrollShadow>
					<div className="flex items-center justify-between mt-3">
						<div>
							<div className="flex gap-[3px] items-center">
								<ChefHat size={18} />
								<p className="text-sm">{'Ресторан ' + restaurant}</p>
							</div>
							<div className="px-1 flex justify-between">
								<p className="text-xs font-thin text-gray-500">{address}</p>
							</div>
						</div>
						{toCart ? (
							<ToCartButton box={{ id, imageUrl, name, categories, restaurant, address, score, price }} />
						) : (
							<RatingButton />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
