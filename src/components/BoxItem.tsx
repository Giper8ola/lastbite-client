'use client';

import React from 'react';

import { useDisclosure } from '@heroui/react';
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
			role={'button'}
			tabIndex={0}
			onClick={onOpen}
			onKeyDown={toCart ? (e) => e.key === 'Enter' && onOpen?.() : undefined}
			className={
				` bg-white w-[420px] h-[200px] rounded-[25px] shadow-md hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 origin-center p-[15px] grid grid-rows-1 grid-cols-[140px_1fr_65%] gap-[3px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#89E49D] ` +
				className
			}
		>
			<div className="row-start-1 col-start-1">
				<Image className="rounded-[15px]" alt="Box logo" src={url} width={140} height={140} priority></Image>
			</div>
			<div className="col-start-3 row-start-1">
				<div className="flex flex-col justify-between gap-2 col-span-2 px-2">
					<div className="flex flex-row justify-between">
						<h1 className="font-bold text-xl">{name}</h1>
						<div className="">
							<Score number={score} />
						</div>
					</div>
					<div className="w-[250px] flex-1 flex flex-wrap gap-2">
						{category.map((el, ind) => (
							<div key={ind}>
								<p key={ind} className="bg-[#D4D4D4] rounded-[15px] px-[6px] py-[4px] text-xs pl-1.5 text-gray-500 font-thin">
									{el}
								</p>
							</div>
						))}
					</div>
					<div className="flex items-center justify-between">
						<div>
							<div className="flex gap-[3px]">
								<ChefHat size={18} />
								<p className="text-sm">{'Ресторан ' + restaurant}</p>
							</div>
							<div className="px-1 flex justify-between">
								<p className="text-xs font-thin text-gray-500">{address}</p>
							</div>
						</div>
					</div>
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
			{toCart && (
				<div className="flex col-span-3 justify-end pr-5">
					<ToCartButton price={price} />
				</div>
			)}
		</div>
	);
};
