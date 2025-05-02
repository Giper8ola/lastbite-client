import React, { ReactNode } from 'react';

const Container = ({ children, width }: { children: ReactNode; width?: number }) => {
	return <div className={`w-full max-w-[${width ?? 1400}px] mx-auto`}>{children}</div>;
};

export default Container;
