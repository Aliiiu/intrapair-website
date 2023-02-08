import axios from 'axios';

export const intrapairServiceApi = () => {
	return axios.create({
		baseURL: 'https://api.intrapair.com/',
		timeout: 300000,
	});
};

export default intrapairServiceApi;
