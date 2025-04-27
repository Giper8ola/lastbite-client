'use client';
import { Button, useDisclosure } from '@heroui/react';

import CustomModal from '@/components/CustomModal';

export default function HeaderButton({ children, color = '#89E49D' }: { children: React.ReactNode; color: string }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<div>
			<Button className={`bg-[${color}] ` + 'rounded-[15px] font-bold text-[16px] text-black shadow-md h-10'} onPress={onOpen}>
				{children}
			</Button>
			<CustomModal isOpen={isOpen} onOpenChange={onOpenChange}></CustomModal>
		</div>
	);
}
