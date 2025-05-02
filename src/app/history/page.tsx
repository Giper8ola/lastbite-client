import { OrdersList } from '@/components/OrderList';
import Container from '@/features/Container';
import { ORDERS_LIST } from '@/utils/consts';

const History = () => {
	return (
		<div className="py-5 font-f-primary min-w-[1100px] max-w-full">
			<Container>
				<div className="w-[60%] h-full p-16">
					<b className="text-[32px]">История заказов</b>
					<OrdersList orders={ORDERS_LIST} className="mt-10" />
				</div>
			</Container>
		</div>
	);
};

export default History;
