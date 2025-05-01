'use client';
import { Button, PressEvent, useDisclosure } from '@heroui/react';

import ModalManager from '@/components/ModalManager';
import { COLORS } from '@/utils/consts';

export default function HeaderButton({
	children,
	color = COLORS.primary,
	modalName,
	className,
	basePath,
	isAuth,
	setAuth,
	onPress
}: {
	children?: React.ReactNode;
	color?: string;
	modalName?: string;
	className?: string;
	basePath?: string;
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
	onPress?: (e: PressEvent) => void;
}) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
				onPress={onPress ? onPress : onOpen}
			>
				{children}
			</Button>
			<ModalManager
				modalName={modalName}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				basePath={basePath}
				isAuth={isAuth}
				setAuth={setAuth}
			></ModalManager>
		</div>
	);
}
