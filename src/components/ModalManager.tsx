import AuthCodeModal from './AuthCodeModal';
import AuthModal from './AuthModal';
import CartModal from './CartModal';
import LocationModal from './LocationModal';
import RegModal from './RegModal';

export default function ModalManager({
	modalName,
	isOpen,
	onOpenChange,
	basePath,
	isAuth,
	setAuth
}: {
	modalName?: string;
	isOpen: boolean;
	onOpenChange: () => void;
	basePath?: string;
	isAuth?: boolean;
	setAuth?: (value: boolean) => void;
}) {
	const MODALS = {
		auth: <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></AuthModal>,
		reg: <RegModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></RegModal>,
		cart: <CartModal isOpen={isOpen} onOpenChange={onOpenChange} basePath={basePath}></CartModal>,
		code: <AuthCodeModal isOpen={isOpen} onOpenChange={onOpenChange} isAuth={isAuth} setAuth={setAuth}></AuthCodeModal>,
		location: <LocationModal isOpen={isOpen} onOpenChange={onOpenChange}></LocationModal>
	};

	if (modalName && modalName in MODALS) {
		return MODALS[modalName as keyof typeof MODALS];
	}
}
