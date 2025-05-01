'use client';

import { JSX, ReactNode } from 'react';

import { Accordion, AccordionItem, Button } from '@heroui/react';
import { AlarmClock, Ban, CircleCheck, RotateCcw, Star } from 'lucide-react';

import { BoxItem, Props } from '@/components/BoxItem';

export interface OrderListProps {
	id: string;
	order: JSX.Element[];
	status: StatusProps;
}

export interface StatusProps {
	status: 'complete' | 'process' | 'cancel';
}

export function OrderTitle({ status, className, children }: { status: StatusProps; className?: string; children?: ReactNode }) {
	const STATES = {
		complete: (
			<div className="flex gap-2">
				<b className="text-[24px]">{children}</b>
				<CircleCheck className={'text-[#00FF00] ' + className} />
			</div>
		),
		process: (
			<div className="flex gap-2">
				<b className="text-[24px]">{children}</b>
				<AlarmClock className={'text-[#A7A7A7] ' + className} />
			</div>
		),
		cancel: (
			<div className="flex gap-2">
				<b className="text-[24px]">{children}</b>
				<Ban className={'text-[#FF0000] ' + className} />
			</div>
		)
	};
	return STATES[status.status];
}

export function Order(BoxesList: Props[]) {
	return BoxesList.map((el, ind) => (
		<BoxItem
			key={ind}
			url={el.url}
			name={el.name}
			category={el.category}
			restaurant={el.restaurant}
			address={el.address}
			score={el.score}
			price={el.price}
			toCart={false}
			className="my-3 w-full"
		/>
	));
}

export function OrdersList({ Orders, className }: { Orders: OrderListProps[]; className?: string }) {
	return (
		<div className={' ' + className}>
			<Accordion variant="splitted">
				{Orders.map(({ id, order, status }) => (
					<AccordionItem
						key={`${id}`}
						title={<OrderTitle status={status}>Заказ №{id}</OrderTitle>}
						className="bg-c-secondary mb-4 shadow-md rounded-[25px] px-5 py-2"
					>
						{order}
						<div className="flex gap-4 py-1 w-full">
							<Button
								className="text-c-primary shadow-md border-c-primary data-[hover=true]:!bg-c-primary hover:text-c-secondary px-14"
								variant="ghost"
							>
								<Star />
								<p>Оценить товары</p>
							</Button>
							<Button className="bg-c-primary shadow-md min-w-0 px-2">
								<RotateCcw />
							</Button>
						</div>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}

export default function Body({ basePath, className }: { basePath: string; className?: string }) {
	const BoxesList = [
		{
			url: basePath + '/bread.png',
			name: 'Абобус Бокс',
			category: ['Хлебобулочные изделия'],
			restaurant: 'Карак Бамбама',
			address: 'ул. Пушкина, д. Калатушкина',
			score: 4.9,
			price: 100
		},
		{
			url: basePath + '/fish.png',
			name: 'Абобус Бокс',
			category: ['Хлебобулочные изделия', 'Японская кухня', 'Мясо', 'Хлебобулочные изделия', 'Японская кухня', 'Мясо'],
			restaurant: 'Карак Бамбама',
			address: 'ул. Пушкина, д. Калатушкина',
			score: 3.6,
			price: 100
		},
		{
			url: basePath + '/jap.png',
			name: 'Абобус Бокс',
			category: ['Морепродукты', 'Молочная продукция'],
			restaurant: 'Карак Бамбама',
			address: 'ул. Пушкина, д. Калатушкина',
			score: 2.0,
			price: 100
		}
	];

	const ORDERS: Array<OrderListProps> = [
		{ id: '1', order: Order(BoxesList), status: { status: 'complete' } },
		{ id: '2', order: Order(BoxesList), status: { status: 'cancel' } },
		{ id: '3', order: Order(BoxesList), status: { status: 'process' } }
	];

	return (
		<div className={'w-[60%] h-full ' + className}>
			<b className="text-[32px]">История заказов</b>
			<OrdersList Orders={ORDERS} className="mt-10"></OrdersList>
		</div>
	);
}
