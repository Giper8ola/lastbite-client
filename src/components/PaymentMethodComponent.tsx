import { Radio, RadioGroup } from '@heroui/react';

import CustomImage from '@/features/CustomImage';

export default function PaymentMethodComponent() {
	return (
		<div className="bg-c-secondary rounded-[25px] p-4 shadow-md">
			<b>Оплата</b>
			<RadioGroup
				isRequired
				label="Выберите способ оплаты"
				className="text-[16px] w-full"
				classNames={{ label: 'text-[#000000] pb-2', wrapper: 'px-2 gap-8 flex flex-row pb-2' }}
			>
				<Radio
					value="tpay"
					color="success"
					classNames={{ wrapper: 'invisible absolute z-50', base: 'px-0' }}
					className="w-40 h-28 border-foreground-200 hover:border-foreground-300 data-[selected=true]:border-c-primary border-3 rounded-[15px]"
				>
					<CustomImage src="/tpay.svg" alt="tpay logo" width={100} height={100} className="mr-2" />
				</Radio>
				<Radio
					value="sbp"
					color="success"
					classNames={{ wrapper: 'invisible absolute z-50', base: 'px-0' }}
					className="w-40 h-28 border-foreground-200 hover:border-foreground-300 data-[selected=true]:border-c-primary border-3 rounded-[15px]"
				>
					<CustomImage src="/sbp.svg" alt="tpay logo" width={100} height={100} className="mr-2" />
				</Radio>
			</RadioGroup>
		</div>
	);
}
