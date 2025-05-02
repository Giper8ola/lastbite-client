import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react';

import { BoxItem } from './BoxItem';

export default function RateModal({
	isOpen,
	onOpenChange,
	isAuth,
	setAuth,
	basePath
}: {
	isOpen: boolean;
	onOpenChange: () => void;
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
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
			placement="top-center"
			classNames={{ closeButton: 'mt-4 mr-3' }}
			onOpenChange={onOpenChange}
			size="md"
			className="rounded-[28px]"
		>
			<ModalContent>
				{(onClose) => (
					<div>
						<ModalHeader className="flex flex-col text-[22px] font-bold">Оценка</ModalHeader>
						<ModalBody className="w-[100%] px-10 py-5">
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
									className="mb-1 w-full py-1"
								/>
							))}
						</ModalBody>
					</div>
				)}
			</ModalContent>
		</Modal>
	);
}
