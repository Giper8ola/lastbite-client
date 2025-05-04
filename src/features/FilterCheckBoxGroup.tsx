'use client';
import { Checkbox, CheckboxGroup } from '@heroui/react';

import { ListProps } from '@/types';

export function FilterCheckBoxGroup(List: ListProps[]) {
	return (
		<CheckboxGroup className="px-10 py-2" color="success">
			{List.map((type: ListProps) => (
				<Checkbox
					key={type.key}
					value={type.key}
					className="opacity-50 data-[hover=true]:opacity-75 data-[selected=true]:opacity-100 data-[selected=true]:font-bold"
				>
					{type.value}
				</Checkbox>
			))}
		</CheckboxGroup>
	);
}
