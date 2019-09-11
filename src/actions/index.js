export const BUY_ITEM = 'BUY_ITEM'

export const buyItem = (item) => {
    return {
        type: BUY_ITEM,
        payload: item
    }
}

export const REMOVE_ITEM = 'REMOVE_ITEM'