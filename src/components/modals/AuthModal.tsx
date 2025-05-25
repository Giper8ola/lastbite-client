import React from 'react';

import '../../assets/styles/globals.css';

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Card,
	CardBody,
	Tabs,
	Tab,
	Input,
	Button,
	Link,
	DatePicker,
	Form,
	useDisclosure
} from '@heroui/react';
import { parseDate } from '@internationalized/date';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleUserRound, Mail, Phone } from 'lucide-react';

import { useAuthStore } from '@/stores/AuthStore';
import { CommonModalProps } from '@/types';
import { ModalTypesEnum } from '@/types/enum';

import ModalManager from './ModalManager';

export const AuthModal: React.FC<CommonModalProps> = ({ modalDisclosure }) => {
	const [selected, setSelected] = React.useState('login');
	const setUser = useAuthStore((state) => state.setUser);

	const AuthCodeModal = useDisclosure();

	const openCodeModal = () => {
		modalDisclosure.onClose();
		AuthCodeModal.onOpen();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const updatedUser = {
			first_name: formData.get('first_name') as string,
			last_name: formData.get('last_name') as string,
			phone_number: formData.get('phone_number') as string,
			email: formData.get('email') as string,
			birth_date: parseDate(`2024-04-04`)
		};
		setUser(updatedUser);
		openCodeModal();
	};

	return (
		<>
			<Modal
				isOpen={modalDisclosure.isOpen}
				onOpenChange={modalDisclosure.onOpenChange}
				size="md"
				placement="center"
				backdrop="blur"
				classNames={{ closeButton: 'mr-4 mt-4' }}
			>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className="flex items-center gap-2">
								<CircleUserRound size={38} />
								<span>Учетная запись</span>
							</ModalHeader>
							<ModalBody className="pb-6 font-f-primary">
								<Card className="max-w-full border-none shadow-none">
									<CardBody className="overflow-hidden px-0">
										<Tabs
											fullWidth
											aria-label="Login options"
											selectedKey={selected}
											size="md"
											onSelectionChange={(key) => setSelected(String(key))}
											disableAnimation={false}
											classNames={{
												tabList: 'gap-6',
												cursor: 'bg-c-primary',
												tab: 'max-w-full px-0 h-12'
											}}
										>
											<Tab key="login" title="Логин">
												<div className="relative">
													<AnimatePresence mode="wait">
														<motion.div
															key="login-form"
															initial={{ opacity: 0 }}
															animate={{ opacity: 1 }}
															exit={{ opacity: 0 }}
															transition={{ duration: 0.3, ease: 'easeInOut' }}
															className="w-full"
														>
															<Form
																className="flex flex-col gap-4"
																onSubmit={(e) => {
																	e.preventDefault(); // temp
																	openCodeModal();
																}}
																method="dialog"
															>
																<motion.div
																	initial={{ opacity: 0, y: -10 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ duration: 0.3, delay: 0.1 }}
																	className="w-full"
																>
																	<Input
																		labelPlacement="outside"
																		isRequired
																		label="Номер телефона"
																		placeholder="Введите номер телефона"
																		type="tel"
																		startContent={<Phone />}
																	/>
																</motion.div>
																<p className="text-center text-small">
																	Необходимо создать учетную запись?{' '}
																	<Link size="sm" className="cursor-pointer" onPress={() => setSelected('sign-up')}>
																		Регистрация
																	</Link>
																</p>
																<div className="flex gap-2 justify-end w-full">
																	<Button type="submit" fullWidth className="bg-c-primary shadow-md">
																		Логин
																	</Button>
																</div>
															</Form>
														</motion.div>
													</AnimatePresence>
												</div>
											</Tab>
											<Tab key="sign-up" title="Регистрация">
												<div className="relative">
													<AnimatePresence mode="wait">
														<motion.div
															key="signup-form"
															initial={{ opacity: 0 }}
															animate={{ opacity: 1 }}
															exit={{ opacity: 0 }}
															transition={{ duration: 0.3, ease: 'easeInOut' }}
															className="w-full"
														>
															<Form className="flex gap-4" onSubmit={(e) => handleSubmit(e)} method="dialog">
																<motion.div
																	initial={{ opacity: 0, y: -10 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ duration: 0.3, delay: 0.1 }}
																	className="w-full"
																>
																	<Input
																		labelPlacement="outside"
																		name="first_name"
																		isRequired
																		label="Имя"
																		placeholder="Введите имя"
																		type="text"
																	/>
																</motion.div>
																<motion.div
																	initial={{ opacity: 0, y: -10 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ duration: 0.3, delay: 0.1 }}
																	className="w-full"
																>
																	<Input
																		labelPlacement="outside"
																		isRequired
																		name="last_name"
																		label="Фамилия"
																		placeholder="Введите фамилию"
																		type="text"
																	/>
																</motion.div>
																<motion.div
																	initial={{ opacity: 0, y: -10 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ duration: 0.3, delay: 0.1 }}
																	className="w-full"
																>
																	<Input
																		labelPlacement="outside"
																		isRequired
																		name="phone_number"
																		label="Номер телефона"
																		placeholder="Введите номер телефона"
																		startContent={<Phone />}
																		type="text"
																	/>
																</motion.div>
																<motion.div
																	initial={{ opacity: 0, y: -10 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ duration: 0.3, delay: 0.2 }}
																	className="w-full"
																>
																	<Input
																		labelPlacement="outside"
																		isRequired
																		name="email"
																		label="Электронная почта"
																		placeholder="Введите электронную почту"
																		type="email"
																		startContent={<Mail />}
																	/>
																</motion.div>
																<motion.div
																	initial={{ opacity: 0, y: -10 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ duration: 0.3, delay: 0.2 }}
																	className="w-full"
																>
																	<DatePicker
																		name="birth_date"
																		labelPlacement="outside"
																		isRequired
																		label="Дата рождения"
																		className=""
																	/>
																</motion.div>
																<p className="text-center text-small">
																	У вас уже есть учетная запись?{' '}
																	<Link size="sm" className="cursor-pointer" onPress={() => setSelected('login')}>
																		Логин
																	</Link>
																</p>
																<div className="flex gap-2 justify-end w-full">
																	<Button type="submit" fullWidth className="bg-c-primary">
																		Регистрация
																	</Button>
																</div>
															</Form>
														</motion.div>
													</AnimatePresence>
												</div>
											</Tab>
										</Tabs>
									</CardBody>
								</Card>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
			<ModalManager modalName={ModalTypesEnum.Code} modalDisclosure={AuthCodeModal}></ModalManager>
		</>
	);
};
