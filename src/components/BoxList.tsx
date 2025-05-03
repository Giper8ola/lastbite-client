import { CSSProperties } from 'react';

import { BoxItem } from '@/components/BoxItem';
import { IBox } from '@/types';

export function BoxList({
	list,
	toCart,
	cols,
	rows,
	className
}: {
	list: IBox[];
	toCart?: boolean;
	cols?: number;
	rows?: number;
	className?: string;
}) {
	const styles: CSSProperties = {
		...(cols && rows && { display: 'grid' }),
		...(cols && { gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }),
		...(cols && { gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` })
	};

	return (
		<div style={styles} className={className}>
			{list.map((el, ind) => (
				<BoxItem
					key={ind}
					imageUrl={el.imageUrl}
					name={el.name}
					categories={el.categories}
					restaurant={el.restaurant}
					address={el.address}
					score={el.score}
					price={el.price}
					toCart={toCart ?? false}
					className="my-3 w-full"
				/>
			))}
		</div>
	);
}
