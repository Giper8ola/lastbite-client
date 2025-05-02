import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, DatePicker, Form } from '@heroui/react';
import { Phone } from 'lucide-react';

import { MailIcon } from '@/features/icons/MailIcon';
import { AuthModalProps } from '@/types';

export default function RegModal({ isOpen, onOpenChange, setAuth }: AuthModalProps) {
	return (
		<Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<Form
						onSubmit={() => {
							if (setAuth) {
								setAuth(true);
							}
							onClose();
						}}
					>
						<ModalHeader className="flex flex-col gap-1">Регистрация</ModalHeader>
						<ModalBody className="w-[100%] items-end pb-5">
							<Input isRequired color="success" label="Имя" placeholder="Введите имя" variant="bordered" />
							<Input isRequired color="success" label="Фамилия" placeholder="Введите фамилию" variant="bordered" />
							<Input
								isRequired
								color="success"
								endContent={<Phone size={24} className="text-default-400 pointer-events-none flex-shrink-0" />}
								label="Номер телефона"
								placeholder="Введите номер телефона"
								variant="bordered"
							/>
							<Input
								isRequired
								color="success"
								endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
								label="Email"
								placeholder="Введите адрес электронной почты"
								variant="bordered"
							/>
							<DatePicker variant="underlined" color="success" className="" label="Дата рождения" />
							<Button type="submit" variant="faded" className="bg-c-primary w-[50%] border-c-primary">
								Зарегистрироваться
							</Button>
						</ModalBody>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
