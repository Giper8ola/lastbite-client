import getConfig from 'next/config';

import { ToCartButton } from '@/features/ToCartButton';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath ?? '';

const Test = () => {
	return (
		<div className="p-10">
			<ToCartButton price={100} />
		</div>
	);
};

export default Test;
