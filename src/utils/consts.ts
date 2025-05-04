import { IBox, IOrder, ListProps } from '@/types';
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

export const CITIES_LIST: ListProps[] = [
	{ key: 'moscow', value: 'Москва' },
	{ key: 'voronezh', value: 'Воронеж' },
	{ key: 'saint-p', value: 'Санкт-Петербург' },
	{ key: 'volgograd', value: 'Волгоград' },
	{ key: 'liski', value: 'Лиски' },
	{ key: 'rossosh', value: 'Россошь' }
];

export const TYPE_DISHES: ListProps[] = [
	{ key: 'bakery', value: 'Выпечка' },
	{ key: 'fastfood', value: 'Фастфуд' },
	{ key: 'hot_dish', value: 'Горячие блюда' },
	{ key: 'desserts', value: 'Десерты' },
	{ key: 'drinks', value: 'Напитки' }
];
export const COOKERY: ListProps[] = [
	{ key: 'russian', value: 'Русская' },
	{ key: 'american', value: 'Американская' },
	{ key: 'georgian', value: 'Грузинская' },
	{ key: 'caucasian', value: 'Кавказская' },
	{ key: 'italian', value: 'Итальянска' },
	{ key: 'european', value: 'Европейская' },
	{ key: 'asian', value: 'Азиатская' }
];
export const PREFERENCES: ListProps[] = [
	{ key: 'vegetarian', value: 'Вегетарианское' },
	{ key: 'vegan', value: 'Веганское' },
	{ key: 'halal', value: 'Халяль' },
	{ key: 'no_beef', value: 'Без говядины' },
	{ key: 'no_diary', value: 'Без молочных продуктов' },
	{ key: 'no_seafood', value: 'Без морепродуктов' },
	{ key: 'no_citrus', value: 'Без цитрусовых' }
];
