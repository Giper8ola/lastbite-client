import { Button } from '@heroui/react';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath ?? '';

export default function Home() {
	return (
		<div>
			<Button className="bg-amber-200 text-white shadow-lg">Click me</Button>
		</div>
	);
}
