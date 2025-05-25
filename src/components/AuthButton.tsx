import { Listbox, ListboxItem } from '@heroui/listbox';
import { Accordion, AccordionItem, useDisclosure } from '@heroui/react';
import { CircleUser } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

import Link from 'next/link';

import ModalManager from '@/components/modals/ModalManager';
import HeaderButton from '@/features/HeaderButton';
import { useAuthStore } from '@/stores/AuthStore';
import { ModalTypesEnum } from '@/types/enum';
import { COLORS } from '@/utils/consts';

export function AuthButton({ className }: { className?: string }) {
	const ProfileModal = useDisclosure();
	const { isAuth, user, changeAuth } = useAuthStore(
		useShallow((state) => ({ isAuth: state.isAuth, user: state.user, changeAuth: state.changeAuth }))
	);
	if (isAuth) {
		return (
			<div className={'min-w-44 ' + className}>
				<Accordion isCompact>
					<AccordionItem
						key="1"
						indicator
						title={
							<div className={`flex justify-center items-center gap-1 hover:transition-colors hover:text-c-primary`}>
								<CircleUser size={28} strokeWidth={2.5} />
								<div className={`text-start`}>
									<p className="font-f-primary">{user.first_name}</p>
									<p className="text-[10px] font-normal text-[#BEBEBE] leading-none">{user.email}</p>
								</div>
							</div>
						}
						className={`bg-c-secondary rounded-[15px] px-2 pr-0 text-black font-bold text-[16px] shadow-md hover:transition-shadow hover:duration-700 hover:shadow-[0_4px_3px_0px_rgba(0,0,0,0.3)]`}
						classNames={{ trigger: 'py-1 pb-2' }}
					>
						<div className="px-1 font-f-primary">
							<Listbox className={`w-full pl-0 pr-2 text-center`}>
								<ListboxItem key="profile" onPress={ProfileModal.onOpen}>
									Профиль
								</ListboxItem>
								<ListboxItem key="history">
									<Link href="/history">История заказов</Link>
								</ListboxItem>
								<ListboxItem
									key="exit"
									className="text-danger"
									color="danger"
									onPress={() => (changeAuth ? changeAuth(false) : {})}
								>
									Выход
								</ListboxItem>
							</Listbox>
							<ModalManager modalName={ModalTypesEnum.Profile} modalDisclosure={ProfileModal}></ModalManager>
						</div>
					</AccordionItem>
				</Accordion>
			</div>
		);
	}
	return (
		<HeaderButton color={COLORS.secondary} modalName={ModalTypesEnum.Auth}>
			<CircleUser size={28} strokeWidth={2.5} />
			Войти
		</HeaderButton>
	);
}
