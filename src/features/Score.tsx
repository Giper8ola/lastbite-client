import React from 'react';

interface Props {
	number: number;
}

export const Score: React.FC<Props> = ({ number }) => {
	const normalized = number / 5;
	const hue = normalized * 120;

	return (
		<div
			className="p-2 rounded-[20px]"
			style={{
				backgroundColor: `hsl(${hue}, 75%, 50%)`
			}}
		>
			<p className="text-xs leading-5 font-bold">{number.toFixed(1)}</p>
		</div>
	);
};
