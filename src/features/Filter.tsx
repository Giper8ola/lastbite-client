import { useState } from 'react';

import { Accordion, AccordionItem, Checkbox, CheckboxGroup, Radio, RadioGroup } from '@heroui/react';
import { useShallow } from 'zustand/shallow';

import { useFilterStore } from '@/stores/FilterStore';
import { FilterTypesProps, ListProps } from '@/types';

export function Filter(Lists: FilterTypesProps[], isFilter: boolean) {
	const { setCategory, clearCategories } = useFilterStore(
		useShallow((state) => ({
			setCategory: state.setCategory,
			clearCategories: state.clearCategories
		}))
	);
	const [isClose, setClose] = useState(false);
	if (isFilter) {
		return (
			<div className={`flex flex-col mb-6`}>
				{Lists.map((el: FilterTypesProps) => (
					<div className="bg-white shadow-none px-0" key={el.key}>
						<b className="flex px-6 py-2 gap-2">{el.title}</b>
						<CheckboxGroup onValueChange={(value) => setCategory(value)} className="px-10 py-2" color="success">
							{el.list.map((type: ListProps) => (
								<Checkbox
									key={type.key}
									value={type.value}
									className="opacity-50 data-[hover=true]:opacity-75 data-[selected=true]:opacity-100 data-[selected=true]:font-bold"
								>
									{type.value}
								</Checkbox>
							))}
						</CheckboxGroup>
					</div>
				))}
			</div>
		);
	}
	return (
		<Accordion
			onSelectionChange={() => {
				setClose(!isClose);
				if (isClose) {
					clearCategories();
				}
			}}
			variant="splitted"
			className={`flex flex-col`}
		>
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
					<RadioGroup
						onValueChange={(value) => {
							clearCategories();
							setCategory(value);
						}}
						className="px-6 py-2"
					>
						{el.list.map((type: ListProps) => (
							<Radio
								key={type.key}
								value={type.value}
								classNames={{
									wrapper: 'invisible absolute z-50'
								}}
								className="opacity-50 data-[hover-unselected=true]:opacity-75 data-[selected=true]:opacity-100 data-[selected=true]:font-bold"
							>
								{type.value}
							</Radio>
						))}
					</RadioGroup>
				</AccordionItem>
			))}
		</Accordion>
	);
}
