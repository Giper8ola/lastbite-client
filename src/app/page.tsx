import getConfig from 'next/config';

import { BoxItem } from '@/components/BoxItem';
import Header from '@/components/Header';

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

const Home = () => {
	return (
		<div className="px-20 py-5 ">
			<Header />
			<div className="h-[1200px] px-[20px] mt-[100px] flex flex-col flex-wrap gap-6">
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
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
