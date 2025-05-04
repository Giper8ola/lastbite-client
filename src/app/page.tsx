import { ScrollShadow } from '@heroui/react';

import Link from 'next/link';

import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import { BOXES_LIST, COLORS } from '@/utils/consts';

const Home = () => {
	return (
		<div className="font-f-primary py-5">
			<Container>
				<div className="mt-[5vh]">
					<div className="flex flex-row justify-between items-center">
						<p className="font-bold text-[36px]">Выгодно</p>
						<Link href={'/boxes'}>
							<button
								className="px-4 py-2 bg-white rounded-[15px] hover:transition-colors text-black hover:text-[${color == COLORS.primary ? COLORS.secondary : COLORS.primary}] font-bold text-[16px]  shadow-md hover:transition-shadow hover:duration-700 hover:shadow-[0_4px_3px_0px_rgba(0,0,0,0.3)]"
								style={{ backgroundColor: COLORS.primary }}
							>
								Все
							</button>
						</Link>
					</div>
					<ScrollShadow hideScrollBar orientation="horizontal" className="h-auto flex flex-row gap-2">
						<BoxList list={BOXES_LIST} toCart={true} className="my-3 w-[400px] flex-none" />
						<BoxList list={BOXES_LIST} toCart={true} className="my-3 w-[400px] flex-none" />
					</ScrollShadow>
				</div>
				<div className="mt-[5vh]">
					<div className="flex flex-row justify-between items-center">
						<p className="font-bold text-[36px]">С лучшей оценкой</p>
						<Link href={'/boxes'}>
							<button
								className="px-4 py-2 bg-white rounded-[15px] hover:transition-colors text-black hover:text-[${color == COLORS.primary ? COLORS.secondary : COLORS.primary}] font-bold text-[16px]  shadow-md hover:transition-shadow hover:duration-700 hover:shadow-[0_4px_3px_0px_rgba(0,0,0,0.3)]"
								style={{ backgroundColor: COLORS.primary }}
							>
								Все
							</button>
						</Link>
					</div>
					<ScrollShadow hideScrollBar orientation="horizontal" className="h-auto flex flex-row gap-2">
						<BoxList list={BOXES_LIST} toCart={true} className="my-3 w-[400px] flex-none" />
						<BoxList list={BOXES_LIST} toCart={true} className="my-3 w-[400px] flex-none" />
					</ScrollShadow>
				</div>
			</Container>
		</div>
	);
};

export default Home;
