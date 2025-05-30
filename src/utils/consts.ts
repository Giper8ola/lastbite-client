import { IBox, IOrder, ListProps, ShopItem } from '@/types';
import { OrderStatusEnum } from '@/types/enum';

export const COLORS = {
	primary: '#89E49D',
	secondary: '#ffffff'
};

export const BOXES_LIST: IBox[] = [
	{
		id: 1,
		imageUrl: '/bread.png',
		name: 'Matin français',
		categories: ['Выпечка', 'Хлеб', 'Вегетарианское'],
		restaurant: 'Claude Monet',
		address: 'ул. Арзамаская, д. 32',
		score: 4.7,
		price: 350
	},
	{
		id: 2,
		imageUrl: '/fish.png',
		name: 'Дары моря',
		categories: ['Морепродукты', 'Красная рыба', 'Азиатская кухня'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. 74',
		score: 3.8,
		price: 950
	},
	{
		id: 3,
		imageUrl: '/jap.png',
		name: 'Бокс сегуна',
		categories: ['Суши', 'Роллы', 'Морепродукты', 'Азиатская кухня'],
		restaurant: 'Samurai',
		address: 'ул. Речная, д. 13Б',
		score: 4.9,
		price: 1250
	},
	{
		id: 4,
		imageUrl: '/milk.jpg',
		name: 'Утро в простоквашино',
		categories: ['Молоко', 'Завтраки', 'Без говядины'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. 74',
		score: 4.2,
		price: 450
	},
	{
		id: 5,
		imageUrl: '/meet.jpg',
		name: 'Steak night',
		categories: ['Горячие блюда', 'Говядина', 'Только фастфуд'],
		restaurant: 'Мясной дворик',
		address: 'ул. 9-ого января, д. 26',
		score: 4.8,
		price: 1350
	},
	{
		id: 6,
		imageUrl: '/meet.jpg',
		name: 'Moo Kids Meal',
		categories: ['Фастфуд', 'Курица', 'Напитки'],
		restaurant: 'Burger Shot',
		address: 'пр. Литл-Сеул, д. 18, Лос-Сантос',
		score: 4.5,
		price: 320
	},
	{
		id: 7,
		imageUrl: '/meet.jpg',
		name: 'Beef Tower',
		categories: ['Говядина', 'Фастфуд', 'Без молочных продуктов'],
		restaurant: 'Burger Shot',
		address: 'пр. Литл-Сеул, д. 18, Лос-Сантос',
		score: 4.6,
		price: 650
	},
	{
		id: 8,
		imageUrl: '/meet.jpg',
		name: 'Salad Meal',
		categories: ['Здоровая еда', 'Огурцы', 'Помидоры'],
		restaurant: 'Burger Shot',
		address: 'ул. Грока, д. 12, Лос-Сантос',
		score: 4.3,
		price: 850
	},
	{
		id: 9,
		imageUrl: '/meet.jpg',
		name: 'Number 9',
		categories: ['Фастфуд', 'Курица', 'Только фастфуд'],
		restaurant: 'Cluckin Bell',
		address: 'ул. Грока, д. 12, Лос-Сантос',
		score: 4.4,
		price: 420
	},
	{
		id: 10,
		imageUrl: '/meet.jpg',
		name: 'Number 6',
		categories: ['Фастфуд', 'Индейка', 'Без рыбы'],
		restaurant: 'Cluckin Bell',
		address: 'ул. Грока, д. 12, Лос-Сантос',
		score: 4.7,
		price: 480
	},
	{
		id: 11,
		imageUrl: '/meet.jpg',
		name: 'Number 7',
		categories: ['Фастфуд', 'Свинина', 'Картошка'],
		restaurant: 'Cluckin Bell',
		address: 'ул. Грока, д. 12, Лос-Сантос',
		score: 4.1,
		price: 550
	},
	{
		id: 12,
		imageUrl: '/meet.jpg',
		name: 'Number 45',
		categories: ['Фастфуд', 'Говядина', 'Сыры'],
		restaurant: 'Cluckin Bell',
		address: 'ул. Грока, д. 12, Лос-Сантос',
		score: 4.9,
		price: 720
	},
	{
		id: 13,
		imageUrl: '/bread.png',
		name: 'Перекус',
		categories: ['Пицца', 'Сыры', 'Без морепродуктов'],
		restaurant: 'Pizza Stack',
		address: 'ул. Альта, д. 15, Лос-Сантос',
		score: 4.0,
		price: 350
	},
	{
		id: 14,
		imageUrl: '/bread.png',
		name: 'Двойной люкс',
		categories: ['Пицца', 'Говядина', 'Помидоры'],
		restaurant: 'Pizza Stack',
		address: 'ул. Альта, д. 15, Лос-Сантос',
		score: 4.8,
		price: 550
	},
	{
		id: 15,
		imageUrl: '/bread.png',
		name: 'Гора еды',
		categories: ['Пицца', 'Свинина', 'Картошка'],
		restaurant: 'Pizza Stack',
		address: 'ул. Альта, д. 15, Лос-Сантос',
		score: 4.5,
		price: 650
	},
	{
		id: 16,
		imageUrl: '/jap.png',
		name: 'Японский день',
		categories: ['Суши', 'Тунец', 'Азиатская кухня'],
		restaurant: 'Pizza Stack',
		address: 'ул. Альта, д. 15, Лос-Сантос',
		score: 4.2,
		price: 980
	},
	{
		id: 17,
		imageUrl: '/meet.jpg',
		name: 'BBQ',
		categories: ['Горячие блюда', 'Свинина', 'Без овощей'],
		restaurant: '24/7',
		address: 'ул. Карла, д. 11 Лос-Сантос, Лос-Сантос',
		score: 4.6,
		price: 750
	},
	{
		id: 18,
		imageUrl: '/milk.jpg',
		name: 'Sprank-box',
		categories: ['Напитки', 'Сильногазированные напитки', 'Без молочных продуктов'],
		restaurant: '24/7',
		address: 'ул. Карла, д. 11 Лос-Сантос, Лос-Сантос',
		score: 3.9,
		price: 280
	},
	{
		id: 19,
		imageUrl: '/fish.png',
		name: 'ViceFish',
		categories: ['Горячие блюда', 'Палтус', 'Без говядины'],
		restaurant: '24/7',
		address: 'ул. Карла, д. 11 Лос-Сантос, Лос-Сантос',
		score: 4.4,
		price: 670
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
	{ key: 'drinks', value: 'Напитки' },
	{ key: 'breakfasts', value: 'Завтраки' },
	{ key: 'pizza', value: 'Пицца' },
	{ key: 'wok', value: 'Вок' },
	{ key: 'sushi', value: 'Суши' },
	{ key: 'rolls', value: 'Роллы' },
	{ key: 'healthy_food', value: 'Здоровая еда' }
];
export const PRODUCTS: ListProps[] = [
	{ key: 'beef', value: 'Говядина' },
	{ key: 'pork', value: 'Свинина' },
	{ key: 'chicken', value: 'Курица' },
	{ key: 'turkey', value: 'Индейка' },
	{ key: 'cheeses', value: 'Сыры' },
	{ key: 'potatoes', value: 'Картошка' },
	{ key: 'tomatoes', value: 'Помидоры' },
	{ key: 'cucumbers', value: 'Огурцы' },
	{ key: 'bread', value: 'Хлеб' },
	{ key: 'cereals', value: 'Крупы' },
	{ key: 'milk', value: 'Молоко' },
	{ key: 'hc_drinks', value: 'Сильногазированные напитки' },
	{ key: 'water', value: 'Вода' },
	{ key: 'juices', value: 'Соки' },
	{ key: 'seafood', value: 'Морепродукты' },
	{ key: 'halibut', value: 'Палтус' },
	{ key: 'tuna', value: 'Тунец' },
	{ key: 'red_fish', value: 'Красная рыба' },
	{ key: 'ice_cream', value: 'Мороженное' }
];
export const PREFERENCES: ListProps[] = [
	{ key: 'vegetarian', value: 'Вегетарианское' },
	{ key: 'no_beef', value: 'Без говядины' },
	{ key: 'no_diary', value: 'Без молочных продуктов' },
	{ key: 'no_seafood', value: 'Без морепродуктов' },
	{ key: 'no_fish', value: 'Без рыбы' },
	{ key: 'no_vegetables', value: 'Без овощей' },
	{ key: 'only_fastfood', value: 'Только фастфуд' },
	{ key: 'asian_food', value: 'Азиатская кухня' }
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
	},
	{
		key: 'burger_shot',
		value: {
			name: 'Burger Shot',
			address: 'пр. Литл-Сеул, д. 18, Лос-Сантос',
			rating: 5.0,
			description:
				'«Ты голоден? Ты злой? Ты в дерьме? Welcome to Burger Shot!» Дешёвый фастфуд для тех, у кого остались последние $3 после ставок на скачках. Бургеры здесь напоминают подошву ботинка, но зато с «секретным соусом» (вероятно, это майонез + слезы работников). Интерьер — выцветшие плакаты, сломанный кондиционер и вечно пьяный охранник. Лайфхак: если закажешь «Мега-Шот», получишь бесплатную драку с местными членами банды. Бонус: туалет, где снимали половину миссий GTA: San Andreas.',
			boxes: [1],
			imageUrl: '/burger_shot.png'
		}
	},
	{
		key: 'cluckin-bell',
		value: {
			name: "Cluckin' Bell",
			address: 'ул. Грока, д. 12, Лос-Сантос',
			rating: 5.0,
			description:
				'«Попробуй наш новый Белл-Бургер — или мы тебя пристрелим!» Легендарная сеть фастфуда, где курица, возможно, сделала больше крутых трюков, чем ты за всю жизнь. Меню — это хардкорный микс жира, соли и сомнительного мяса: наггетсы «Криспи Кранч», «Бешеный Белл-Бокс» и литровая кола, которая разъедает стакан. Интерьер — пластик, неоновые огни и вечно злой кассир. Идеальное место для перекуса после ограбления или перед дракой с уличной бандой. Просто не задавай вопросов про состав соуса.',
			boxes: [1],
			imageUrl: '/cluckin_bell.png'
		}
	},
	{
		key: 'pizza-stack',
		value: {
			name: 'Pizza Stack',
			address: 'ул. Альта, д. 15, Лос-Сантос',
			rating: 5.0,
			description:
				'«30 минут или бесплатно… если успеешь выжить». Пиццерия, где тесто замешано на воде из-под крана Лос-Сантоса, а топпинги выбирают по принципу «что не сгнило». Интерьер — плакаты с мафиози 80-х, столы с выгравированными признаниями в любви и ножи для пиццы, которые пропадают чаще, чем курьеры. В меню: «Гангстерская Пепперони» (острая, как обвинения прокурора), «Вегетарианская» (шутка для тех, кто верит в хороших копов) и «Сюрприз Шефа» (лучше не спрашивать). Доставка осуществляется на мопедах, но 50% пицц добираются только до места преступления.',
			boxes: [1],
			imageUrl: '/pizza_stack.png'
		}
	},
	{
		key: '24-7',
		value: {
			name: '24/7',
			address: 'ул. Карла, д. 11 Лос-Сантос',
			rating: 5.0,
			description:
				'«Мы открыты всегда… особенно во время ограблений». Универсальный магазин, где можно купить всё: от энергетиков до баллистических масок. Интерьер — мерцающие лампы, полки с товарами «no name» и кассир, который видел столько преступлений, что мог бы вести криминальную хронику. В меню: «Читос с воздухом» (пакет на 80% состоит из надежд), «Мясные палочки „Сюрприз“» (мясо какого животного? Сюрприз!) и кофе, который старше твоего персонажа. Совет: если зайдешь ночью — проверь, не припаркован ли у входа белый «Пегаси».',
			boxes: [1],
			imageUrl: '/24.7.png'
		}
	}
];
