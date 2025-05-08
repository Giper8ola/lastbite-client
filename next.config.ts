import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

import type { NextConfig } from 'next';

const nextConfig = (phase: never): NextConfig => {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

	return {
		output: 'export',
		basePath: isDev ? undefined : basePath,
		assetPrefix: isDev ? undefined : basePath,
		images: {
			unoptimized: true
		}
	};
};

export default nextConfig;
