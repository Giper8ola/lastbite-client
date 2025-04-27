'use client';
import { Button, useDisclosure } from '@heroui/react';

import ModalManager from '@/components/ModalManager';

export default function HeaderButton({
	children,
	color = '#89E49D',
	modalName,
	className
}: {
	children?: React.ReactNode;
	color?: string;
	modalName?: string;
	className?: string;
}) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<div>
			<Button
				className={`bg-white rounded-[15px] font-bold text-[16px] text-black shadow-md h-10 ` + className}
				style={{
					backgroundColor: color
				}}
				onPress={onOpen}
			>
				{children}
			</Button>
			{modalName && <ModalManager modalName={modalName} isOpen={isOpen} onOpenChange={onOpenChange}></ModalManager>}
		</div>
	);
}
