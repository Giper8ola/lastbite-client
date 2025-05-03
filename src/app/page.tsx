import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import { BOXES_LIST } from '@/utils/consts';

const Home = () => {
	return (
		<div className="py-5">
			<Container>
				<div className="px-5 mt-[100px] grid grid-cols-3 grid-rows-1 gap-6">
					<BoxList list={BOXES_LIST} toCart={true} />
				</div>
			</Container>
		</div>
	);
};

export default Home;
