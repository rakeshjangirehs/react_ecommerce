import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => {
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