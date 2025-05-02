import { Modal, ModalContent, ModalBody, Button, ScrollShadow } from '@heroui/react';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';

import { CommonModalProps } from '@/types';
import { BOXES_LIST } from '@/utils/consts';

import { BoxItem } from '../BoxItem';

export default function CartModal({ isOpen, onOpenChange }: CommonModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			className="rounded-[28px] pt-5"
			size="lg"
			placement="top-center"
			classNames={{ closeButton: 'mt-4 mr-4' }}
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{() => (
					<>
						<ModalBody className="pl-0 pr-0 pt-0 flex items-center gap-1">
							<div className="w-full justify-start pb-2">
								<b className="text-[22px] pl-10">Корзина</b>
							</div>
							<ScrollShadow hideScrollBar className="h-96 px-5 pb-5 mb-10">
								{BOXES_LIST.map((el, ind) => (
									<BoxItem
										key={ind}
										imageUrl={el.imageUrl}
										name={el.name}
										categories={el.categories}
										restaurant={el.restaurant}
										address={el.address}
										score={el.score}
										price={el.price}
										toCart={true}
										className="my-3 w-full"
									/>
								))}
								{BOXES_LIST.map((el, ind) => (
									<BoxItem
										key={ind}
										imageUrl={el.imageUrl}
										name={el.name}
										categories={el.categories}
										restaurant={el.restaurant}
										address={el.address}
										score={el.score}
										price={el.price}
										toCart={true}
										className="my-3 w-full"
									/>
								))}
								{BOXES_LIST.map((el, ind) => (
									<BoxItem
										key={ind}
										imageUrl={el.imageUrl}
										name={el.name}
										categories={el.categories}
										restaurant={el.restaurant}
										address={el.address}
										score={el.score}
										price={el.price}
										toCart={true}
										className="my-3 w-full"
									/>
								))}
							</ScrollShadow>
							<Link href={process.env.NEXT_PUBLIC_BASE_PATH + '/order'} className="w-[90%]">
								<Button variant="faded" className="w-full h-12 text-[20px] font-bold border-c-primary bg-c-primary mb-5">
									<p>Оформить заказ</p> <ArrowRight className="ml-5 " />
								</Button>
							</Link>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
