import { useCartStore } from '@/stores/CartStore';

export default function TotalPriceComponent() {
	const cost = useCartStore((state) => state.cost);
	const commission = cost * 0.15;
	const delivery = cost * 0.3;
	return (
		<>
			<p>ИТОГО:</p>
			<b className="font-bold text-3xl">{cost + commission + delivery}₽</b>
			<div className="py-14">
				<div className="flex justify-between">
					<p>Стоимость товаров:</p>
					<b>{cost}₽</b>
				</div>
				<div className="flex justify-between">
					<p>Комиссия:</p>
					<b>{commission}₽</b>
				</div>
				<div className="flex justify-between">
					<p>Доставка:</p>
					<b>{delivery}₽</b>
				</div>
			</div>
		</>
	);
}
