import { Modal, ModalContent, ModalBody, Button, ScrollShadow, ModalHeader } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

import Link from 'next/link';

import { BoxList } from '@/components/BoxList';
import { useCartStore } from '@/stores/CartStore';
import { CommonModalProps } from '@/types';
import { BoxesSize } from '@/types/enum';

export default function CartModal({ modalDisclosure }: CommonModalProps) {
	const { boxes, cost } = useCartStore(useShallow((state) => ({ boxes: state.boxes, cost: state.cost })));
	return (
		<Modal
			isOpen={modalDisclosure.isOpen}
			className="rounded-[28px] pt-5 font-f-primary"
			size="lg"
			placement="top-center"
			classNames={{ closeButton: 'mt-4 mr-4' }}
			onOpenChange={modalDisclosure.onOpenChange}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							<b className="text-[22px]">Корзина</b>
						</ModalHeader>
						<ModalBody className="pl-0 pr-0 pt-0 flex items-center gap-1">
							<ScrollShadow hideScrollBar className="h-96 w-full px-5 pb-5 mb-10">
								<BoxList list={boxes} size={BoxesSize.Small} toCart={true} />
							</ScrollShadow>
							<Button
								isDisabled={cost === 0 ? true : false}
								variant="faded"
								className="w-[90%] h-12 text-[20px] font-bold border-c-primary bg-c-primary mb-5 hover:"
							>
								<Link href="/order" className="flex w-full h-full justify-center items-center" onClick={onClose}>
									<p>Оформить заказ</p>
									<ArrowRight className="ml-5 " />
								</Link>
							</Button>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
