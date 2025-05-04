import { ReactElement } from 'react';

import { ModalManagerProps } from '@/types';
import { ModalTypesEnum } from '@/types/enum';

import AuthCodeModal from './AuthCodeModal';
import { AuthModal } from './AuthModal';
import CartModal from './CartModal';
import LocationModal from './LocationModal';
import ProfileModal from './ProfileModal';

export default function ModalManager({ modalName, modalDisclosure, isAuth, setAuth }: ModalManagerProps) {
	const MODALS: Record<ModalTypesEnum, ReactElement> = {
		[ModalTypesEnum.Auth]: <AuthModal modalDisclosure={modalDisclosure} isAuth={isAuth} setAuth={setAuth}></AuthModal>,
		[ModalTypesEnum.Cart]: <CartModal modalDisclosure={modalDisclosure}></CartModal>,
		[ModalTypesEnum.Code]: <AuthCodeModal modalDisclosure={modalDisclosure} isAuth={isAuth} setAuth={setAuth}></AuthCodeModal>,
		[ModalTypesEnum.Location]: <LocationModal modalDisclosure={modalDisclosure}></LocationModal>,
		[ModalTypesEnum.Profile]: <ProfileModal modalDisclosure={modalDisclosure}></ProfileModal>
	};

	if (modalName && modalName in MODALS) {
		return MODALS[modalName];
	}
}
