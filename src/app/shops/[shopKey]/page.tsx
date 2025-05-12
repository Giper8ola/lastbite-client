import { Divider, ScrollShadow } from '@heroui/react';
import { ChefHat } from 'lucide-react';

import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import CustomImage from '@/features/CustomImage';
import { Score } from '@/features/Score';
import { ShopItem } from '@/types';
import { SHOPS, BOXES_LIST } from '@/utils/consts';

export function generateStaticParams() {
	return SHOPS.map((shop: ShopItem) => ({
		shopKey: shop.key
	}));
}

export default async function Shops({ params }: { params: Promise<{ shopKey: string }> }) {
	const { shopKey } = await params;

	const item = SHOPS.find((shopItem: ShopItem) => shopItem.key === shopKey);

	if (!item) {
		return null;
	}

	return (
		<div className="font-f-primary py-5">
			<Container width={1500}>
				<div className="min-w-[915px] px-10">
					<div className="grid grid-cols-[35%_65%] gap-2">
						<div className="bg-white rounded-3xl shadow-md flex flex-col">
							<CustomImage
								className="rounded-3xl shadow-md"
								alt="Shop logo"
								src={item.value.imageUrl}
								width={600}
								height={350}
								priority
							/>
							<div className="overflow-hidden p-7">
								<div className="flex justify-between items-center gap-2">
									<div className="flex flex-row">
										<ChefHat size={38} />
										<p className="font-bold text-[30px] ml-1">{item.value.name}</p>
									</div>
									<Score number={item.value.rating} className="flex-shrink-0 -translate-y-[1px]" />
								</div>
								<p className="text-[14px] font-thin text-gray-500 ml-1.5">{item.value.address}</p>
								<Divider className="my-8" orientation="horizontal" />
								<ScrollShadow hideScrollBar className="px-6 mb-5 h-[27vh]">
									<p className="italic font-thin text-gray-400">{item.value.description}</p>
								</ScrollShadow>
							</div>
						</div>
						<ScrollShadow
							hideScrollBar
							className="px-6 h-[78vh] grid grid-cols-[49%_49%] gap-x-6"
							offset={100}
							orientation="vertical"
						>
							<BoxList list={BOXES_LIST} toCart={true} />
						</ScrollShadow>
					</div>
				</div>
			</Container>
		</div>
	);
}
