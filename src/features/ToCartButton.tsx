'use client';

import React, { useEffect, useState } from 'react';

import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';

import styles from '@/features/ToCartButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	price: number;
}

export const ToCartButton: React.FC<Props> = ({ onClick, price }) => {
	const [isToggled, setIsToggled] = useState(false);
	const [Count, setCount] = useState(0);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		if (isToggled) {
			timeoutId = setTimeout(() => {
				setIsToggled(false);
			}, 1000);
		}
		return () => clearTimeout(timeoutId);
	}, [isToggled]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsToggled(!isToggled);
		setCount(1);
	};

	return (
		<div className="flex items-center justify-center gap-2">
			<p className="font-semibold whitespace-nowrap">{price}₽</p>
			<div className={`flex flex-row justify-center items-center ${Count > 0 && isToggled ? styles.container : ''}`}>
				<button
					onClick={() => setCount(Count - 1)}
					className={`${styles.container} overflow-hidden transition-all duration-300 ${Count > 0 ? 'max-w-[100px] mr-2 p-[7px]' : 'max-w-0 mr-0 p-[0px]'} ${isToggled || Count === 0 ? 'opacity-0' : 'opacity-100'}`}
				>
					<Minus size={14} strokeWidth={3} />
				</button>

				<button
					type="button"
					onClick={handleClick}
					className={`${Count === 0 ? styles.container : ''} overflow-hidden flex justify-center items-center ${Count === 0 ? 'max-w-[100px] p-[7px]' : 'max-w-0 p-[0px]'}`}
				>
					<div className={`transition-all ${isToggled ? 'opacity-0 -rotate-180' : 'opacity-100'}`}>
						<ShoppingCart size={20} strokeWidth={3} />
					</div>
					<div className={`absolute translate-x-1 transition-transform ${isToggled ? 'opacity-100' : 'opacity-0 rotate-180'}`}>
						<Check size={20} strokeWidth={3} />
					</div>
				</button>

				<p
					className={`overflow-hidden font-bold whitespace-nowrap text-[13px] mx-2" ${isToggled || Count === 0 ? 'opacity-0' : 'opacity-100'}`}
				>
					{Count > 0 ? Count : ''}
				</p>

				<button
					onClick={() => setCount(Count + 1)}
					className={`${styles.container} overflow-hidden transition-all duration-300 ${Count > 0 ? 'max-w-[100px] ml-2 p-[7px]' : 'max-w-0 ml-0 p-[0px]'} ${isToggled || Count === 0 ? 'opacity-0' : 'opacity-100'}`}
				>
					<Plus size={14} strokeWidth={3} />
				</button>
			</div>
		</div>
	);
};
