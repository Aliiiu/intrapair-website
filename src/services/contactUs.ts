import intrapairServiceApi from '../utils/intrapairService';

type FormData = {
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	organization_name: string;
	purpose_of_contact: string;
	message: string;
	token: string;
};

export const intrapairServices = {
	contactUs: async (data: any) => {
		return intrapairServiceApi().post('api/v1/contact-us', data);
	},
};
