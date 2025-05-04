import { BoxItem } from '@/components/BoxItem';

const Home = () => {
	return (
		<div className="p-[10px] flex flex-row gap-2">
			<BoxItem
				imageUrl={'/fish.png'}
				name={'Абобус Бокс'}
				categories={['Хлебобулочные изделия', 'Японская кухня', 'Мясо', 'Хлебобулочные изделия', 'Японская кухня', 'Мясо']}
				restaurant="Карак Бамбама"
				address="ул. Пушкина, д. Калатушкина"
				score={3.6}
				price={100}
				toCart={true}
				className="my-3 w-[400px]"
			/>
			<BoxItem
				imageUrl={'/fish.png'}
				name={'Абобус Бокс'}
				categories={['Хлебобулочные изделия', 'Японская кухня', 'Мясо', 'Хлебобулочные изделия', 'Японская кухня', 'Мясо']}
				restaurant="Карак Бамбама"
				address="ул. Пушкина, д. Калатушкина"
				score={3.6}
				price={100}
				toCart={true}
				className="my-3 w-[400px]"
			/>
		</div>
	);
};

export default Home;
