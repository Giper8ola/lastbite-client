import { ReactElement } from 'react';

import RateModal from '@/components/modals/RateModal';
import { ModalManagerProps } from '@/types';
import { ModalTypesEnum } from '@/types/enum';

import AuthCodeModal from './AuthCodeModal';
import { AuthModal } from './AuthModal';
import CartModal from './CartModal';
import LocationModal from './LocationModal';
import ProfileModal from './ProfileModal';
import RegModal from './RegModal';

export default function ModalManager({ modalName, isOpen, onOpenChange, isAuth, setAuth }: ModalManagerProps) {
	const MODALS: Record<ModalTypesEnum, ReactElement> = {
		[ModalTypesEnum.Auth]: <AuthModal isOpen={isOpen} onOpenChange={onOpenChange}></AuthModal>,
		[ModalTypesEnum.Reg]: <RegModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></RegModal>,
		[ModalTypesEnum.Cart]: <CartModal isOpen={isOpen} onOpenChange={onOpenChange}></CartModal>,
		[ModalTypesEnum.Code]: (
			<AuthCodeModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></AuthCodeModal>
		),
		[ModalTypesEnum.Location]: <LocationModal isOpen={isOpen} onOpenChange={onOpenChange}></LocationModal>,
		[ModalTypesEnum.Profile]: <ProfileModal isOpen={isOpen} onOpenChange={onOpenChange}></ProfileModal>,
		[ModalTypesEnum.Rate]: <RateModal isOpen={isOpen} onOpenChange={onOpenChange}></RateModal>
	};

	if (modalName && modalName in MODALS) {
		return MODALS[modalName];
	}
}
