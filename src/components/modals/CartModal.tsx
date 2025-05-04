import { Modal, ModalContent, ModalBody, Button, ScrollShadow, ModalHeader } from '@heroui/react';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';

import { BoxList } from '@/components/BoxList';
import { CommonModalProps } from '@/types';
import { BOXES_LIST } from '@/utils/consts';

export default function CartModal({ isOpen, onOpenChange }: CommonModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			className="rounded-[28px] pt-5 font-f-primary"
			size="lg"
			placement="top-center"
			classNames={{ closeButton: 'mt-4 mr-4' }}
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{() => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							<b className="text-[22px]">Корзина</b>
						</ModalHeader>
						<ModalBody className="pl-0 pr-0 pt-0 flex items-center gap-1">
							<ScrollShadow hideScrollBar className="h-96 px-5 pb-5 mb-10">
								<BoxList list={BOXES_LIST} />
							</ScrollShadow>
							<Link href={process.env.NEXT_PUBLIC_BASE_PATH + '/order'} className="w-[90%]">
								<Button variant="faded" className="w-full h-12 text-[20px] font-bold border-c-primary bg-c-primary mb-5 hover:">
									<p>Оформить заказ</p> <ArrowRight className="ml-5 " />
								</Button>
							</Link>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
