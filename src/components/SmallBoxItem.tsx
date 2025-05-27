'use client';

import React from 'react';

import styles from '@/assets/styles/ToCartButton.module.css';
import CustomImage from '@/features/CustomImage';
import { ToCartButton } from '@/features/ToCartButton';
import { BoxItemProps } from '@/types';

export const SmallBoxItem: React.FC<BoxItemProps> = ({
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
			<div className="flex flex-row justify-between">
				<div className="relative flex gap-x-1">
					<div className="rounded-2xl max-w-[calc(100%-250px)] min-w-[70px]">
						<CustomImage className=" rounded-2xl" alt="Box logo" src={imageUrl} width={100} height={100} priority />
					</div>
					<div className="flex flex-col justify-between px-2">
						<div className="flex justify-between items-center gap-2">
							<h1 className="font-bold text-xl text-nowrap truncate w-[200px]">{name}</h1>
						</div>
						<p className="font-bold text-medium">{price} ₽</p>
					</div>
				</div>

				<div className="flex items-center">
					{toCart ? (
						<ToCartButton box={{ id, imageUrl, name, categories, restaurant, address, score, price }} big={false} />
					) : (
						<div className={`${styles.container} aspect-square`}>
							<p className="font-bold whitespace-nowrap text-[14px] mx-[10px]">x1</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
