import { Input, Textarea } from '@heroui/react';

import { useLocationStore } from '@/stores/LocationStore';

export default function OrderAddress() {
	const city = useLocationStore((state) => state.city);
	return (
		<div className="bg-c-secondary rounded-[25px] p-4 shadow-md">
			<div className="w-full h-full">
				<b>Адрес доставки</b>
				<div className="flex items-center gap-4">
					<div className="rounded-2xl border-c-primary border-2 shadow-md text-lg mt-6 h-1/2 py-1 px-3 items-center text-nowrap bg-c-secondary">
						{'г.' + city}
					</div>
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
				</div>
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
