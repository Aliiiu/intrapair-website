import React, { FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface Props {
	text: string;
	style: string;
	loading?: boolean;
}
const Button: FC<Props> = ({ text, style, loading }) => {
	return (
		<button
			disabled={loading}
			className={`rounded-[41px] text-sm sm:text-base text-white max-h-[60px] flex justify-center items-center transition-colors ease-in-out duration-500 py-3 lg:py-[15px] ${style}`}
		>
			{loading ? <ClipLoader color='#ffffff' size={20} /> : text}
		</button>
	);
};

export default Button;
