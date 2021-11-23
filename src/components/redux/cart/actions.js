import CartActionsTypes from "./types";

export const toggleCartHidden = () => {
    return {
        type: CartActionsTypes.TOGGLE_CART_HIDDEN
    }
}


export const addItem = (item) => {
    return {
        type: CartActionsTypes.ADD_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

export const removeItemFromCart = (item) => {
    return {
        type: CartActionsTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}
