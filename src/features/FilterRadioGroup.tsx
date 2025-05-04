'use client';
import { Radio, RadioGroup } from '@heroui/react';

import { ListProps } from '@/types';

export function FilterRadioGroup(List: ListProps[]) {
	return (
		<RadioGroup className="px-6 py-2">
			{List.map((type: ListProps) => (
				<Radio
					key={type.key}
					value={type.key}
					classNames={{
						wrapper: 'invisible absolute z-50'
					}}
					className="opacity-50 data-[hover=true]:opacity-75 data-[selected=true]:opacity-100 data-[selected=true]:font-bold"
				>
					{type.value}
				</Radio>
			))}
		</RadioGroup>
	);
}
