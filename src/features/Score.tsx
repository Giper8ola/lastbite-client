import React from 'react';

import { Star } from 'lucide-react';

export const Score = ({ number }: { number: number }) => {
	const normalized = number / 5;
	const hue = normalized * 120;

	return (
		<div
			className={`flex items-center justify-center leading-3 rounded-[10px] border-[2px] shadow-md p-1`}
			style={{ color: `hsl(${hue}, 75%, 50%)`, borderColor: `hsl(${hue}, 75%, 50%)` }}
		>
			<Star size={18} color={`hsl(${hue}, 75%, 50%)`} fill={`hsl(${hue}, 75%, 50%)`} />
			<p className="text-[12px] mx-[3px] font-bold">{number.toFixed(1)}</p>
		</div>
	);
};
