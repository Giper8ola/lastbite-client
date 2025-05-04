'use client';
import { Accordion, AccordionItem, Button } from '@heroui/react';
import { RotateCcw } from 'lucide-react';

import { BoxList } from '@/components/BoxList';
import { OrderStatus } from '@/features/OrderStatus';
import { OrderListProps } from '@/types';

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
						<BoxList list={boxes} big={true} />
						<div className="flex gap-4 py-1">
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
