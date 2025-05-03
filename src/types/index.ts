import { JSX, ReactNode } from 'react';

import { PressEvent } from '@heroui/react';

import { ModalTypesEnum, OrderStatusEnum } from '@/types/enum';

export interface IBox {
	imageUrl: string;
	name: string;
	categories: string[];
	restaurant: string;
	address: string;
	score: number;
	price: number;
	Count?: number;
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
	isOpen: boolean;
	onOpenChange: () => void;
}

export interface AuthModalProps extends CommonModalProps {
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
}

export interface ModalManagerProps extends AuthModalProps {
	modalName: ModalTypesEnum;
}

export interface BoxItemModalProps extends IBox, CommonModalProps {}

export interface HeaderButtonProps {
	children: ReactNode;
	modalName?: ModalTypesEnum;
	color?: string;
	className?: string;
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
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
