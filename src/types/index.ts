import { JSX, ReactNode } from 'react';

import { CalendarDate, PressEvent } from '@heroui/react';
import { UseDisclosureReturn } from '@heroui/use-disclosure';

import { ModalTypesEnum, OrderStatusEnum } from '@/types/enum';

export interface IBox {
	id: number;
	imageUrl: string;
	name: string;
	categories: string[];
	restaurant: string;
	address: string;
	score: number;
	price: number;
}

export interface IOrder {
	id: number;
	boxes: IBox[];
	status: OrderStatusEnum;
}

export interface BoxItemProps extends IBox {
	className?: string;
	toCart: boolean;
}

export interface CommonModalProps {
	modalDisclosure: UseDisclosureReturn;
}

export interface ModalManagerProps extends CommonModalProps {
	modalName: ModalTypesEnum;
}

export interface BoxItemModalProps extends IBox, CommonModalProps {}

export interface HeaderButtonProps {
	children: ReactNode;
	modalName?: ModalTypesEnum;
	color?: string;
	className?: string;
	onPress?: (e: PressEvent) => void;
	type?: 'button' | 'submit' | 'reset';
}

export interface OrderStatusProps {
	status: OrderStatusEnum;
	className?: string;
	children?: ReactNode;
}

export interface OrderListProps {
	orders: IOrder[];
	className?: string;
}

export interface ListProps {
	key: string;
	value: string;
}

export interface FilterTypesProps {
	key: string;
	title: JSX.Element;
	list: ListProps[];
}

export interface ShopItem {
	key: string;
	value: ShopItemProps;
}

export interface ShopItemProps {
	name: string;
	address: string;
	rating: number;
	description: string;
	boxes: number[];
	imageUrl: string;
}

export interface IShopProps {
	item: ShopItem;
	index: number;
	className?: string;
}

export interface User {
	first_name: string;
	last_name: string;
	phone_number: string;
	email: string;
	birth_date: CalendarDate;
}
