import { Listbox, ListboxItem } from '@heroui/listbox';
import { Accordion, AccordionItem, useDisclosure } from '@heroui/react';
import { CircleUser } from 'lucide-react';

import ModalManager from '@/components/modals/ModalManager';
import HeaderButton from '@/features/HeaderButton';
import { ModalTypesEnum } from '@/types/enum';
import { COLORS } from '@/utils/consts';

export function AuthButton({
	className,
	isAuth,
	setAuth
}: {
	className?: string;
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
							<div className={`flex items-center gap-1 hover:transition-colors hover:text-c-primary`}>
								<CircleUser size={28} strokeWidth={2.5} />
								<div className={`text-start`}>
									<p className="">Пользователь</p>
									<p className="text-[10px] text-[#BEBEBE] leading-none">email@mail.ru</p>
								</div>
							</div>
						}
						className={`bg-c-secondary rounded-[15px] px-2 pr-0 text-black font-bold text-[16px] shadow-md hover:transition-shadow hover:duration-700 hover:shadow-[0_4px_3px_0px_rgba(0,0,0,0.3)]`}
						classNames={{ trigger: 'py-1 pb-2' }}
					>
						<div className="px-1">
							<Listbox className={`w-full pl-0 pr-2 text-center`}>
								<ListboxItem key="profile" onPress={onOpen}>
									Профиль
								</ListboxItem>
								<ListboxItem key="history" href={process.env.NEXT_PUBLIC_BASE_PATH + '/history'}>
									История заказов
								</ListboxItem>
								<ListboxItem key="exit" className="text-danger" color="danger" onPress={() => (setAuth ? setAuth(false) : {})}>
									Выход
								</ListboxItem>
							</Listbox>
							<ModalManager
								modalName={ModalTypesEnum.Profile}
								isOpen={isOpen}
								onOpenChange={onOpenChange}
								isAuth={isAuth}
								setAuth={setAuth}
							></ModalManager>
						</div>
					</AccordionItem>
				</Accordion>
			</div>
		);
	}
	return (
		<HeaderButton color={COLORS.secondary} modalName={ModalTypesEnum.Auth} isAuth={isAuth} setAuth={setAuth}>
			<CircleUser size={28} strokeWidth={2.5} />
			Войти
		</HeaderButton>
	);
}
