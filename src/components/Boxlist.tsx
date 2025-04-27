import React from 'react';

import { ScrollShadow } from '@heroui/react';
import { ChefHat } from 'lucide-react';

import Image from 'next/image';

import { Score } from '@/features/Score';

interface Props {
	url: string;
	name: string;
	category: string[];
	restaurant: string;
	address: string;
	score: number;
}

export const Button: React.FC<Props> = ({ url, name, category, restaurant, address, score }) => {
	return (
		<div
			className="bg-white
        w-[410px] h-[165px] rounded-[25px] shadow-md
        hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 origin-center
        p-[15px] grid grid-rows-1 grid-cols-[130px_240px] gap-[10px]"
		>
			<div className="">
				<Image className="rounded-[15px]" alt="LastBite logo" src={url} width={130} height={130} priority></Image>
			</div>
			<div className="flex flex-col gap-[4px] justify-between">
				<div>
					<h1 className="font-bold text-xl">{name}</h1>
				</div>
				<ScrollShadow hideScrollBar offset={50} className="w-[250px] flex flex-wrap gap-2">
					{category.map((el, ind) => (
						<p key={ind} className="bg-[#D4D4D4] rounded-[15px] px-[6px] py-[4px] text-xs pl-1.5 text-gray-500 font-thin">
							{el}
						</p>
					))}
				</ScrollShadow>
				<div className="flex items-center justify-between gap-[0px]">
					<div>
						<div className="flex gap-[3px]">
							<ChefHat size={18} />
							<p className="text-sm">{'Ресторан ' + restaurant}</p>
						</div>
						<div className="px-1 flex justify-between">
							<p className="text-xs font-thin text-gray-500">{address}</p>
						</div>
					</div>
					<Score number={score} />
				</div>
			</div>
		</div>
	);
};
