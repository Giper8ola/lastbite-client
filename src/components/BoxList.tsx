import { BigBoxItem } from '@/components/BigBoxItem';
import { BoxItem } from '@/components/BoxItem';
import { IBox } from '@/types';

export function BoxList({ list, toCart, big, className }: { list: IBox[]; toCart?: boolean; big?: boolean; className?: string }) {
	if (!className) {
		className = 'my-3 w-full';
	}

	return list.map((el, ind) =>
		big ? (
			<BigBoxItem
				key={ind}
				imageUrl={el.imageUrl}
				name={el.name}
				categories={el.categories}
				restaurant={el.restaurant}
				address={el.address}
				score={el.score}
				price={el.price}
				toCart={toCart ?? false}
				className={className}
			/>
		) : (
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
				className={className}
			/>
		)
	);
}
