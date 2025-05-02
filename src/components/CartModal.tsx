'use client';

import { Modal, ModalContent, ModalBody, Button, ScrollShadow } from '@heroui/react';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';

import { BoxItem } from './BoxItem';

export default function CartModal({
	isOpen,
	onOpenChange,
	basePath
}: {
	isOpen: boolean;
	onOpenChange: () => void;
	basePath?: string;
}) {
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

	return (
		<Modal
			isOpen={isOpen}
			className="rounded-[28px] pt-5"
			size="lg"
			placement="top-center"
			classNames={{ closeButton: 'mt-4 mr-4' }}
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="pl-0 pr-0 pt-0 flex items-center gap-1">
							<div className="w-full justify-start pb-2">
								<b className="text-[22px] pl-10">Корзина</b>
							</div>
							<ScrollShadow hideScrollBar className="h-96 px-5 pb-5 mb-10">
								{BoxesList.map((el, ind) => (
									<BoxItem
										key={ind}
										url={el.url}
										name={el.name}
										category={el.category}
										restaurant={el.restaurant}
										address={el.address}
										score={el.score}
										price={el.price}
										toCart={true}
										className="my-3 w-full"
									/>
								))}
								{BoxesList.map((el, ind) => (
									<BoxItem
										key={ind}
										url={el.url}
										name={el.name}
										category={el.category}
										restaurant={el.restaurant}
										address={el.address}
										score={el.score}
										price={el.price}
										toCart={true}
										className="my-3 w-full"
									/>
								))}
								{BoxesList.map((el, ind) => (
									<BoxItem
										key={ind}
										url={el.url}
										name={el.name}
										category={el.category}
										restaurant={el.restaurant}
										address={el.address}
										score={el.score}
										price={el.price}
										toCart={true}
										className="my-3 w-full"
									/>
								))}
							</ScrollShadow>
							<Link href={basePath + '/order'} className="w-[90%]">
								<Button variant="faded" className="w-full h-12 text-[20px] font-bold border-c-primary bg-c-primary mb-5">
									<p>Оформить заказ</p> <ArrowRight className="ml-5 " />
								</Button>
							</Link>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
