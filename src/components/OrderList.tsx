'use client';
import { Accordion, AccordionItem, Button, useDisclosure } from '@heroui/react';
import { RotateCcw, Star } from 'lucide-react';

import { BoxList } from '@/components/BoxList';
import ModalManager from '@/components/modals/ModalManager';
import { OrderStatus } from '@/features/OrderStatus';
import { OrderListProps } from '@/types';
import { ModalTypesEnum } from '@/types/enum';

export function OrdersList({ orders, className }: OrderListProps) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<div className={' ' + className}>
			<Accordion variant="splitted">
				{orders.map(({ id, boxes, status }) => (
					<AccordionItem
						key={`${id}`}
						title={<OrderStatus status={status}>Заказ №{id}</OrderStatus>}
						className="bg-c-secondary mb-4 shadow-md rounded-[25px] px-5 py-2"
					>
						<BoxList list={boxes} big={true} />
						<div className="flex gap-4 py-1 w-full">
							<Button
								className="text-c-primary shadow-md border-c-primary data-[hover=true]:!bg-c-primary hover:text-c-secondary px-14"
								variant="ghost"
								onPress={onOpen}
							>
								<Star />
								<p>Оценить товары</p>
							</Button>
							<ModalManager modalName={ModalTypesEnum.Rate} isOpen={isOpen} onOpenChange={onOpenChange}></ModalManager>
							<Button className="bg-c-primary shadow-md min-w-0 px-2">
								<RotateCcw />
							</Button>
						</div>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
