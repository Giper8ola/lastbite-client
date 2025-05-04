'use client';
import { useState } from 'react';

import { House, MapPin, Package, ShoppingCart } from 'lucide-react';

import Link from 'next/link';

import { AuthButton } from '@/components/AuthButton';
import Container from '@/features/Container';
import CustomImage from '@/features/CustomImage';
import HeaderButton from '@/features/HeaderButton';
import { ModalTypesEnum } from '@/types/enum';
import { COLORS } from '@/utils/consts';

export default function Header() {
	const [isAuth, setAuth] = useState(false);

	return (
		<Container>
			<div className={'flex items-center font-f-primary justify-between'}>
				<div className="flex items-center gap-6">
					<CustomImage alt="LastBite logo" src="/lastbite.svg" width={120} height={120} priority />
					<Link href={'/'}>
						<HeaderButton color={COLORS.primary}>
							<House size={28} strokeWidth={2.5} />
							<b>ГЛАВНАЯ</b>
						</HeaderButton>
					</Link>
					<Link href={'/boxes'}>
						<HeaderButton color={COLORS.primary}>
							<Package size={28} strokeWidth={2.5} />
							<b>БОКСЫ</b>
						</HeaderButton>
					</Link>
				</div>

				<div className="flex items-start gap-5 relative">
					<HeaderButton color={COLORS.primary} modalName={ModalTypesEnum.Cart}>
						<ShoppingCart size={28} strokeWidth={2.5} />0 ₽
					</HeaderButton>
					<HeaderButton color={COLORS.secondary} className={isAuth ? 'mr-48' : ''} modalName={ModalTypesEnum.Location}>
						<MapPin size={28} strokeWidth={2.5} />
						Воронеж
					</HeaderButton>
					<AuthButton className="absolute z-50 right-0" isAuth={isAuth} setAuth={setAuth} />
				</div>
			</div>
		</Container>
	);
}
