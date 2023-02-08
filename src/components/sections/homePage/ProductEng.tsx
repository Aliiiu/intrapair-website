import Image from 'next/image';
import React, { useState, useEffect, useRef, FC, RefObject } from 'react';
import Accordion from '../../UI/widget/Accordion/Accordion';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../UI/widget/button/Button';
import Link from 'next/link';
import { useMedia, useIntersection } from 'react-use';

interface ArrayType {
	title: string;
	key: number;
	content: string;
	imgSrc: string;
	width: number;
	height: number;
}
const faqArray: ArrayType[] = [
	{
		key: 1,
		title: 'Product Development',
		content:
			'We explore our client’s business ideas to build scalable and future-ready products that are generally acceptable and accessible in the global market.',
		imgSrc: '/images/prodDev.png',
		width: 607,
		height: 447,
	},
	{
		key: 2,
		title: 'DevOps and Platform Engineering',
		content:
			'We build tools to automate the software development lifecycle that improves the continuous delivery of applications and services at a high-velocity scale and customer experience. ',
		imgSrc: '/images/devOps.png',
		width: 531,
		height: 502,
	},
	{
		key: 3,
		title: 'Data Engineering and Analytics',
		content:
			'We improve the data visualization of companies by developing data-driven solutions that produce insightful real-time data about the core metrics of their business. ',
		imgSrc: '/images/dataEng.png',
		width: 609,
		height: 389,
	},
	{
		key: 4,
		title: 'Application Modernization',
		content:
			'We transform legacy applications into elegant software products to enhance and accelerate business functions.',
		imgSrc: '/images/appDev.png',
		width: 523,
		height: 526,
	},
];

const ProductEng: FC<{
	caseStudy: RefObject<HTMLElement>;
	hero: RefObject<HTMLElement>;
}> = ({ caseStudy, hero }) => {
	const [index, setIndex] = useState(1);
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 1,
	});
	const isMobile = useMedia('(max-width: 768px)');

	useEffect(() => {
		// console.log('effect fired')
		const _body = document.querySelector('body');
		let _productEng: any = null;
		if (intersectionRef) {
			_productEng = intersectionRef.current;
		}

		if (!_body || !_productEng) return;

		// you can change this to useRef instead of id and pass it as props here
		const _hero = hero.current;
		// const _hero = document.querySelector('#hero');
		const _caseStudy = caseStudy.current;
		// const _caseStudy = document.querySelector('#caseStudy');

		let _timeOutHandler: any = null;

		const _switch = (e: any) => {
			console.log(index);
			console.log(e);
			if (e.wheelDelta / 120 > 0) {
				// user scrolled up
				// console.log('up', index);
				if (index > 1) {
					setIndex(index - 1);
				} else {
					console.log('release scroll');
					if (_hero) _hero.scrollIntoView({ behavior: 'smooth' });
				}
			} else {
				// user scrolled down
				// console.log('down', index);
				if (index < faqArray.length) {
					setIndex(index + 1);
				} else {
					// console.log('release scroll');
					if (_caseStudy) _caseStudy.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};

		const _clearTimeout = () => {
			if (_timeOutHandler) {
				clearTimeout(_timeOutHandler);
			}
		};

		const onWheel = (e: any) => {
			e.preventDefault();
			console.log('wheel event active');
			_clearTimeout();
			_timeOutHandler = setTimeout(() => {
				_switch(e);
			}, 50);
		};

		const cleanup = () => {
			// console.log('cleanup');
			_clearTimeout();
			if (intersectionRef && _productEng) {
				_productEng.removeEventListener('wheel', onWheel);
			}
		};

		if ((intersection && intersection.intersectionRatio < 1) || isMobile) {
			cleanup();
		} else {
			_productEng.addEventListener('wheel', onWheel);
		}

		return () => {
			if (!isMobile) {
				cleanup();
			}
		};
	}, [index, isMobile, intersection]);

	return (
		<div className='container m-auto w-full px-4 xl:px-[114px]'>
			<div className='flex flex-col gap-y-9'>
				<div className='flex flex-col gap-3'>
					<motion.div
						className='border-b-[0.5px] w-max pb-3 xl:pb-5 pr-5 border-white '
						whileInView={{
							borderBottom: '2px solid #fff',
							paddingRight: 0,
						}}
						initial={{
							borderBottom: '0.5px solid #fff',
							paddingRight: '2.5rem',
						}}
						whileHover={{
							borderBottom: '2px solid #fff',
							paddingRight: '2rem',
						}}
						transition={{
							duration: 0.8,
							type: 'tween',
							ease: 'easeInOut',
						}}
					>
						<h3 className='font-bold text-white text-[28px] xl:text-5xl'>
							Home For Everything
						</h3>
						<h3 className='font-bold text-white mt-0 sm:mt-2 text-[28px] xl:text-5xl'>
							Product Engineering
						</h3>
					</motion.div>

					<div>
						<p className='text-white max-w-[450px] text-base'>
							We utilize our coding intelligence to deliver first-class products
							featuring an excellent digital experience.
						</p>
					</div>
				</div>
				<div className='md:hidden'>
					{faqArray.map((item) => (
						<Accordion {...item} key={item.key} />
					))}
				</div>
				<div
					className='md:flex xl:mt-[60px] hidden gap-[100px]'
					style={{
						gridTemplateColumns: 'max-content 1fr',
					}}
					ref={intersectionRef}
				>
					<div className='flex flex-1 flex-col mlg:mb-0 mb-[60px] gap-y-[60px]'>
						<div className='flex flex-col max-w-[370px] gap-6 mt-6'>
							{faqArray.map((item) => (
								<p
									key={item.key}
									onClick={() => setIndex(item.key)}
									className={`font-bold cursor-pointer text-3xl lg:text-4xl ${
										item.key === index
											? 'text-white'
											: 'text-black text-opacity-25'
									}`}
								>
									{item.title}
								</p>
							))}
						</div>
						<Link href={'/services'}>
							<Button
								text='Learn More'
								style='border-2 border-white hover:bg-white w-[146px] lg:w-[201px] hover:text-blue-400'
							/>
						</Link>
					</div>
					{faqArray.map((item) => (
						<div
							key={item.key}
							className={`flex flex-col flex-1 gap-3 items-center ${
								item.key === index ? '' : 'hidden'
							}`}
						>
							<Image
								src={item?.imgSrc}
								alt='illustration'
								width={item?.width}
								height={item?.height}
							/>
							<div>
								<p className='text-xl text-white'>{item?.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductEng;
