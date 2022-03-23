import produce from "immer";
import types from "./types";
import { TActionUser, TUser } from '../../../types/userTypes'

const INITIAL_STATE: TUser = {
    profile: null,
    loading: true,
    avatar: null
}

function user(state = INITIAL_STATE, action: TActionUser) {

    return produce(state, draft => {

        switch (action.type) {

            case types.SET_USER: {
                draft.profile = { ...state.profile, ...action.payload }
                draft.loading = false
                return draft
            }

            case types.SET_USER_REDUCER: {
                draft[action.key] = action.payload
                draft.loading = false
                return draft
            }

            case types.SIGN_IN_SUCCESS: {
                draft.profile = { ...state.profile, ...action.payload.profile }
                draft.loading = false
                return draft
            }

            case types.USER_UPDATE_REQUEST: {
                draft.profile = { ...state.profile, ...action.payload }
                draft.loading = false
                return draft
            }

            case types.USER_UPDATE_AVATAR: {
                draft.avatar = action.payload
                return draft
            }

            case types.USER_UPDATE_SUCCESS: {
                draft.profile = { ...state.profile, ...action.payload.profile }
                draft.loading = false
                return draft
            }

            case types.USER_UPDATE_FAILURE: {
                draft.loading = false
                return draft
            }

            case types.SIGN_OUT: {
                draft.profile = null
                draft.loading = false
                draft.avatar = null
                return draft
            }

            default:
                return state
        }

    })
}

export default user