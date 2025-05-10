import { BigBoxItem } from '@/components/BigBoxItem';
import { BoxItem } from '@/components/BoxItem';
import { IBox } from '@/types';

export function BoxList({
	list,
	toCart = false,
	big,
	className = 'my-3 w-full',
	indexes
}: {
	list: IBox[];
	toCart?: boolean;
	big?: boolean;
	className?: string;
	indexes?: number[];
}) {
	const filteredList = indexes ? list.filter((_, index) => indexes.includes(index)) : list;

	return filteredList.map((el, index) => {
		const baseProps = {
			imageUrl: el.imageUrl,
			name: el.name,
			categories: el.categories,
			restaurant: el.restaurant,
			address: el.address,
			score: el.score,
			price: el.price,
			toCart,
			className
		};

		return big ? <BigBoxItem key={index} {...baseProps} /> : <BoxItem key={index} {...baseProps} />;
	});
}
