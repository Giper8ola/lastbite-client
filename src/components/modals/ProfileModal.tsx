'use client';
import { useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, DatePicker, Form } from '@heroui/react';
import { parseDate } from '@internationalized/date';
import { CircleUser, Phone } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

import { MailIcon } from '@/features/icons/MailIcon';
import { useAuthStore } from '@/stores/AuthStore';
import { CommonModalProps } from '@/types';

export default function ProfileModal({ modalDisclosure }: CommonModalProps) {
	const [isDisabled, setDisabled] = useState(true);
	const { user, setUser } = useAuthStore(useShallow((state) => ({ user: state.user, setUser: state.setUser })));

	const handleSubmit = (e: React.FormEvent) => {
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

		setDisabled(!isDisabled);
	};

	return (
		<Modal
			isOpen={modalDisclosure.isOpen}
			placement="top-center"
			onOpenChange={modalDisclosure.onOpenChange}
			classNames={{ closeButton: 'mt-5 mr-5' }}
		>
			<ModalContent>
				{() => (
					<Form method="dialog" onSubmit={handleSubmit}>
						<ModalHeader className="flex flex-col gap-1 pb-2 font-f-primary">
							<div className="flex gap-3 items-center text-[24px]">
								<CircleUser size={42} strokeWidth={2.5} />
								{user.first_name}
							</div>
						</ModalHeader>
						<ModalBody className="w-[100%] items-start pb-5 font-f-primary">
							<Input
								name="first_name"
								color="success"
								label="Имя"
								labelPlacement="outside"
								placeholder="Введите имя"
								defaultValue={user.first_name}
								isDisabled={isDisabled}
								variant="bordered"
								isRequired
							/>
							<Input
								name="last_name"
								color="success"
								label="Фамилия"
								labelPlacement="outside"
								placeholder="Введите фамилию"
								defaultValue={user.last_name}
								isDisabled={isDisabled}
								variant="bordered"
								isRequired
							/>
							<Input
								name="phone_number"
								color="success"
								endContent={<Phone size={24} className="text-default-400 pointer-events-none flex-shrink-0" />}
								label="Номер телефона"
								variant="bordered"
								labelPlacement="outside"
								placeholder="Введите номер телефона"
								defaultValue={user.phone_number}
								isDisabled={isDisabled}
								isRequired
							/>
							<Input
								name="email"
								color="success"
								className=""
								endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
								label="Email"
								type="email"
								labelPlacement="outside"
								variant="bordered"
								placeholder="Введите адрес электронной почты"
								defaultValue={user.email}
								isDisabled={isDisabled}
								isRequired
							/>
							<DatePicker
								name="birth_date"
								isDisabled={isDisabled}
								variant="underlined"
								value={parseDate(`2024-04-04`)}
								className="w-[98%]"
								label="Дата рождения"
								isRequired
							/>
							<Button type="submit" variant="faded" className="bg-c-primary w-[100%] border-c-primary">
								{isDisabled ? 'Изменить' : 'Подтвердить изменения'}
							</Button>
						</ModalBody>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
