import { Input } from '@heroui/react';
import { Funnel, Search } from 'lucide-react';

export default function CustomSearch({ onFilterClick }: { onFilterClick: () => void }) {
	return (
		<Input
			classNames={{
				label: 'text-black/50 dark:text-white/90',
				input: [
					'bg-transparent',
					'text-black/90 dark:text-white/90',
					'placeholder:text-default-700/50 dark:placeholder:text-white/60'
				],
				innerWrapper: 'bg-transparent',
				inputWrapper: [
					'shadow-xl',
					'bg-default-200/50',
					'dark:bg-default/60',
					'backdrop-blur-xl',
					'backdrop-saturate-200',
					'hover:bg-default-200/70',
					'dark:hover:bg-default/70',
					'group-data-[focus=true]:bg-default-200/50',
					'dark:group-data-[focus=true]:bg-default/60',
					'text-default-700/50',
					'!cursor-text'
				]
			}}
			placeholder="Поиск"
			radius="full"
			endContent={<Funnel className="cursor-pointer text-black opacity-40 hover:opacity-75" onClick={onFilterClick} />}
			startContent={<Search />}
			className="p-4"
		/>
	);
}
