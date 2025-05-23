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

export default function LocationModal({ modalDisclosure }: CommonModalProps) {
	return (
		<Modal
			isOpen={modalDisclosure.isOpen}
			placement="top-center"
			onOpenChange={modalDisclosure.onOpenChange}
			classNames={{ closeButton: 'mt-3 mr-3' }}
		>
			<ModalContent>
				{(onClose) => (
					<Form onSubmit={onClose} autoComplete="on" method="dialog">
						<ModalHeader className="flex flex-col gap-1 font-f-primary">Где вы находитесь?</ModalHeader>
						<ModalBody className="w-[100%] font-f-primary">
							<Autocomplete isRequired label="Город проживания" defaultInputValue="Воронеж">
								{CITIES_LIST.map((city) => (
									<AutocompleteItem key={city.key}>{city.value}</AutocompleteItem>
								))}
							</Autocomplete>
						</ModalBody>
						<ModalFooter className="w-[100%]">
							<Button type="submit" variant="faded" className="bg-c-primary border-c-primary font-f-primary">
								Готово
							</Button>
						</ModalFooter>
					</Form>
				)}
			</ModalContent>
		</Modal>
	);
}
