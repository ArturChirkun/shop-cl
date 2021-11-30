import ShopActionsTypes from "./types"

export const updateCollections = (collectionsMap) => {
    return {
        type: ShopActionsTypes.UPDATE_COLLECTIONS,
        payload: collectionsMap
    }
}