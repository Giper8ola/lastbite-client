import { AlarmClock, Ban, CircleCheck } from 'lucide-react';

import { OrderStatusProps } from '@/types';
import { OrderStatusEnum } from '@/types/enum';

export const OrderStatus = ({ status, className, children }: OrderStatusProps) => {
	const STATES = {
		[OrderStatusEnum.Complete]: (
			<div className="flex gap-2">
				<b className="text-[24px]">{children}</b>
				<CircleCheck className={'text-[#00FF00] ' + className} />
			</div>
		),
		[OrderStatusEnum.Process]: (
			<div className="flex gap-2">
				<b className="text-[24px]">{children}</b>
				<AlarmClock className={'text-[#A7A7A7] ' + className} />
			</div>
		),
		[OrderStatusEnum.Cancel]: (
			<div className="flex gap-2">
				<b className="text-[24px]">{children}</b>
				<Ban className={'text-[#FF0000] ' + className} />
			</div>
		)
	};
	return STATES[status];
};
