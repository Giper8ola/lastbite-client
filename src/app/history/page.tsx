import { OrdersList } from '@/components/OrderList';
import Container from '@/features/Container';
import { ORDERS_LIST } from '@/utils/consts';

const History = () => {
	return (
		<div className="py-5 font-f-primary">
			<Container width={1300}>
				<div className="min-w-[915px] px-10 pb-5">
					<div className="max-w-screen-md h-full">
						<b className="text-3xl">История заказов</b>
						<OrdersList orders={ORDERS_LIST} className="mt-10" />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default History;
