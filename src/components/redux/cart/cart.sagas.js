import { put, all, call, takeLatest } from "@redux-saga/core/effects";

import UserActionTypes from "../user/types";
import { clearCart } from "./actions";

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSucces() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}
export function* cartSagas() {
    yield(all([call(onSignOutSucces)]))
}