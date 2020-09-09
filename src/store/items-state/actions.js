export const IMPORT_ITEMS = (context, item) => {
    context.commit('STATE_IMPORT_ITEMS', item);
}

export const SET_ITEM_DISABLE = (context, item) => {
    context.commit('STATE_SET_ITEM_DISABLE', item);
}

export const SET_ITEM_ENABLE = (context, item) => {
    context.commit('STATE_SET_ITEM_ENABLE', item);
}