import { FilterTypesProps } from '@/types';

import { FilterCheckBoxGroup } from './FilterCheckBoxGroup';

export function FilterList(Lists: FilterTypesProps[]) {
	return (
		<div className={`flex flex-col mb-6`}>
			{Lists.map((el: FilterTypesProps) => (
				<div className="bg-white shadow-none px-0" key={el.key}>
					<b className="flex px-6 py-2 gap-2">{el.title}</b>
					{FilterCheckBoxGroup(el.list)}
				</div>
			))}
		</div>
	);
}
