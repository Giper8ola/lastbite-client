'use client';
import { Accordion, AccordionItem, Button, ScrollShadow } from '@heroui/react';
import { RotateCcw } from 'lucide-react';

import { BoxList } from '@/components/BoxList';
import { OrderStatus } from '@/features/OrderStatus';
import { OrderListProps } from '@/types';
import { BoxesSize } from '@/types/enum';

export function OrdersList({ orders, className }: OrderListProps) {
	return (
		<div className={className}>
			<Accordion variant="splitted">
				{orders.map(({ id, boxes, status }) => (
					<AccordionItem
						key={`${id}`}
						title={<OrderStatus status={status}>Заказ №{id}</OrderStatus>}
						className="bg-c-secondary mb-4 shadow-md rounded-[25px] px-5 py-2"
					>
						<ScrollShadow className="h-[90vh] scrollbar-hide">
							<BoxList list={boxes} size={BoxesSize.Small} />
						</ScrollShadow>
						<div className="flex gap-4 pt-1	h-[7vh] items-center">
							<Button
								className="text-c-primary shadow-md border-c-primary data-[hover=true]:!bg-c-primary hover:text-c-secondary px-14"
								variant="ghost"
							>
								<RotateCcw />
								<p>Повторить</p>
							</Button>
						</div>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
