import types from "./types";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { TActionUser, TUser } from "../../../types/userTypes";

export function setUserReducer(payload: any, key: string) {
    return { type: types.SET_USER_REDUCER, payload, key }
}

export function updateUserRequest(payload: any) {
    return { type: types.USER_UPDATE_REQUEST, payload }
}

export function updateAvatarRequest(payload: Object) {
    return { type: types.USER_UPDATE_AVATAR, payload }
}

export function updateUserSuccess({ token, profile }) {
    return { type: types.USER_UPDATE_SUCCESS, payload: { token, profile } }
}


export function updateUserFailure() {
    return { type: types.USER_UPDATE_FAILURE }
}

