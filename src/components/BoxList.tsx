import { BoxItem } from '@/components/BoxItem';
import { IBox } from '@/types';

export function BoxList({ list, toCart }: { list: IBox[]; toCart?: boolean }) {
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
			className="my-3 w-full"
		/>
	));
}
