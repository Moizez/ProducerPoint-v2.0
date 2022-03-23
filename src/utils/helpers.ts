//@ts-ignore
import avatar_default from '../assets/images/default_profile.jpg';
//@ts-ignore
import avatar_default_plus from '../assets/images/default_profile_plus.jpg';
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

const setToken = (payload) => {

	if (!payload) return;

	const { token } = payload?.auth || payload?.token;
	//console.log("TOKEN", token)
	if (token) {
		//@ts-ignore
		api.defaults.headers.Authorization = `Bearer ${token}`;
		return;
	}
}


const toAlpha = (hex: string, alpha: number) => {
	const alphas = {
		100: 'FF',
		95: 'F2',
		90: 'E6',
		85: 'D9',
		80: 'CC',
		75: 'BF',
		70: 'B3',
		65: 'A6',
		60: '99',
		55: '8C',
		50: '80',
		45: '73',
		40: '66',
		35: '59',
		30: '4D',
		25: '40',
		20: '33',
		15: '26',
		10: '1A',
		5: '0D',
	};

	return hex + alphas[alpha];
}

const getMimeType = (name: string) => {
	const types = {
		jpg: 'jpg',
		jpeg: 'jpeg',
		png: 'png',
	};

	const parts = name.split('.');
	return types[parts.pop().trim()];
}

const fixZero = (time: number) => time < 10 ? `0${time}` : time

const changeLvColor = (value: number) => {
	if (value <= 5) return '#022c6f'
	else if (value > 5 && value <= 10) return '#e71d36'
	else if (value > 10 && value <= 20) return '#00b4d8'
	else if (value > 20 && value <= 30) return '#38b000'
	else if (value > 30 && value <= 40) return '#ff758f'
	else if (value > 40 && value <= 50) return '#936639'
	else if (value > 50 && value <= 70) return '#8338ec'
	else if (value > 70 && value <= 100) return '#e36414'
	else if (value > 100 && value <= 150) return '#ffd000'
	else return null
}

const getFileName = (uri: string) => {
	if (uri.search('ImageManipulator') >= 0) {
		return uri.split('ImageManipulator')[1].replace('/', '');
	}
	return uri.split('ImagePicker')[1].replace('/', '')
}

const checkUrl = (url: string, isEdit?: boolean) => {
	if (url) {
		if (url.indexOf('images') > -1 || url.indexOf('ImageManipulator') > -1 || url.indexOf('ImagePicker') > -1) {
			return { uri: url }
		}
	}
	return isEdit ? avatar_default_plus : avatar_default
}

const formatDate = (date: string, params?: string) => {
	if (date) return format(parseISO(date), params || 'dd/MM/yyyy', { locale: pt })
}


export { toAlpha, getMimeType, fixZero, changeLvColor, getFileName, checkUrl, setToken, formatDate };