import { Input, Textarea } from '@heroui/react';

export default function OrderAddressComponent() {
	return (
		<div className="bg-c-secondary rounded-[25px] p-4 shadow-md">
			<div className="w-full h-full">
				<b>Адрес доставки</b>
				<Input
					label="Введите адрес"
					className="py-5"
					classNames={{
						inputWrapper: 'group-data-[focus=true]:border-c-primary'
					}}
					labelPlacement="outside"
					placeholder=" "
					variant="bordered"
					isRequired
				></Input>
				<Textarea
					className=""
					classNames={{
						label: 'text-black',
						inputWrapper: 'group-data-[focus=true]:border-c-primary'
					}}
					label="Добавьте комментарий"
					isClearable
					labelPlacement="outside"
					variant="bordered"
				></Textarea>
			</div>
		</div>
	);
}
