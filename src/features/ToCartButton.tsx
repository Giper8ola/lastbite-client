'use client';

import React, { useEffect, useState } from 'react';

import { ShoppingCart, Check } from 'lucide-react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	price: number;
}

export const ToCartButton: React.FC<Props> = ({ onClick, price }) => {
	const [isToggled, setIsToggled] = useState(false);

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
		e.stopPropagation();
		setIsToggled(!isToggled);
	};

	return (
		<button type="button" onClick={handleClick} className="group relative">
			<div className="px-[7px] py-[5px] rounded-[10px] bg-[#89E49D] hover:bg-[#94dca4] transition-all duration-300 ease-in-out flex justify-center items-center gap-2">
				<div className={`transition-all ${isToggled ? 'opacity-0 -translate-x-2' : 'opacity-100'}`}>
					<ShoppingCart size={20} strokeWidth={2.5} />
				</div>
				<div className={`absolute transition-all ${isToggled ? 'opacity-100' : 'opacity-0 translate-x-2'}`}>
					<Check size={20} strokeWidth={3} />
				</div>
				<div
					className={`overflow-hidden transition-all duration-300 
                    ${isToggled ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-100'}`}
				>
					<p className="font-semibold whitespace-nowrap">{price}₽</p>
				</div>
			</div>
		</button>
	);
};
