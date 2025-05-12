'use client';

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Ban } from 'lucide-react';

import styles from '@/assets/styles/ToCartButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RatingButton: React.FC<Props> = ({}) => {
	const [rating, setRating] = useState(0);
	const ratingNums = [1, 2, 3, 4, 5];

	const displayedNums = rating > 0 ? ratingNums.filter((num) => num <= rating) : ratingNums;

	return (
		<AnimatePresence mode="wait">
			<motion.div
				className="flex flex-row items-center justify-center"
				transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.15 }}
				layout
			>
				{displayedNums.map((el) => (
					<motion.button
						key={el}
						className={`items-center py-[5px] rounded-[100px] ${rating === 0 ? 'hover:bg-gray-200 transition-background ease-in-out duration-300 px-[5px]' : ''} text-[#89e49d]`}
						disabled={rating > 0}
						onClick={() => setRating(el)}
						whileTap={{ scale: 0.7 }}
						transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.3 }}
						exit={{ opacity: 0, scale: 0 }}
					>
						{rating >= el ? <Star fill="#89e49d" /> : <Star />}
					</motion.button>
				))}

				{rating > 0 && (
					<motion.button onClick={() => setRating(0)} className={`${styles.btn} ${styles.container} ml-2`}>
						<Ban size={16} />
					</motion.button>
				)}
			</motion.div>
		</AnimatePresence>
	);
};
