import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import api from '../../../services/api'
import types from './types'

import { signInFailure, signInSuccess } from './actions'
import { setUserReducer, updateAvatarRequest } from '../user/actions'
import { openAlert } from '../storageless/actions'

export function* signIn({ payload }) {

    try {
        const { email, password } = payload
        const response = yield call(api.post, '/users/signin', { email, password })

        // console.log('LOGIN: ', response.data)

        const { token } = response.data

        if (!token) {
            //@ts-ignore
            // yield put(openAlert({ message: 'Token não identificado!' }))
            yield put(signInFailure());
        } else {
            yield put(signInSuccess({ token: response.data.token, profile: response.data }));
            if (response.data.image?.url) {
                yield put(setUserReducer({ uri: response.data.image?.url }, 'avatar'));
            }
        }

    } catch (error) {
        yield put(signInFailure());
        //@ts-ignore
        // yield put(openAlert({ message: `Erro: ${error.message}` }))
        console.log(`Erro: ${error}`)
    }
}

export function* signUp({ payload }) {

    try {

        const response = yield call(api.post, '/users', payload)
        const { token } = response.data

        console.log('SIGN UP: ', response.data)

        if (!token) {

            //@ts-ignore
            // yield put(openAlert({ message: 'Token não identificado!' }))
            yield put(signInFailure());
        } else {
            yield put(signInSuccess({ token: response.data.token, profile: response.data }));
        }

    } catch (error) {
        yield put(signInFailure());
        //@ts-ignore
        // yield put(openAlert({ message: `Erro: ${error.message}` }))
        console.log(`Erro: ${error}`)
    }
}

export default all([
    //@ts-ignore
    takeLatest(types.SIGN_IN_REQUEST, signIn),
    //@ts-ignore
    takeLatest(types.SIGN_UP_REQUEST, signUp)
])