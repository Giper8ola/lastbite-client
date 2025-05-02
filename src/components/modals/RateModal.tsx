import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react';

import { AuthModalProps } from '@/types';
import { BOXES_LIST } from '@/utils/consts';

import { BoxItem } from '../BoxItem';

export default function RateModal({ isOpen, onOpenChange }: AuthModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			placement="top-center"
			classNames={{ closeButton: 'mt-4 mr-3' }}
			onOpenChange={onOpenChange}
			size="md"
			className="rounded-[28px]"
		>
			<ModalContent>
				{(onClose) => (
					<div>
						<ModalHeader className="flex flex-col text-[22px] font-bold">Оценка</ModalHeader>
						<ModalBody className="w-[100%] px-10 py-5">
							{BOXES_LIST.map((el, ind) => (
								<BoxItem
									key={ind}
									imageUrl={el.imageUrl}
									name={el.name}
									categories={el.categories}
									restaurant={el.restaurant}
									address={el.address}
									score={el.score}
									price={el.price}
									toCart={false}
									className="mb-1 w-full py-1"
								/>
							))}
						</ModalBody>
					</div>
				)}
			</ModalContent>
		</Modal>
	);
}
