'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, DatePicker, Form } from '@heroui/react';
import { Phone } from 'lucide-react';

export const MailIcon = (props: { className: string }) => {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 24 24"
			width="1em"
			{...props}
		>
			<path
				d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default function RegModal({
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
								placeholder="Enter your email"
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
