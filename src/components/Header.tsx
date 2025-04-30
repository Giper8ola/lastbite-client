'use client';
import { useState } from 'react';

import { Listbox, ListboxItem } from '@heroui/listbox';
import { Accordion, AccordionItem, useDisclosure } from '@heroui/react';
import { Package, House, ShoppingCart, MapPin, CircleUser } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import HeaderButton from '@/features/HeaderButton';
import { COLORS } from '@/utils/consts';

import ModalManager from './ModalManager';

export function Auth({
	className,
	basePath,
	isAuth,
	setAuth
}: {
	className?: string;
	basePath?: string;
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
}) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	if (isAuth) {
		return (
			<div className={' ' + className}>
				<Accordion isCompact>
					<AccordionItem
						key="1"
						indicator
						title={
							<div className={`flex items-center gap-1  hover:transition-colors hover:text-c-primary`}>
								<CircleUser size={28} strokeWidth={2.5} />
								<div className={`text-start`}>
									<p>Пользователь</p>
									<p className="text-[10px] text-[#BEBEBE] leading-none">email@mail.ru</p>
								</div>
							</div>
						}
						className={`bg-white rounded-[15px] px-2 pr-0 text-black font-bold text-[16px] shadow-md hover:transition-shadow hover:duration-700 hover:shadow-[0_4px_3px_0px_rgba(0,0,0,0.3)]`}
					>
						<div className="px-1">
							<Listbox className={`w-full pl-0 pr-2 text-center`}>
								<ListboxItem key="profile" onPress={onOpen}>
									Профиль
								</ListboxItem>
								<ListboxItem key="history" href={basePath + '/history'}>
									История заказов
								</ListboxItem>
								<ListboxItem key="payments" href={basePath + '/payments'}>
									Способы оплаты
								</ListboxItem>
								<ListboxItem key="exit" className="text-danger" color="danger" onPress={() => (setAuth ? setAuth(false) : {})}>
									Выход
								</ListboxItem>
							</Listbox>
							<ModalManager modalName="profile" isOpen={isOpen} onOpenChange={onOpenChange}></ModalManager>
						</div>
					</AccordionItem>
				</Accordion>
			</div>
		);
	}
	return (
		<HeaderButton color={COLORS.secondary} modalName="auth" isAuth={isAuth} setAuth={setAuth}>
			<CircleUser size={28} strokeWidth={2.5} />
			Войти
		</HeaderButton>
	);
}

export default function Header({ basePath, className }: { basePath: string; className?: string }) {
	const [isAuth, setAuth] = useState(false);
	return (
		<div className={'flex items-center justify-between' + className}>
			<div className="flex items-center gap-6">
				<Image className="" alt="LastBite logo" src={basePath + '/lastbite.svg'} width={120} height={120} priority></Image>
				<Link href="/">
					<HeaderButton color={COLORS.primary}>
						<House size={28} strokeWidth={2.5} />
						ГЛАВНАЯ
					</HeaderButton>
				</Link>
				<Link href="/boxes">
					<HeaderButton color={COLORS.primary}>
						<Package size={28} strokeWidth={2.5} />
						БОКСЫ
					</HeaderButton>
				</Link>
			</div>

			<div className="flex items-start gap-5 relative justify-end">
				<HeaderButton color={COLORS.primary} modalName="cart" basePath={basePath}>
					<ShoppingCart size={28} strokeWidth={2.5} />
					0₽
				</HeaderButton>
				<HeaderButton color={COLORS.secondary} className={isAuth ? 'mr-48' : ''} modalName="location">
					<MapPin size={28} strokeWidth={2.5} />
					Воронеж
				</HeaderButton>
				<Auth className="absolute z-0" isAuth={isAuth} setAuth={setAuth}></Auth>
			</div>
		</div>
	);
}
