import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Form } from '@heroui/react';

import { CommonModalProps } from '@/types';

export default function LocationModal({ isOpen, onOpenChange }: CommonModalProps) {
	return (
		<Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<Form onSubmit={onClose} autoComplete="on" method="dialog">
						<ModalHeader className="flex flex-col gap-1">Доставка</ModalHeader>
						<ModalBody className="w-[100%]">
							<Input
								isRequired
								color="success"
								label="Адресс доставки"
								placeholder="Введите адресс доставки"
								variant="bordered"
							/>
						</ModalBody>
						<ModalFooter className="w-[100%]">
							<Button type="submit" variant="faded" className="bg-c-primary border-c-primary">
								Готово
							</Button>
						</ModalFooter>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
