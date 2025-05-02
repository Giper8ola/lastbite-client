import { BoxItem } from '@/components/BoxItem';
import Container from '@/features/Container';
import { BOXES_LIST } from '@/utils/consts';

const Home = () => {
	return (
		<div className="py-5">
			<Container>
				<div className="px-[20px] mt-[100px] grid grid-cols-3 grid-rows-1 gap-6">
					{BOXES_LIST.map((el, ind) => (
						<BoxItem
							key={ind}
							imageUrl={el.imageUrl}
							name={el.name}
							categories={el.categories}
							restaurant={el.restaurant}
							address={el.address}
							score={el.score}
							price={el.price}
							toCart={true}
							Count={1}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Home;
