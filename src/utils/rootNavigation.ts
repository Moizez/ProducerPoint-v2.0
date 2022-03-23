import { createRef } from 'react';
import { TNavigate, TNavigation } from '../types/typesNavigation';

export const navigationRef = createRef<TNavigation>();

export const goBack = () => {
	navigationRef.current?.goBack();
};

// export const navigate = <T>({ merge, name, params }: TNavigate<T>) => {
// 	navigationRef.current?.navigate({
// 		merge,
// 		name,
// 		params,
// 	});
// };

export const navigate = (name: string, params?: any) => {
	navigationRef.current?.navigate(name, params);
};

export const replace = (name?: string, params?: any) => {
	navigationRef.current?.reset({
		index: 0,
		routes: [{ name, params }],
	});
};
