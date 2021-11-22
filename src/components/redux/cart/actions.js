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