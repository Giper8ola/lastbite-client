'use client';
import { Form } from '@heroui/react';

import HeaderButton from '@/features/HeaderButton';
import { useCartStore } from '@/stores/CartStore';

import BoxexListOrderComponent from './BoxesListOrder';
import OrderAddress from './OrderAddress';
import PaymentMethod from './PaymentMethod';
import TotalPrice from './TotalPrice';

export default function OrderDetails() {
	const clear = useCartStore((state) => state.clear);
	return (
		<>
			<b className="font-bold text-3xl pb-5">Формирование заказа</b>
			<Form onSubmit={clear} className="grid grid-cols-[60%_40%] grid-rows-1 flex-none gap-4 pt-10">
				<div className="grid grid-cols-1 gap-4 text-[24px]">
					<BoxexListOrderComponent />
					<OrderAddress />
					<PaymentMethod />
				</div>
				<div className="bg-c-secondary rounded-[25px] shadow-md p-10 text-[20px]">
					<TotalPrice />
					<HeaderButton type="submit" className="w-full ">
						Перейти к оплате
					</HeaderButton>
				</div>
			</Form>
		</>
	);
}
