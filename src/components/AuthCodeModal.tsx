'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, InputOtp, Form } from '@heroui/react';

import { COLORS } from '@/utils/consts';

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
		<Modal isOpen={isOpen} placement="top-center" size="xs" onOpenChange={onOpenChange}>
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
							<Button variant="faded" type="submit" className={`bg-[${COLORS.primary}] border-[#89E49D]`}>
								ПОДТВЕРДИТЬ ТЕЛЕФОН
							</Button>
						</ModalBody>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
