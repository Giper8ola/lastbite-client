import { Modal, ModalContent, ModalHeader, ModalBody, Button, InputOtp, Form } from '@heroui/react';

import { useAuthStore } from '@/stores/AuthStore';
import { CommonModalProps } from '@/types';

export default function AuthCodeModal({ modalDisclosure }: CommonModalProps) {
	const phone_number = useAuthStore((state) => state.user.phone_number);
	const changeAuth = useAuthStore((state) => state.changeAuth);
	return (
		<Modal
			isOpen={modalDisclosure.isOpen}
			placement="top-center"
			size="xs"
			backdrop="blur"
			onOpenChange={modalDisclosure.onOpenChange}
			classNames={{ closeButton: 'mt-3 mr-3' }}
		>
			<ModalContent>
				{(onClose) => (
					<Form
						onSubmit={() => {
							if (changeAuth) {
								changeAuth(true);
							}
							onClose();
						}}
						method="dialog"
					>
						<ModalHeader className="flex flex-col gap-1">Потверждение телефона</ModalHeader>
						<ModalBody className="pb-5 font-f-primary">
							<div className="w-full flex flex-wrap gap-4 justify-center text-default-500 text-center">
								<p>
									На номер <b>{phone_number}</b> был отправлен SMS код. Для подтверждения введите полученный код в поле ниже.
								</p>
								<InputOtp
									isRequired
									length={4}
									variant="underlined"
									className="flex items-center"
									color="success"
									textAlign="center"
									fullWidth
									errorMessage="Минимальное количество символов: 4"
								/>
							</div>
							<Button variant="faded" type="submit" className="bg-c-primary border-c-primary">
								ПОДТВЕРДИТЬ ТЕЛЕФОН
							</Button>
						</ModalBody>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
