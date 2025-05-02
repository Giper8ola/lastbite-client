'use client';

import React from 'react';

import { Divider } from '@heroui/divider';
import { Modal, ModalContent, ModalBody } from '@heroui/react';
import { ChefHat } from 'lucide-react';

import CustomImage from '@/features/CustomImage';
import { Score } from '@/features/Score';
import { ToCartButton } from '@/features/ToCartButton';
import { BoxItemModalProps } from '@/types';

export const BoxItemModal: React.FC<BoxItemModalProps> = ({
	isOpen,
	onOpenChange,
	imageUrl,
	name,
	categories,
	restaurant,
	address,
	score,
	price
}) => {
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="p-10 flex gap-10">
							<div className="flex flex-row gap-[20px]">
								<CustomImage
									className="rounded-[15px]"
									alt="LastBite logo"
									src={imageUrl}
									width={200}
									height={200}
									priority
								></CustomImage>
								<div>
									<h1 className="font-bold text-xl">{name}</h1>
									<Divider className="my-4" />
									<div className="w-[280px] flex flex-wrap gap-2">
										{categories.map((el, ind) => (
											<p
												key={ind}
												className="bg-[#D4D4D4] rounded-[15px] px-[6px] py-[4px] text-xs pl-1.5 text-gray-500 font-thin"
											>
												{el}
											</p>
										))}
									</div>
								</div>
							</div>
							<div className="flex items-center justify-between gap-[0px]">
								<div>
									<div className="flex gap-[3px]">
										<ChefHat size={18} />
										<p className="text-sm">{'Ресторан ' + restaurant}</p>
									</div>
									<div className="px-1 flex justify-between">
										<p className="text-xs font-thin text-gray-500">{address}</p>
									</div>
								</div>
								<Score number={score} />
							</div>
							<div className="flex justify-end">
								<ToCartButton price={price} />
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};
