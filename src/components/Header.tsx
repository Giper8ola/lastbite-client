'use client';
import { useState } from 'react';

import { Package, House, ShoppingCart, MapPin, CircleUser } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import HeaderButton from '@/features/HeaderButton';
import { COLORS } from '@/utils/consts';

export function Auth() {
	const [isAuth, setAuth] = useState(false);
	if (isAuth) {
		return (
			<HeaderButton color={COLORS.secondary}>
				<CircleUser size={28} strokeWidth={2.5} />
				<div className="text-start">
					<p className="">Пользователь</p>
					<p className="text-[10px] text-[#BEBEBE] leading-none">email@mail.ru</p>
				</div>
			</HeaderButton>
		);
	}
	return (
		<HeaderButton color={COLORS.secondary} modalName="auth" isAuth={isAuth} setAuth={setAuth}>
			<CircleUser size={28} strokeWidth={2.5} />
			Войти
		</HeaderButton>
	);
}

export default function Header({ basePath }: { basePath: string }) {
	return (
		<div className="flex inline-block items-center justify-between">
			<div className="flex inline-block items-center gap-6">
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

			<div className="flex inline-block items-center gap-6">
				<HeaderButton color={COLORS.primary} modalName="cart" basePath={basePath}>
					<ShoppingCart size={28} strokeWidth={2.5} />
					0₽
				</HeaderButton>
				<HeaderButton color={COLORS.secondary}>
					<MapPin size={28} strokeWidth={2.5} />
					Воронеж
				</HeaderButton>
				<Auth></Auth>
			</div>
		</div>
	);
}
