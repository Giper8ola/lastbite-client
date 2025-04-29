'use client';

import React from 'react';

import { ScrollShadow, useDisclosure } from '@heroui/react';
import { ChefHat } from 'lucide-react';

import Image from 'next/image';

import { BoxlistModal } from '@/components/BoxlistModal';
import { Score } from '@/features/Score';
import { ToCartButton } from '@/features/ToCartButton';

export interface Props {
	url: string;
	name: string;
	category: string[];
	restaurant: string;
	address: string;
	score: number;
	price: number;
	className?: string;
}

interface BoxProps extends Props {
	toCart: boolean;
}

export const BoxItem: React.FC<BoxProps> = ({ url, name, category, restaurant, address, score, price, toCart, className }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<div
			role="button"
			tabIndex={0}
			onClick={onOpen}
			className={
				`bg-white rounded-3xl shadow-md
						hover:cursor-pointer transition-transform
						duration-300 ease-in-out transform
						hover:scale-105 origin-center p-4 ` + className
			}
		>
			<div className="flex gap-x-1">
				<Image className="rounded-2xl" alt="Box logo" src={url} width={130} height={130} priority></Image>
				<div className="flex flex-col gap-2 col-span-2 pl-2 w-full">
					<div className="flex flex-row justify-between">
						<h1 className="font-bold text-xl">{name}</h1>
						<Score number={score} />
					</div>
					<ScrollShadow hideScrollBar={true} orientation={'horizontal'} offset={100}>
						<div className="flex flex-auto flex-wrap max-h-[90px] gap-1">
							{category.map((el, ind) => (
								<div key={ind}>
									<p className="bg-[#D4D4D4] rounded-[15px] px-[6px] py-1 text-xs pl-1.5 text-gray-500 font-thin">{el}</p>
								</div>
							))}
						</div>
					</ScrollShadow>
				</div>
			</div>
			<div className="flex items-center justify-between mt-3">
				<div>
					<div className="flex gap-[3px]">
						<ChefHat size={18} />
						<p className="text-sm">{'Ресторан ' + restaurant}</p>
					</div>
					<div className="px-1 flex justify-between">
						<p className="text-xs font-thin text-gray-500">{address}</p>
					</div>
				</div>
				<BoxlistModal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					url={url}
					name={name}
					category={category}
					restaurant={restaurant}
					address={address}
					score={score}
					price={price}
				></BoxlistModal>
				{toCart && <ToCartButton price={price} />}
			</div>
		</div>
	);
};
