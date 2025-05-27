'use client';

import { useCartStore } from '@/stores/CartStore';
import { BoxesSize } from '@/types/enum';

import { BoxList } from './BoxList';

export default function BoxexListOrderComponent() {
	const boxes = useCartStore((state) => state.boxes);
	return (
		<div className="bg-c-secondary rounded-[25px] p-4 shadow-md px-7">
			<b>Корзина</b>
			<BoxList list={boxes} size={BoxesSize.Big} toCart={true} />
		</div>
	);
}
