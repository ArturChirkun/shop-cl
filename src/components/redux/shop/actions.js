import ShopActionsTypes from "./types";
import { firestore, convertSnapshotToMap } from "../../../firebase/firebase.utils";

export const fetchingStart = () => {
    return {
        type: ShopActionsTypes.FETCH_COLLECTIONS_START,
    }
}

export const fetchingSuccess = (collections) => {
    return {
        type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collections
    }
}

export const fetchingFailure = (errorMessage) => {
    return {
        type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
}

export const fetchingCollectionsStartAsync = () => {
    return dispatch  => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchingStart());
    
        collectionRef
        .get()
        .then((snapshot) => {
           const collectionsMap = convertSnapshotToMap(snapshot);
           dispatch(fetchingSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchingFailure(error.message)));
    }
}