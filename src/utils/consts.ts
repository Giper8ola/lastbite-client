import { IBox, IOrder, ListProps, ShopItem } from '@/types';
import { OrderStatusEnum } from '@/types/enum';

export const COLORS = {
	primary: '#89E49D',
	secondary: '#ffffff'
};

export const BOXES_LIST: IBox[] = [
	{
		imageUrl: '/bread.png',
		name: 'Matin français',
		categories: ['Хлебобулочные изделия'],
		restaurant: 'Claude Monet',
		address: 'ул. Арзамаская, д. 32',
		score: 4.9,
		price: 399
	},
	{
		imageUrl: '/fish.png',
		name: 'Дары моря',
		categories: ['Рыба', 'Морепродукты'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. 74',
		score: 2.6,
		price: 899
	},
	{
		imageUrl: '/jap.png',
		name: 'Бокс сегуна',
		categories: [
			'Японская кухня',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты',
			'Морепродукты'
		],
		restaurant: 'Samurai',
		address: 'ул. Речная, д. 13Б',
		score: 4.7,
		price: 1199
	},
	{
		imageUrl: '/milk.jpg',
		name: 'Утро в простоквашино',
		categories: ['Молочная продукция'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. 74',
		score: 1.7,
		price: 499
	},
	{
		imageUrl: '/meet.jpg',
		name: 'Steak night',
		categories: ['Мясо'],
		restaurant: 'Мясной дворик',
		address: 'ул. 9-ого января, д. 26',
		score: 5.0,
		price: 1299
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

export const SHOPS: ShopItem[] = [
	{
		key: 'claude_monet',
		value: {
			name: 'Claude Monet',
			address: 'ул. Арзамаская, д. 32',
			rating: 5.0,
			description:
				'Погрузитесь в мир импрессионизма, где каждая деталь — мазок кисти великого художника. Ресторан вдохновлён творчеством Клода Моне: интерьер выполнен в пастельных тонах, а залы украшены репродукциями его картин и живыми цветами, словно сошедшими с полотен «Водяных лилий». Меню — это симфония французской кухни с акцентом на эстетику: тартар из лосося с золотой икрой, утиный конфи с вишнёвым соусом и десерты, напоминающие съедобные акварели. Идеальное место для романтических ужинов и ценителей искусства, где блюда становятся частью живого полотна.',
			boxes: [0],
			imageUrl: '/claude_monet.png'
		}
	},
	{
		key: 'karak_bambama',
		value: {
			name: 'Карак Бамбама',
			address: 'ул. Пушкина, д. 74',
			rating: 3.7,
			description:
				'Восточная сказка, где смешались ароматы специй, звуки дабке и тепло гостеприимства. Ресторан сочетает традиции Ближнего Востока и современные тренды: здесь подают хрустящий фалафель с мятным йогуртом, томлёную баранину с фисташками и десерты вроде пахлавы с шафрановым мороженым. Интерьер напоминает роскошный караван-сарай — низкие диваны, медные светильники и ковры ручной работы. К каждому блюду — чашка крепкого кофе с кардамоном или гранатовый лимонад. Место для тех, кто ищет щедрость вкуса и душевность.',
			boxes: [1, 3],
			imageUrl: '/karak_bambama.png'
		}
	},
	{
		key: 'samurai',
		value: {
			name: 'Samurai',
			address: 'ул. Речная, д. 13Б',
			rating: 4.8,
			description:
				'Минимализм и глубокая философия японских воинов воплотились в этом ресторане. Интерьер — лаконичные деревянные линии, каменные акценты и самурайские доспехи под стеклом. Меню деликатно балансирует между традицией и новаторством: сашими из голубого тунца, рамен с трюфельным маслом, темпура с цветами цукини. Особое внимание — ритуалу: блюда подают на чёрной керамике, а шеф-повар лично демонстрирует искусство нарезки сашими. Для гурманов — дегустационное меню с парой саке. Место, где каждый прием пищи — медитация.',
			boxes: [2],
			imageUrl: '/samurai.png'
		}
	},
	{
		key: 'meat_yard',
		value: {
			name: 'Мясной дворик',
			address: 'ул. 9-ого января, д. 26',
			rating: 4.1,
			description:
				'Царство огня, дыма и сочного мяса! Ресторан в стиле деревенской усадьбы: грубоватые столы, открытая кухня с дровяным грилем и аромат копчёных ребрышек, который витает в воздухе. В меню — всё, что заставит сердце мясоеда биться чаще: томлёная говяжья щека с хреном, медальоны из оленины с брусничным соусом, а также бургеры с угольной булкой. По вечерам играет живая музыка, а гостям предлагают продегустировать крафтовое пиво из местной пивоварни. Место, где не стесняются есть руками и смеяться громко.',
			boxes: [4],
			imageUrl: '/meat_yard.png'
		}
	}
];
