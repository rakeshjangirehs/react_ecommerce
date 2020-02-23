import shopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => {
    console.log('abc');
    return ({
        type: shopActionTypes.FETCH_COLLECTIONS_START,
    })
};

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFaillure = error => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionRef.get().then((snapshot) => {
            
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFaillure(error.message)));
    }
}