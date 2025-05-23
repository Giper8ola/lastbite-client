import { Textarea, Input } from '@heroui/input';
import { RadioGroup, Radio, Form } from '@heroui/react';

import { BoxList } from '@/components/BoxList';
import Container from '@/features/Container';
import CustomImage from '@/features/CustomImage';
import HeaderButton from '@/features/HeaderButton';
import { BOXES_LIST } from '@/utils/consts';

const Order = () => {
	return (
		<div className="py-5 font-f-primary">
			<Container width={1300}>
				<div className="min-w-[915px] px-10 pb-5">
					<b className="font-bold text-3xl">Формирование заказа</b>
					<Form className="grid grid-cols-[65%_35%] grid-rows-1 flex-none gap-4 pt-10">
						<div className="grid grid-cols-1 gap-4 text-[24px]">
							<div className="bg-c-secondary rounded-[25px] p-4 shadow-md px-7">
								<b>Корзина</b>
								<BoxList list={BOXES_LIST} big={true} toCart={true} />
							</div>
							<div className="bg-c-secondary rounded-[25px] p-4 shadow-md">
								<div className="w-full h-full">
									<b>Адрес доставки</b>
									<Input
										label="Введите адрес"
										className="py-5"
										classNames={{
											inputWrapper: 'group-data-[focus=true]:border-c-primary'
										}}
										labelPlacement="outside"
										placeholder=" "
										variant="bordered"
										isRequired
									></Input>
									<Textarea
										className=""
										classNames={{
											label: 'text-black',
											inputWrapper: 'group-data-[focus=true]:border-c-primary'
										}}
										label="Добавьте комментарий"
										isClearable
										labelPlacement="outside"
										variant="bordered"
									></Textarea>
								</div>
							</div>
							<div className="bg-c-secondary rounded-[25px] p-4 shadow-md">
								<b>Оплата</b>
								<RadioGroup
									isRequired
									label="Выберите способ оплаты"
									className="text-[16px] w-full"
									classNames={{ label: 'text-[#000000] pb-2', wrapper: 'px-2 gap-8 flex flex-row pb-2' }}
								>
									<Radio
										value="tpay"
										color="success"
										classNames={{ wrapper: 'invisible absolute z-50', base: 'px-0' }}
										className="w-40 h-28 border-foreground-200 hover:border-foreground-300 data-[selected=true]:border-c-primary border-3 rounded-[15px]"
									>
										<CustomImage src="/tpay.svg" alt="tpay logo" width={100} height={100} className="mr-2" />
									</Radio>
									<Radio
										value="sbp"
										color="success"
										classNames={{ wrapper: 'invisible absolute z-50', base: 'px-0' }}
										className="w-40 h-28 border-foreground-200 hover:border-foreground-300 data-[selected=true]:border-c-primary border-3 rounded-[15px]"
									>
										<CustomImage src="/sbp.svg" alt="tpay logo" width={100} height={100} className="mr-2" />
									</Radio>
								</RadioGroup>
							</div>
						</div>
						<div className="bg-c-secondary rounded-[25px] shadow-md p-10 text-[16px]">
							<p>ИТОГО:</p>
							<b className="font-bold text-3xl">1000₽</b>
							<div className="py-14">
								<div className="flex justify-between">
									<p>Стоимость товаров:</p>
									<b>800₽</b>
								</div>
								<div className="flex justify-between">
									<p>Комиссия:</p>
									<b>800₽</b>
								</div>
								<div className="flex justify-between">
									<p>Доставка:</p>
									<b>800₽</b>
								</div>
							</div>
							<HeaderButton type="submit" className="w-full ">
								Перейти к оплате
							</HeaderButton>
						</div>
					</Form>
				</div>
			</Container>
		</div>
	);
};

export default Order;
