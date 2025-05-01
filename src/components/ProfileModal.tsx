'use client';
import { useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, DatePicker, Form } from '@heroui/react';
import { parseDate } from '@internationalized/date';
import { CircleUser, Phone } from 'lucide-react';

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

export default function ProfileModal({
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
	const [isDisabled, setDisabled] = useState(true);
	return (
		<Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
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
