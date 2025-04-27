import getConfig from 'next/config';

import { Button } from '@/components/boxlist';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath ?? '';

const BoxesList = [
	{
		url: basePath + '/bread.png',
		name: 'Абобус Бокс',
		category: ['Хлебобулочные изделия'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. Калатушкина',
		score: 4.9
	},
	{
		url: basePath + '/fish.png',
		name: 'Абобус Бокс',
		category: ['Хлебобулочные изделия', 'Японская кухня', 'Мясо', 'Хлебобулочные изделия', 'Японская кухня', 'Мясо'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. Калатушкина',
		score: 3.6
	},
	{
		url: basePath + '/jap.png',
		name: 'Абобус Бокс',
		category: ['Морепродукты', 'Молочная продукция'],
		restaurant: 'Карак Бамбама',
		address: 'ул. Пушкина, д. Калатушкина',
		score: 2.0
	}
];

export default function Home() {
	return (
		<div className="p-10 flex flex-col gap-6">
			{BoxesList.map((el, ind) => (
				<Button
					key={ind}
					url={el.url}
					name={el.name}
					category={el.category}
					restaurant={el.restaurant}
					address={el.address}
					score={el.score}
				/>
			))}
		</div>
	);
}
