'use client';

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat } from 'lucide-react';

import { useRouter } from 'next/navigation';

import CustomImage from '@/features/CustomImage';
import { Score } from '@/features/Score';
import { IShopProps } from '@/types';

export const ShopItemSmall: React.FC<IShopProps> = ({ item, className }) => {
	const [isHover, setHover] = useState(false);

	const { key, value } = item;
	const { name, address, imageUrl, rating } = value;

	const router = useRouter();

	const handleClick = () => {
		router.push(`/shops/${key}`);
	};

	return (
		<AnimatePresence mode="wait">
			<motion.button
				initial={{ opacity: 0, scale: 0 }}
				animate={{
					opacity: 1,
					scale: 1
				}}
				onClick={handleClick}
				className={`relative font-f-primary bg-c-secondary rounded-3xl shadow-md ` + className}
				onHoverStart={() => setHover(true)}
				onHoverEnd={() => setHover(false)}
				whileHover={{
					scale: 1.05,
					transition: {
						type: 'spring',
						stiffness: 200,
						damping: 15
					}
				}}
				whileTap={{ scale: 0.97 }}
				layout
			>
				<motion.div layout="position">
					<CustomImage className="rounded-3xl shadow-md" alt="Shop logo" src={imageUrl} width={360} height={350} priority />
				</motion.div>

				<AnimatePresence mode="popLayout">
					{isHover && (
						<motion.div
							className={`font-f-primary bg-c-secondary rounded-3xl shadow-md p-4 flex flex-col gap-1 justify-normal w-full mt-2 absolute top-0 left-0 -z-10`}
							initial={{ opacity: 0, y: 0 }}
							exit={{ opacity: 0, y: 0 }}
							animate={{
								opacity: isHover ? 1 : 0,
								y: isHover ? 160 : 0
							}}
							transition={{ type: 'spring', stiffness: 800, damping: 40, duration: 0.3 }}
							layout
						>
							<div className="flex justify-between items-center gap-2">
								<div className="flex flex-row">
									<ChefHat size={22} />
									<p className="font-bold text-[18px] ml-1">{name}</p>
								</div>
								<Score number={rating} className="flex-shrink-0 -translate-y-[1px]" />
							</div>
							<p className="text-xs font-thin text-gray-500 ml-1.5 text-left">{address}</p>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>
		</AnimatePresence>
	);
};
