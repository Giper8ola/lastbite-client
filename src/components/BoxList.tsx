import { BigBoxItem } from '@/components/BigBoxItem';
import { BoxItem } from '@/components/BoxItem';
import { IBox } from '@/types';

export function BoxList({ list, toCart, big }: { list: IBox[]; toCart?: boolean; big?: boolean }) {
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
				className="my-3 w-full"
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
				className="my-3 w-full"
			/>
		)
	);
}
