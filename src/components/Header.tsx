'use client';
import { useEffect } from 'react';

import { Badge } from '@heroui/react';
import { House, MapPin, Package, ShoppingCart } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

import Link from 'next/link';

import { AuthButton } from '@/components/AuthButton';
import Container from '@/features/Container';
import CustomImage from '@/features/CustomImage';
import HeaderButton from '@/features/HeaderButton';
import { useAuthStore } from '@/stores/AuthStore';
import { useCartStore } from '@/stores/CartStore';
import { useLocationStore } from '@/stores/LocationStore';
import { ModalTypesEnum } from '@/types/enum';
import { COLORS } from '@/utils/consts';

export default function Header() {
	const isAuth = useAuthStore((state) => state.isAuth);

	const { cost, count } = useCartStore(useShallow((state) => ({ cost: state.cost, count: state.boxes.length })));
	const city = useLocationStore((state) => state.city);

	useEffect(() => {
		const checkData = () => {
			const data = localStorage.getItem('auth-storage');
			if (!data) useAuthStore.getState().changeAuth(false);
		};
		checkData();
		if (typeof window !== 'undefined') {
			window.addEventListener('storage', checkData);
			return () => window.removeEventListener('storage', checkData);
		}
	}, []);

	return (
		<Container width={1700}>
			<div className="min-w-[915px] py-6 px-10">
				<div className={'flex items-center font-f-primary justify-between'}>
					<div className="flex items-center gap-6">
						<CustomImage alt="LastBite logo" src="/lastbite.svg" width={120} height={120} priority />
						<HeaderButton color={COLORS.primary}>
							<Link href={'/'} className="h-full w-full flex items-center gap-2">
								<House size={28} strokeWidth={2.5} />
								<b>ГЛАВНАЯ</b>
							</Link>
						</HeaderButton>
						<HeaderButton color={COLORS.primary}>
							<Link href={'/boxes'} className="h-full w-full flex items-center gap-2">
								<Package size={28} strokeWidth={2.5} />
								<b>БОКСЫ</b>
							</Link>
						</HeaderButton>
					</div>

					<div className="flex items-start gap-5 relative">
						<Badge content={count} isInvisible={count < 1 ? true : false} size="lg" className="bg-c-secondary text-black">
							<HeaderButton color={COLORS.primary} modalName={ModalTypesEnum.Cart}>
								<ShoppingCart size={28} strokeWidth={2.5} />
								{cost} ₽
							</HeaderButton>
						</Badge>
						<HeaderButton color={COLORS.secondary} className={isAuth ? 'mr-48' : ''} modalName={ModalTypesEnum.Location}>
							<MapPin size={28} strokeWidth={2.5} />
							{city}
						</HeaderButton>
						<AuthButton className="absolute z-50 right-0" />
					</div>
				</div>
			</div>
		</Container>
	);
}
