import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import { BOXES_LIST } from '@/utils/consts';

const Home = () => {
	return (
		<div className="py-5">
			<Container>
				<div className="px-5 mt-[100px]">
					<BoxList list={BOXES_LIST} toCart={true} cols={3} rows={1} className="gap-6" />
				</div>
			</Container>
		</div>
	);
};

export default Home;
