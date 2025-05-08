import OrderDetails from '@/components/OrderDetails';
import Container from '@/features/Container';

const Order = () => {
	return (
		<div className="py-5 font-f-primary">
			<Container width={1250}>
				<OrderDetails />
			</Container>
		</div>
	);
};

export default Order;
