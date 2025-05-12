import Image, { ImageProps } from 'next/image';

const CustomImage = (props: ImageProps) => {
	const { src, ...rest } = props;

	const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

	// eslint-disable-next-line jsx-a11y/alt-text
	return <Image {...rest} src={basePath + src} />;
};

export default CustomImage;
