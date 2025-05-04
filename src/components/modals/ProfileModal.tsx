'use client';
import { useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, DatePicker, Form } from '@heroui/react';
import { parseDate } from '@internationalized/date';
import { CircleUser, Phone } from 'lucide-react';

import { MailIcon } from '@/features/icons/MailIcon';
import { CommonModalProps } from '@/types';

export default function ProfileModal({ modalDisclosure }: CommonModalProps) {
	const [isDisabled, setDisabled] = useState(true);

	return (
		<Modal
			isOpen={modalDisclosure.isOpen}
			placement="top-center"
			onOpenChange={modalDisclosure.onOpenChange}
			classNames={{ closeButton: 'mt-5 mr-5' }}
		>
			<ModalContent>
				{() => (
					<Form method="dialog" onSubmit={() => setDisabled(!isDisabled)}>
						<ModalHeader className="flex flex-col gap-1 pb-2">
							<div className="flex gap-3 items-center text-[24px]">
								<CircleUser size={42} strokeWidth={2.5} />
								Пользователь
							</div>
						</ModalHeader>
						<ModalBody className="w-[100%] items-start pb-5">
							<Input
								color="success"
								label="Имя"
								labelPlacement="outside"
								placeholder="Введите имя"
								defaultValue="Матвей"
								isDisabled={isDisabled}
								variant="bordered"
								isRequired
							/>
							<Input
								color="success"
								label="Фамилия"
								labelPlacement="outside"
								placeholder="Введите фамилию"
								defaultValue="Многопуков"
								isDisabled={isDisabled}
								variant="bordered"
								isRequired
							/>
							<Input
								color="success"
								endContent={<Phone size={24} className="text-default-400 pointer-events-none flex-shrink-0" />}
								label="Номер телефона"
								variant="bordered"
								labelPlacement="outside"
								placeholder="Введите номер телефона"
								defaultValue="+79009851322"
								isDisabled={isDisabled}
								isRequired
							/>
							<Input
								color="success"
								className=""
								endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
								label="Email"
								type="email"
								labelPlacement="outside"
								variant="bordered"
								placeholder="Введите адрес электронной почты"
								defaultValue="email@mail.ru"
								isDisabled={isDisabled}
								isRequired
							/>
							<DatePicker
								isDisabled={isDisabled}
								variant="underlined"
								defaultValue={parseDate('2024-04-04')}
								color="success"
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
