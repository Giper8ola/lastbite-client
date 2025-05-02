'use client';
import {
	Button,
	Checkbox,
	Form,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure
} from '@heroui/react';
import { Phone } from 'lucide-react';

import { AuthModalProps } from '@/types';
import { ModalTypesEnum } from '@/types/enum';

import ModalManager from './ModalManager';

export default function AuthModal({ isOpen, onOpenChange, isAuth, setAuth }: AuthModalProps) {
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
								modalName={ModalTypesEnum.Reg}
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
								modalName={ModalTypesEnum.Code}
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
