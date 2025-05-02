'use client';
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

export default function LocationModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange?: () => void }) {
	const cities = [
		{ key: 'moscow', label: 'Москва' },
		{ key: 'voronezh', label: 'Воронеж' },
		{ key: 'saint-p', label: 'Санкт-Петербург' },
		{ key: 'volgograd', label: 'Волгоград' },
		{ key: 'liski', label: 'Лиски' },
		{ key: 'rossosh', label: 'Россошь' }
	];
	return (
		<Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<Form onSubmit={onClose} autoComplete="on" method="dialog">
						<ModalHeader className="flex flex-col gap-1">Где вы находитесь?</ModalHeader>
						<ModalBody className="w-[100%]">
							<Autocomplete isRequired label="Город проживания" defaultInputValue="Воронеж">
								{cities.map((city) => (
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
