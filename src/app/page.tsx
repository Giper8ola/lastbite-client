import { ShopItemSmall } from '@/components/ShopItemSmall';
import Container from '@/features/Container';
import { SHOPS } from '@/utils/consts';

const Home = () => {
	return (
		<div className="font-f-primary py-5">
			<Container className="max-w-[1300px] min-w-[915px] px-10 pb-5">
				<b className="font-bold text-3xl">Магазины</b>
				<div className="grid grid-cols-4 gap-5 pt-10">
					{SHOPS.map((el) => (
						<div key={el.key} className="mb-[95px] flex-none">
							<ShopItemSmall key={el.key} item={el} />
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Home;
