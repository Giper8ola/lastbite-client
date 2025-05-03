'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, InputOtp, Form } from '@heroui/react';

const number = '+79009851322';

export default function AuthCodeModal({
	isOpen,
	onOpenChange,
	isAuth,
	setAuth
}: {
	isOpen: boolean;
	onOpenChange: () => void;
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
}) {
	return (
		<Modal isOpen={isOpen} placement="top-center" size="xs" onOpenChange={onOpenChange} classNames={{ closeButton: 'mt-3 mr-3' }}>
			<ModalContent>
				{(onClose) => (
					<Form
						onSubmit={() => {
							if (setAuth) {
								setAuth(true);
							}
							onClose();
						}}
						method="dialog"
					>
						<ModalHeader className="flex flex-col gap-1">Потверждение телефона</ModalHeader>
						<ModalBody className="pb-5">
							<div className="w-full flex flex-wrap gap-4 justify-center text-default-500 text-center">
								<p>
									На номер <b>{number}</b> был отправлен SMS код. Для подтверждения введите полученный код в поле ниже.
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
