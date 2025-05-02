import getConfig from 'next/config';

import Header from '@/components/Header';

import Body from './history-main';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath ?? '';

const History = () => {
	return (
		<div className="py-5 font-f-primary min-w-[1100px] max-w-full">
			<div className="w-full max-w-[1400px] mx-auto">
				<Header basePath={basePath}></Header>
				<Body basePath={basePath} className="p-16"></Body>
			</div>
		</div>
	);
};

export default History;
