import gsap from 'gsap';
import React, {
	MouseEventHandler,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

const Cursor = ({
	children,
	style,
}: {
	children: React.ReactNode;
	style?: string;
}) => {
	const cursorRef = useRef<HTMLDivElement | null>(null);
	const [showCursor, setShowCursor] = useState(false);

	useLayoutEffect(() => {
		const elem = cursorRef.current;
		let mouseX = 0;
		let mouseY = 0;

		gsap.to(
			{},
			{
				duration: 0.016,
				repeat: -1,
				onRepeat: () => {
					gsap.set(elem, {
						css: {
							left: mouseX,
							top: mouseY,
						},
					});
				},
			}
		);

		document.addEventListener('mousemove', (e: MouseEvent) => {
			mouseX = e.pageX;
			mouseY = e.pageY;
		});
		return () => {
			document.removeEventListener('mousemove', (e: MouseEvent) => {
				mouseX = e.pageX;
				mouseY = e.pageY;
			});
		};
	}, []);

	const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		const box: HTMLDivElement = event.currentTarget;
		// box.style.backgroundColor = 'lightblue';
		// console.log(event);
		setShowCursor(true);
		// cursorRef.current!.style.display = 'flex';
	};
	const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		const box: HTMLDivElement = event.currentTarget;
		// box.style.backgroundColor = 'lightgreen';
		setShowCursor(false);
		// cursorRef.current!.style.display = 'none';
	};
	return (
		<div
			onMouseOver={boxMouseOverHandler}
			onMouseOut={boxMouseOutHandler}
			className='w-full'
		>
			<div
				ref={cursorRef}
				className={`w-20 h-20 flex justify-center ${
					style ? style : 'bg-white text-purple-600'
				} font-encode items-center z-10 absolute top-0 left-0 rounded-full ${
					showCursor ? 'block' : 'hidden'
				}`}
			>
				View
			</div>
			{children}
		</div>
	);
};

export default Cursor;
