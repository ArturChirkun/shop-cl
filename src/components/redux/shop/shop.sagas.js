
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { firestore, convertSnapshotToMap } from '../../../firebase/firebase.utils';

import ShopActionsTypes from './types';
import { fetchingFailure, fetchingSuccess } from './actions';

export function* fetchCollectionsAsync() {
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertSnapshotToMap, snapshot);
        yield put(fetchingSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchingFailure(error))
    }

};


export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
};