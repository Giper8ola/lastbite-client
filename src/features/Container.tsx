import React, { ReactNode } from 'react';

const Container = ({ children, width }: { children: ReactNode; width: number }) => {
	return (
		<div className={`w-full mx-auto`} style={{ maxWidth: width ?? 1400 }}>
			{children}
		</div>
	);
};

export default Container;
