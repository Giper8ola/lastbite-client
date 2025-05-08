'use client';
import { Form } from '@heroui/react';

import HeaderButton from '@/features/HeaderButton';
import { useCartStore } from '@/stores/CartStore';

import BoxexListOrderComponent from './BoxesListOrderComponent';
import OrderAddressComponent from './OrderAddressComponent';
import PaymentMethodComponent from './PaymentMethodComponent';
import TotalPriceComponent from './TotalPriceComponent';

export default function OrderDetails() {
	const clear = useCartStore((state) => state.clear);
	return (
		<>
			<b className="font-bold text-3xl pb-5">Формирование заказа</b>
			<Form onSubmit={clear} className="grid grid-cols-[60%_40%] grid-rows-1 flex-none gap-4 pt-10">
				<div className="grid grid-cols-1 gap-4 text-[24px]">
					<BoxexListOrderComponent />
					<OrderAddressComponent />
					<PaymentMethodComponent />
				</div>
				<div className="bg-c-secondary rounded-[25px] shadow-md p-10 text-[20px]">
					<TotalPriceComponent />
					<HeaderButton type="submit" className="w-full ">
						Перейти к оплате
					</HeaderButton>
				</div>
			</Form>
		</>
	);
}
