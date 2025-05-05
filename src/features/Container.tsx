import React, { ReactNode } from 'react';

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
	return <div className={`font-f-primary w-full mx-auto ` + className}>{children}</div>;
};

export default Container;
