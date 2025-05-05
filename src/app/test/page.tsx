import { ShopItemSmall } from '@/components/ShopItemSmall';
import { SHOPS } from '@/utils/consts';

const Home = () => {
	return (
		<div className="p-[10px] flex flex-row gap-2">
			{SHOPS.map((el) => (
				<div key={el.key}>
					<ShopItemSmall key={el.key} item={el} />
				</div>
			))}
		</div>
	);
};

export default Home;
