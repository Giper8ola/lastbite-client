'use client';

import React, { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

import styles from '@/assets/styles/ToCartButton.module.css';
import { useCartStore } from '@/stores/CartStore';
import { IBox } from '@/types';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	box: IBox;
}

export const ToCartButton: React.FC<Props> = ({ box }) => {
	const { updateBox, deleteBox, boxes } = useCartStore(
		useShallow((state) => ({ updateBox: state.updateBox, deleteBox: state.deleteBox, boxes: state.boxes }))
	);
	const savedBox = boxes.find((item) => item.id === box.id);
	const savedCount = savedBox?.Count ?? 0;
	const [Count, setCount] = useState(savedCount);

	useEffect(() => {
		setCount(savedCount);
	}, [savedCount]);

	const addOne = () => {
		setCount(Count + 1);
		updateBox(box, Count + 1);
	};

	const removeOneOrDelete = () => {
		const newCount = Count - 1;
		setCount(newCount);
		if (newCount < 1) {
			deleteBox(box.id, box.price);
		} else {
			updateBox(box, newCount);
		}
	};

	return (
		<AnimatePresence>
			<motion.div
				className={`${styles.container}`}
				whileTap={{ scale: 0.95 }}
				layout
				transition={{
					layout: {
						type: 'spring',
						stiffness: 300,
						damping: 20,
						duration: 0.15
					}
				}}
			>
				<p className="font-bold whitespace-nowrap text-[14px] mx-[10px]">{Count < 1 ? box.price : box.price * Count}₽</p>
				<AnimatePresence mode="wait">
					{Count < 1 ? (
						<motion.button type="button" className={`${styles.btn}`} onClick={addOne}>
							<ShoppingCart size={16} strokeWidth={3} />
						</motion.button>
					) : (
						<>
							<motion.button type="button" className={`${styles.btn}`} onClick={removeOneOrDelete}>
								<Minus size={16} strokeWidth={3} />
							</motion.button>
							<p className={`font-bold whitespace-nowrap text-[14px] mx-[10px]`}>{Count > 0 ? Count : ''}</p>
							<motion.button type="button" className={`${styles.btn}`} onClick={addOne}>
								<Plus size={16} strokeWidth={3} />
							</motion.button>
						</>
					)}
				</AnimatePresence>
			</motion.div>
		</AnimatePresence>
	);
};
