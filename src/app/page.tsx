import ShopsMenu from '@/components/ShopsMenu';
import Container from '@/features/Container';

const Home = () => {
	return (
		<div className="font-f-primary py-5">
			<Container>
				<ShopsMenu />
			</Container>
		</div>
	);
};

export default Home;
