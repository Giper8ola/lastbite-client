import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

import type { NextConfig } from 'next';

const nextConfig = (phase: never): NextConfig => {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;
	const basePath = '/lastbite-client';

	return {
		output: 'export',
		basePath: isDev ? undefined : basePath,
		assetPrefix: isDev ? undefined : basePath + '/',
		images: {
			unoptimized: true
		},
		publicRuntimeConfig: {
			basePath: isDev ? undefined : basePath
		}
	};
};

export default nextConfig;
