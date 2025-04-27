import { Package, House, ShoppingCart, MapPin, CircleUser } from 'lucide-react';

import getConfig from 'next/config';
import Image from 'next/image';

import HeaderButton from '@/features/HeaderButton';
import { COLORS } from '@/utils/consts';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath ?? '';

export default function Header() {
	return (
		<div className="flex inline-block items-center justify-between">
			<div className="flex inline-block items-center gap-6">
				<Image className="" alt="LastBite logo" src={basePath + '/lastbite.svg'} width={120} height={120} priority></Image>
				<HeaderButton color={COLORS.primary}>
					<House size={28} strokeWidth={2.5} />
					ГЛАВНАЯ
				</HeaderButton>
				<HeaderButton color={COLORS.primary}>
					<Package size={28} strokeWidth={2.5} />
					БОКСЫ
				</HeaderButton>
			</div>

			<div className="flex inline-block items-center gap-6">
				<HeaderButton color={COLORS.primary}>
					<ShoppingCart size={28} strokeWidth={2.5} />
					0₽
				</HeaderButton>
				<HeaderButton color={COLORS.secondary}>
					<MapPin size={28} strokeWidth={2.5} />
					Воронеж
				</HeaderButton>
				<HeaderButton color={COLORS.secondary}>
					<CircleUser size={28} strokeWidth={2.5} />
					Войти
				</HeaderButton>
			</div>
		</div>
	);
}
