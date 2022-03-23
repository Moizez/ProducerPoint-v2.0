import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import { goBack } from '../../../utils/rootNavigation'
import { openAlert } from '../storageless/actions'
import api from '../../../services/api'
import types from './types'

import { updateUserSuccess, updateUserFailure } from './actions'
import { GlobalState } from '../../../types/userTypes'
import { getFileName } from '../../../utils/helpers'

export function* updateUser({ payload }) {

    const { profile } = yield select((state: GlobalState) => state.user)
    const { token } = yield select((state: GlobalState) => state.auth)

    try {

        const response = yield call(api.put, `/users/${profile.id}`, payload);

        if (response.status == 200) {
            yield put(updateUserSuccess({ token: response.data.token, profile: response.data }));
            goBack()
        } else {
            //@ts-ignore
            // yield put(openAlert({ message: 'Falha ao atualizar usuário!' }))
            yield put(updateUserFailure());
        }


    } catch (error) {
        yield put(updateUserFailure());
        //@ts-ignore
        // yield put(openAlert({ message: `Erro: ${error.message}` }))
        console.log(`${error}`)
    }
}

export function* updateAvatar() {

    const { profile, avatar } = yield select((state: GlobalState) => state.user)

    try {

        const data = new FormData()
        data.append('id', profile.id)
        data.append('userPicture', {
            //@ts-ignore
            uri: avatar?.uri,
            type: 'image/jpg',
            name: getFileName(avatar?.uri)
        })

        const response = yield call(api.post, '/users/saveImage', data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (response.status == 200) {
            //@ts-ignore
            // yield put(openAlert({ message: 'Imagem atualizada com sucesso!', color: 'win' }))
            // yield put(updateUserSuccess(response.data));
        } else {
            //@ts-ignore
            // yield put(openAlert({ message: 'Falha ao atualizar usuário!' }))
            // yield put(updateUserFailure());
        }


    } catch (error) {
        // yield put(updateUserFailure());
        // //@ts-ignore
        // yield put(openAlert({ message: `Erro: ${error.message}` }))
        console.log(`${error}`)
    }
}

export default all([
    //@ts-ignore
    // takeLatest(types.USER_UPDATE_REQUEST, updateUser),
    //@ts-ignore
    takeLatest(types.USER_UPDATE_AVATAR, updateAvatar)
])