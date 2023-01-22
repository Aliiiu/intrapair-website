import React, { FC } from 'react';

interface Props {
	text: string;
	style: string;
}
const Button: FC<Props> = ({ text, style }) => {
	return (
		<button
			className={`rounded-[41px] text-base w-[201px] text-white  transition-colors ease-in-out duration-500 py-[15px] ${style}`}
		>
			{text}
		</button>
	);
};

export default Button;
