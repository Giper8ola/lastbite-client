import { BoxItem } from '@/components/BoxItem';
import { IBox } from '@/types';

export function BoxList({ list, toCart, className }: { list: IBox[]; toCart?: boolean; className?: string }) {
	return list.map((el, ind) => (
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
			className={'my-3 w-full ' + className}
		/>
	));
}
