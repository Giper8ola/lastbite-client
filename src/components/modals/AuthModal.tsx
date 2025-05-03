import React from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Card, CardBody, Tabs, Tab, Input, Button, Link } from '@heroui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera } from 'lucide-react';

interface LoginModalProps {
	isOpen: boolean;
	onOpenChange: (isOpen: boolean) => void;
}

export const AuthModal: React.FC<LoginModalProps> = ({ isOpen, onOpenChange }) => {
	const [selected, setSelected] = React.useState('login');

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md" placement="center" backdrop="blur">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex items-center gap-2">
							<Camera color="red" size={48} />
							<span>Account Access</span>
						</ModalHeader>
						<ModalBody className="pb-6">
							<Card className="max-w-full border-none shadow-none">
								<CardBody className="overflow-hidden px-0">
									<Tabs
										fullWidth
										aria-label="Login options"
										selectedKey={selected}
										size="md"
										onSelectionChange={(key) => setSelected(String(key))}
										disableAnimation={false}
										classNames={{
											tabList: 'gap-6',
											cursor: 'bg-primary',
											tab: 'max-w-full px-0 h-12'
										}}
									>
										<Tab key="login" title="Login">
											<div className="relative">
												<AnimatePresence mode="wait">
													<motion.div
														key="login-form"
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														transition={{ duration: 0.3, ease: 'easeInOut' }}
														className="w-full"
													>
														<form className="flex flex-col gap-4">
															<motion.div
																initial={{ opacity: 0, y: -10 }}
																animate={{ opacity: 1, y: 0 }}
																transition={{ duration: 0.3, delay: 0.1 }}
															>
																<Input
																	isRequired
																	label="Email"
																	placeholder="Enter your email"
																	type="email"
																	startContent={<Camera color="red" size={48} />}
																/>
															</motion.div>
															<motion.div
																initial={{ opacity: 0, y: -10 }}
																animate={{ opacity: 1, y: 0 }}
																transition={{ duration: 0.3, delay: 0.2 }}
															>
																<Input
																	isRequired
																	label="Password"
																	placeholder="Enter your password"
																	type="password"
																	startContent={<Camera color="red" size={48} />}
																/>
															</motion.div>
															<p className="text-center text-small">
																Need to create an account?{' '}
																<Link size="sm" onPress={() => setSelected('sign-up')}>
																	Sign up
																</Link>
															</p>
															<div className="flex gap-2 justify-end">
																<Button fullWidth color="primary">
																	Login
																</Button>
															</div>
														</form>
													</motion.div>
												</AnimatePresence>
											</div>
										</Tab>
										<Tab key="sign-up" title="Sign up">
											<div className="relative">
												<AnimatePresence mode="wait">
													<motion.div
														key="signup-form"
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														transition={{ duration: 0.3, ease: 'easeInOut' }}
														className="w-full"
													>
														<form className="flex flex-col gap-4">
															<motion.div
																initial={{ opacity: 0, y: -10 }}
																animate={{ opacity: 1, y: 0 }}
																transition={{ duration: 0.3, delay: 0.1 }}
															>
																<Input
																	isRequired
																	label="Name"
																	placeholder="Enter your name"
																	type="text"
																	startContent={<Camera color="red" size={48} />}
																/>
															</motion.div>
															<motion.div
																initial={{ opacity: 0, y: -10 }}
																animate={{ opacity: 1, y: 0 }}
																transition={{ duration: 0.3, delay: 0.2 }}
															>
																<Input
																	isRequired
																	label="Email"
																	placeholder="Enter your email"
																	type="email"
																	startContent={<Camera color="red" size={48} />}
																/>
															</motion.div>
															<motion.div
																initial={{ opacity: 0, y: -10 }}
																animate={{ opacity: 1, y: 0 }}
																transition={{ duration: 0.3, delay: 0.3 }}
															>
																<Input
																	isRequired
																	label="Password"
																	placeholder="Enter your password"
																	type="password"
																	startContent={<Camera color="red" size={48} />}
																/>
															</motion.div>
															<p className="text-center text-small">
																Already have an account?{' '}
																<Link size="sm" onPress={() => setSelected('login')}>
																	Login
																</Link>
															</p>
															<div className="flex gap-2 justify-end">
																<Button fullWidth color="primary">
																	Sign up
																</Button>
															</div>
														</form>
													</motion.div>
												</AnimatePresence>
											</div>
										</Tab>
									</Tabs>
								</CardBody>
							</Card>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};
