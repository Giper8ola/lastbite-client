import { ShopItemSmall } from '@/components/ShopItemSmall';
import Container from '@/features/Container';
import { SHOPS } from '@/utils/consts';

const Home = () => {
	return (
		<div className="font-f-primary py-5">
			<Container width={1300}>
				<div className="min-w-[915px] px-10 pb-5">
					<b className="font-bold text-3xl">Магазины</b>
					<div className="grid grid-cols-4 gap-5 pt-10">
						{SHOPS.map((el, ind) => (
							<div key={el.key} className="flex-none z-10 hover:z-20">
								<ShopItemSmall key={el.key} item={el} index={ind} />
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
