'use client';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Checkbox,
	Input,
	useDisclosure,
	Form
} from '@heroui/react';
import { Phone } from 'lucide-react';

import ModalManager from './ModalManager';

export const LockIcon = (props: { className: string }) => {
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
				d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
				fill="currentColor"
			/>
			<path
				d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default function AuthModal({
	isOpen,
	onOpenChange,
	isAuth,
	setAuth
}: {
	isOpen: boolean;
	onOpenChange?: () => void;
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
}) {
	const regModal = useDisclosure();
	const authCodeModal = useDisclosure();
	return (
		<Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<Form onSubmit={authCodeModal.onOpen} autoComplete="on" method="dialog">
						<ModalHeader className="flex flex-col gap-1">Логин</ModalHeader>
						<ModalBody className="w-[100%]">
							<Input
								isRequired
								color="success"
								endContent={<Phone size={24} className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
								label="Номер телефона"
								placeholder="Введите номер телефона"
								variant="bordered"
							/>
							<div className="flex py-2 px-1 justify-between">
								<Checkbox
									color="success"
									classNames={{
										label: 'text-small'
									}}
								>
									Запомнить меня
								</Checkbox>
							</div>
						</ModalBody>
						<ModalFooter className="w-[100%]">
							<Button color="default" variant="flat" onPress={regModal.onOpen}>
								Регистрация
							</Button>
							<ModalManager
								modalName="reg"
								isOpen={regModal.isOpen}
								onOpenChange={() => {
									regModal.onOpenChange();
									onClose();
								}}
								isAuth={isAuth}
								setAuth={setAuth}
							></ModalManager>
							<Button type="submit" variant="faded" className="bg-c-primary border-c-primary">
								Войти
							</Button>
							<ModalManager
								modalName="code"
								isOpen={authCodeModal.isOpen}
								onOpenChange={() => {
									authCodeModal.onOpenChange();
									onClose();
								}}
								isAuth={isAuth}
								setAuth={setAuth}
							></ModalManager>
						</ModalFooter>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
