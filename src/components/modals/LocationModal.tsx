import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Form,
	Autocomplete,
	AutocompleteItem
} from '@heroui/react';

import { CommonModalProps } from '@/types';
import { CITIES_LIST } from '@/utils/consts';

export default function LocationModal({ isOpen, onOpenChange }: CommonModalProps) {
	return (
		<Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} classNames={{ closeButton: 'mt-3 mr-3' }}>
			<ModalContent>
				{(onClose) => (
					<Form onSubmit={onClose} autoComplete="on" method="dialog">
						<ModalHeader className="flex flex-col gap-1">Где вы находитесь?</ModalHeader>
						<ModalBody className="w-[100%]">
							<Autocomplete isRequired label="Город проживания" defaultInputValue="Воронеж">
								{CITIES_LIST.map((city) => (
									<AutocompleteItem key={city.key}>{city.label}</AutocompleteItem>
								))}
							</Autocomplete>
						</ModalBody>
						<ModalFooter className="w-[100%]">
							<Button type="submit" variant="faded" className="bg-c-primary border-c-primary">
								Готово
							</Button>
						</ModalFooter>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
