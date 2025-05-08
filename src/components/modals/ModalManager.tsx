import { ReactElement } from 'react';

import { ModalManagerProps } from '@/types';
import { ModalTypesEnum } from '@/types/enum';

import AuthCodeModal from './AuthCodeModal';
import { AuthModal } from './AuthModal';
import CartModal from './CartModal';
import LocationModal from './LocationModal';
import ProfileModal from './ProfileModal';

export default function ModalManager({ modalName, modalDisclosure }: ModalManagerProps) {
	const MODALS: Record<ModalTypesEnum, ReactElement> = {
		[ModalTypesEnum.Auth]: <AuthModal modalDisclosure={modalDisclosure}></AuthModal>,
		[ModalTypesEnum.Cart]: <CartModal modalDisclosure={modalDisclosure}></CartModal>,
		[ModalTypesEnum.Code]: <AuthCodeModal modalDisclosure={modalDisclosure}></AuthCodeModal>,
		[ModalTypesEnum.Location]: <LocationModal modalDisclosure={modalDisclosure}></LocationModal>,
		[ModalTypesEnum.Profile]: <ProfileModal modalDisclosure={modalDisclosure}></ProfileModal>
	};

	if (modalName && modalName in MODALS) {
		return MODALS[modalName];
	}
}
