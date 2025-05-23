'use client';

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

import styles from '@/assets/styles/ToCartButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	price: number;
	count?: number;
}

export const ToCartButton: React.FC<Props> = ({ price }) => {
	const [Count, setCount] = useState(0);

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
				<p className="font-bold whitespace-nowrap text-[14px] mx-[10px]">{Count < 1 ? price : price * Count} ₽</p>
				<AnimatePresence mode="wait">
					{Count < 1 ? (
						<motion.button type="button" className={`${styles.btn}`} onClick={() => setCount(Count + 1)}>
							<ShoppingCart size={16} strokeWidth={3} />
						</motion.button>
					) : (
						<>
							<motion.button type="button" className={`${styles.btn}`} onClick={() => setCount(Count - 1)}>
								<Minus size={16} strokeWidth={3} />
							</motion.button>
							<p className={`font-bold whitespace-nowrap text-[14px] mx-[10px]`}>{Count > 0 ? Count : ''}</p>
							<motion.button type="button" className={`${styles.btn}`} onClick={() => setCount(Count + 1)}>
								<Plus size={16} strokeWidth={3} />
							</motion.button>
						</>
					)}
				</AnimatePresence>
			</motion.div>
		</AnimatePresence>
	);
};
