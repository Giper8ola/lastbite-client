'use client';
import { Modal, ModalContent, ModalBody, Button, ScrollShadow } from '@heroui/react';

import HeaderButton from '@/features/HeaderButton';
import { COLORS } from '@/utils/consts';

import { BoxList } from './Boxlist';

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
									<BoxList
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
									<BoxList
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
									<BoxList
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
							<div className="col-start-3 shadow-[-6px_0px_8px_0px_rgba(0,0,0,0.3)] pt-5 pb-8 px-3 grid grid-rows-2">
								<p className="text-[24px] font-bold px-5 ">Доставить по адресу:</p>
								<div className="text-[24px] font-bold rows-end-1 px-5 grid grid-rows-4 ">
									<p className="row-start-1 leading-[80px]">Cпособ оплаты</p>
									<HeaderButton color={COLORS.primary} className="w-[100%] h-[54px] rounded-full"></HeaderButton>
									<HeaderButton color={COLORS.primary} className="w-[100%] h-[54px] rounded-full"></HeaderButton>
									<HeaderButton color={COLORS.primary} className="w-[100%] h-[54px] rounded-full"></HeaderButton>
								</div>
								<div className="row-start-3 items-center flex flex-col">
									<Button
										onPress={onClose}
										variant="faded"
										className={`w-[90%] h-20 text-[24px] font-bold border-[#89E49D]`}
										style={{
											backgroundColor: COLORS.primary
										}}
									>
										ОПЛАТИТЬ
									</Button>
								</div>
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
