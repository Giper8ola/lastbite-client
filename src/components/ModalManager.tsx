import { ReactElement } from 'react';

import { ModalManagerProps } from '@/types';

import AuthCodeModal from './AuthCodeModal';
import AuthModal from './AuthModal';
import CartModal from './CartModal';
import LocationModal from './LocationModal';
import ProfileModal from './ProfileModal';
import RegModal from './RegModal';

export default function ModalManager({ modalName, isOpen, onOpenChange, isAuth, setAuth }: ModalManagerProps) {
	const MODALS: Record<string, ReactElement> = {
		auth: <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></AuthModal>,
		reg: <RegModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></RegModal>,
		cart: <CartModal isOpen={isOpen} onOpenChange={onOpenChange}></CartModal>,
		code: <AuthCodeModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></AuthCodeModal>,
		location: <LocationModal isOpen={isOpen} onOpenChange={onOpenChange}></LocationModal>,
		profile: <ProfileModal isOpen={isOpen} onOpenChange={onOpenChange}></ProfileModal>
	};

	if (modalName && modalName in MODALS) {
		return MODALS[modalName];
	}
}
