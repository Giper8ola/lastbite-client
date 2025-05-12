'use client';
import { useState } from 'react';

import { House, MapPin, Package, ShoppingCart } from 'lucide-react';

import Link from 'next/link';

import { AuthButton } from '@/components/AuthButton';
import Container from '@/features/Container';
import CustomImage from '@/features/CustomImage';
import HeaderButton from '@/features/HeaderButton';
import { useCartStore } from '@/stores/CartStore';
import { useLocationStore } from '@/stores/LocationStore';
import { ModalTypesEnum } from '@/types/enum';
import { COLORS } from '@/utils/consts';

export default function Header() {
	const [isAuth, setAuth] = useState(false);
	const cost = useCartStore((state) => state.cost);
	const city = useLocationStore((state) => state.city);
	return (
		<Container width={1700}>
			<div className="min-w-[915px] py-6 px-10">
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
							<ShoppingCart size={28} strokeWidth={2.5} />
							{cost} ₽
						</HeaderButton>
						<HeaderButton color={COLORS.secondary} className={isAuth ? 'mr-48' : ''} modalName={ModalTypesEnum.Location}>
							<MapPin size={28} strokeWidth={2.5} />
							{city}
						</HeaderButton>
						<AuthButton className="absolute z-50 right-0" isAuth={isAuth} setAuth={setAuth} />
					</div>
				</div>
			</div>
		</Container>
	);
}
