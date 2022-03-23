import { takeLatest, all, select, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import types from './types';
import { GlobalState } from '../../../types/userTypes';
import { setReducer } from './actions';

export function* getConfrontations() {
	const { profile } = yield select((state: GlobalState) => state.user);
	const { token } = yield select((state: GlobalState) => state.auth);

	try {
		const response = yield call(() =>
			api.get(`/confrontations/findManyByScheduled`)
		);
		//@ts-ignore
		yield put(setReducer(response.data, 'confrontations'));
		//console.log(response.data)
	} catch (error) {
		console.log('Error: ', error);
	}
}

export function* getConfrontationsFinished() {
	const { profile } = yield select((state: GlobalState) => state.user);
	const { token } = yield select((state: GlobalState) => state.auth);

	try {
		const response = yield call(() =>
			api.get(`/confrontations/findManyByFinished`)
		);
		//@ts-ignore
		yield put(setReducer(response.data, 'confrontations'));
		//console.log(response.data)
	} catch (error) {
		console.log('Error: ', error);
	}
}

export default all([
	//@ts-ignore
	takeLatest(types.GET_CONFRONTATIONS_SCHEDULED, getConfrontations),
	takeLatest(types.GET_CONFRONTATIONS_FINISHED, getConfrontationsFinished),
]);
