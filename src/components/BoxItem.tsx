'use client';

import React from 'react';

import { ScrollShadow } from '@heroui/react';
import { ChefHat } from 'lucide-react';

import CustomImage from '@/features/CustomImage';
import { Score } from '@/features/Score';
import { ToCartButton } from '@/features/ToCartButton';
import { BoxItemProps } from '@/types';

export const BoxItem: React.FC<BoxItemProps> = ({
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
		<div
			className={
				`font-f-primary bg-c-secondary rounded-3xl shadow-md p-4 overflow-x-hidden h-max overflow-y-visible ` + className
			}
		>
			<div className="flex gap-x-1">
				<CustomImage
					className="rounded-2xl max-w-[calc(100%-250px)] min-w-[70px]"
					alt="Box logo"
					src={imageUrl}
					width={130}
					height={130}
					priority
				/>
				<div className="flex flex-col gap-2 pl-2 w-full min-w-0 flex-1">
					<div className="flex justify-between items-center gap-2">
						<h1 className="font-bold text-xl">{name}</h1>
						<Score number={score} className="flex-shrink-0" />
					</div>
					<div className="w-full max-h-[90px] min-h-[40px] flex-shrink">
						<ScrollShadow
							hideScrollBar={true}
							orientation="horizontal"
							offset={100}
							className="flex flex-auto flex-wrap h-full gap-2"
						>
							{categories.map((el, ind) => (
								<div key={ind} className="flex-shrink-0">
									<p className="bg-[#D4D4D4] rounded-[15px] px-[6px] py-1 text-xs pl-1.5 text-gray-500 font-thin">{el}</p>
								</div>
							))}
						</ScrollShadow>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between mt-3">
				<div>
					<div className="flex gap-[3px]">
						<ChefHat size={18} />
						<p className="text-sm">{restaurant}</p>
					</div>
					<div className="px-1 flex justify-between">
						<p className="text-xs font-thin text-gray-500">{address}</p>
					</div>
				</div>
				{toCart && <ToCartButton box={{ id, imageUrl, name, categories, restaurant, address, score, price }} />}
			</div>
		</div>
	);
};
