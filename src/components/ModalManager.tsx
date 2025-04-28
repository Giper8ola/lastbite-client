import AuthModal from './AuthModal';
import CartModal from './CartModal';
import RegModal from './RegModal';

export default function ModalManager({
	modalName,
	isOpen,
	onOpenChange,
	basePath
}: {
	modalName: string;
	isOpen: boolean;
	onOpenChange: () => void;
	basePath?: string;
}) {
	const MODALS = {
		auth: <AuthModal isOpen={isOpen} onOpenChange={onOpenChange}></AuthModal>,
		reg: <RegModal isOpen={isOpen} onOpenChange={onOpenChange}></RegModal>,
		cart: <CartModal isOpen={isOpen} onOpenChange={onOpenChange} basePath={basePath}></CartModal>
	};
	if (modalName == 'auth') {
		return MODALS.auth;
	}
	if (modalName == 'reg') {
		return MODALS.reg;
	}
	if (modalName == 'cart') {
		return MODALS.cart;
	}
}
