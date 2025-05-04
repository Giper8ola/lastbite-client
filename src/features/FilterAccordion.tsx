import { Accordion, AccordionItem } from '@heroui/react';

import { FilterTypesProps } from '@/types';

import { FilterRadioGroup } from './FilterRadioGroup';

export function FilterAccordion(Lists: FilterTypesProps[]) {
	return (
		<Accordion variant="splitted" className={`flex flex-col`}>
			{Lists.map((el: FilterTypesProps) => (
				<AccordionItem
					key={el.key}
					isCompact
					classNames={{
						heading:
							'hover:bg-foreground-200 hover:rounded-full data-[open=true]:rounded-full px-4 data-[open=true]:shadow-md data-[open=true]:bg-c-primary',
						indicator: 'text-black'
					}}
					title={<b className="flex gap-2">{el.title}</b>}
					className="bg-white shadow-none px-0"
				>
					{FilterRadioGroup(el.list)}
				</AccordionItem>
			))}
		</Accordion>
	);
}
