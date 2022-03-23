import { TConfrontationStorageless } from './confrontation';
import { IAuth, IUser, TAvatar } from './users/userTypes';
import { TUtilsStorageless } from './utils';

export interface IGeneric {
	id?: number;
}

export type GlobalState = {
	auth: IAuth;
	user: IUser;
	confrontations?: TConfrontationStorageless;
	utils?: TUtilsStorageless;
};

export interface IResultScore {
	golsVisiting: number;
	golsHome: number;
}

export type TAction<T> = {
	type?: string;
	payload?: T;
	key?: string;
};

export type TAlert = {
	visible?: boolean;
	color?: string;
	time?: number;
	message: string;
};

export type TImage = {
	url: string;
};

export type TFlagCard = {
	uri: string;
	height?: number;
	width?: number;
	radius?: number;
};

export type TTooltip = {
	background?: string;
	color?: string;
	time?: number;
	name: string;
	height?: number;
	width?: number;
	children: Object;
};

export type TMoreDetailsButton = {
	background?: string;
	color?: string;
	title?: string;
	action?: () => void;
};

export type TAvatarCard = {
	avatar?: TAvatar;
	height?: number;
	width?: number;
	isEdit?: boolean;
	spacing?: string;
};
