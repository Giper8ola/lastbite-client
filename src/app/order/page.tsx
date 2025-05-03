import { Textarea, Input } from '@heroui/input';
import { RadioGroup, Radio, Form } from '@heroui/react';

import getConfig from 'next/config';
import Image from 'next/image';

import { BoxItem } from '@/components/BoxItem';
import Header from '@/components/Header';
import HeaderButton from '@/features/HeaderButton';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath ?? '';

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

const Order = () => {
	return (
		<div className="py-5 font-f-primary min-w-[1100px] max-w-full">
			<div className="w-full max-w-[1400px] mx-auto">
				<Header basePath={basePath}></Header>
				<Form className="px-32 grid grid-cols-[60%_40%] gap-4 pt-10">
					<b className="font-bold text-[32px] pb-5">Формирование заказа</b>
					<div className="col-start-1 grid grid-rows-none gap-4 text-[24px]">
						<div className="bg-c-secondary rounded-[25px] p-4 shadow-md px-7">
							<b>Корзина</b>
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
						</div>
						<div className="bg-c-secondary rounded-[25px] p-4 shadow-md">
							<div className="w-full h-full">
								<b className="">Адрес доставки</b>
								<Input
									label="Введите адрес"
									className="py-5"
									classNames={{
										inputWrapper: 'group-data-[focus=true]:border-c-primary'
									}}
									labelPlacement="outside"
									placeholder=" "
									variant="bordered"
									isRequired
								></Input>
								<Textarea
									className=""
									classNames={{
										label: 'text-[#000000]',
										inputWrapper: 'group-data-[focus=true]:border-c-primary'
									}}
									label="Добавьте комментарий"
									isClearable
									labelPlacement="outside"
									variant="bordered"
								></Textarea>
							</div>
						</div>
						<div className="bg-c-secondary rounded-[25px] p-4 shadow-md">
							<b>Оплата</b>
							<RadioGroup
								isRequired
								label="Выберите способ оплаты"
								className="text-[16px] w-full"
								classNames={{ label: 'text-[#000000] pb-2', wrapper: 'px-2 gap-8 flex flex-row pb-2' }}
							>
								<Radio
									value="tpay"
									color="success"
									classNames={{ wrapper: 'invisible absolute z-50', base: 'px-0' }}
									className="w-40 h-28 border-foreground-200 hover:border-foreground-300 data-[selected=true]:border-c-primary border-3 rounded-[15px]"
								>
									<Image src={basePath + '/tpay.svg'} alt="tpay logo" width={100} height={100} className="mr-2"></Image>
								</Radio>
								<Radio
									value="sbp"
									color="success"
									classNames={{ wrapper: 'invisible absolute z-50', base: 'px-0' }}
									className="w-40 h-28 border-foreground-200 hover:border-foreground-300 data-[selected=true]:border-c-primary border-3 rounded-[15px]"
								>
									<Image src={basePath + '/sbp.svg'} alt="tpay logo" width={100} height={100} className="mr-2"></Image>
								</Radio>
							</RadioGroup>
						</div>
					</div>
					<div className="bg-c-secondary rounded-[25px] h-fit col-start-2 shadow-md p-10 text-[20px]">
						<p>ИТОГО:</p>
						<b className="font-bold text-[32px]">1000₽</b>
						<div className="py-14">
							<div className="flex justify-between">
								<p>Стоимость товаров:</p>
								<b>800₽</b>
							</div>
							<div className="flex justify-between">
								<p>Комиссия:</p>
								<b>800₽</b>
							</div>
							<div className="flex justify-between">
								<p>Доставка:</p>
								<b>800₽</b>
							</div>
						</div>
						<HeaderButton type="submit" className="w-full ">
							Перейти к оплате
						</HeaderButton>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Order;
