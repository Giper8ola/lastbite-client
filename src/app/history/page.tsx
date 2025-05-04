import { OrdersList } from '@/components/OrderList';
import Container from '@/features/Container';
import { ORDERS_LIST } from '@/utils/consts';

const History = () => {
	return (
		<div className="py-5 font-f-primary">
			<Container>
				<div className="max-w-screen-md h-full pt-16">
					<b className="text-3xl">История заказов</b>
					<OrdersList orders={ORDERS_LIST} className="mt-10" />
				</div>
			</Container>
		</div>
	);
};

export default History;
