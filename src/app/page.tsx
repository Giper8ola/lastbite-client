import { BoxItem } from '@/components/BoxItem';
import Header from '@/components/Header';
import { BOXES_LIST } from '@/utils/consts';

const Home = () => {
	return (
		<div className="py-5">
			<div className="w-full max-w-[1400px] mx-auto">
				<Header />
				<div className="px-[20px] mt-[100px] grid grid-cols-3 grid-rows-1 gap-6">
					{BOXES_LIST.map((el, ind) => (
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
		</div>
	);
};

export default Home;
