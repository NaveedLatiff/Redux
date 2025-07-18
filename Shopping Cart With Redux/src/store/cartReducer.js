export let ADD_ITEM = 'cart/addItem'
export let REM_ITEM = 'cart/removeItem'
export let ADD_QUANTITY = 'cart/addQuantity'
export let DECREASE_QUANTITY = 'cart/decreaseQuantity'
export let DELETE_ALL='cart/deleteAll'

// Action Creators
export function addItem(id, title, image, price) {
    return {
        type: ADD_ITEM,
        payload: {
            productId: id,
            quantity: 1,
            productTitle: title,
            productimage: image,
            productPrice: price

        }
    }
}

export function addQuantity(productId) {
    return { type: ADD_QUANTITY, payload: { productId } }
}
export function decreaseQuantity(productId) {
    return { type: DECREASE_QUANTITY, payload: { productId, quantity: 1 } }
}
export function deleteAll(){
    return {type:DELETE_ALL}
}

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_ITEM: {
            let exist = state.find((x) => x.productId === action.payload.productId);
            if (exist) {
                return state.map((x) =>
                    x.productId === action.payload.productId
                        ? { ...x, quantity: x.quantity + 1 }
                        : x
                );
            } else {
                return [...state, action.payload];
            }
        }
        case ADD_QUANTITY:
            return state.map((x) => {
                return x.productId === action.payload.productId ? { ...x, quantity: x.quantity + 1 } : x
            })
        case DECREASE_QUANTITY:
            return state.map((x) => {
                return x.productId === action.payload.productId ? { ...x, quantity: x.quantity - 1 } : x
            }).filter((x) => x.quantity > 0)
        case DELETE_ALL:
            return state=[]
        default:
            return state
    }
}

