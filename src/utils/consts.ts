import { IBox, IOrder } from '@/types';
import { OrderStatusEnum } from '@/types/enum';

export const COLORS = {
	primary: '#89E49D',
	secondary: '#ffffff'
};

export const BOXES_LIST: IBox[] = [
	{
		imageUrl: '/bread.png',
		name: 'Абобус Бокс',
		categories: ['Хлебобулочные изделия'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. Калатушкина',
		score: 4.9,
		price: 100
	},
	{
		imageUrl: '/fish.png',
		name: 'Абобус Бокс',
		categories: ['Хлебобулочные изделия', 'Японская кухня', 'Мясо', 'Хлебобулочные изделия', 'Японская кухня', 'Мясо'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. Калатушкина',
		score: 3.6,
		price: 100
	},
	{
		imageUrl: '/jap.png',
		name: 'Абобус Бокс',
		categories: ['Морепродукты', 'Молочная продукция'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. Калатушкина',
		score: 2.0,
		price: 100
	}
];

export const ORDERS_LIST: Array<IOrder> = [
	{ id: 1, boxes: BOXES_LIST, status: OrderStatusEnum.Complete },
	{ id: 2, boxes: BOXES_LIST, status: OrderStatusEnum.Cancel },
	{ id: 3, boxes: BOXES_LIST, status: OrderStatusEnum.Process }
];
