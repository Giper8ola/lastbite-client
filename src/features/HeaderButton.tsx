'use client';
import { Button, useDisclosure } from '@heroui/react';

import ModalManager from '@/components/modals/ModalManager';
import { HeaderButtonProps } from '@/types';
import { COLORS } from '@/utils/consts';

export default function HeaderButton({
	children,
	color = COLORS.primary,
	modalName,
	className,
	onPress,
	type
}: HeaderButtonProps) {
	const LoginModal = useDisclosure();
	return (
		<div>
			<Button
				className={
					`bg-white rounded-[15px] hover:transition-colors text-black hover:text-[${color == COLORS.primary ? COLORS.secondary : COLORS.primary}] font-bold text-[16px]  shadow-md h-[45px] hover:transition-shadow hover:duration-700 hover:shadow-[0_4px_3px_0px_rgba(0,0,0,0.3)] ` +
					className
				}
				style={{
					backgroundColor: color
				}}
				onPress={onPress ? onPress : LoginModal.onOpen}
				type={type}
			>
				{children}
			</Button>
			{modalName && <ModalManager modalName={modalName} modalDisclosure={LoginModal}></ModalManager>}
		</div>
	);
}
