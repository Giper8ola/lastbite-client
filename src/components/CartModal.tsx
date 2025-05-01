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
			className="h-[800px] w-[1100px] rounded-[28px]"
			size="5xl"
			placement="top-center"
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="grid grid-cols-[57%_1fr_40%] pr-0 pt-0">
							<ScrollShadow hideScrollBar className="h-[800px] col-start-1 p-5">
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
										toCart={false}
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
										toCart={false}
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
										toCart={false}
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
