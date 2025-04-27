import getConfig from 'next/config';

import Header from '@/components/Header';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath ?? '';

export default function Home() {
	return (
		<div className="px-20 py-5">
			<Header />
		</div>
	);
}
