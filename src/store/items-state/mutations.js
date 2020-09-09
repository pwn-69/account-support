export const STATE_IMPORT_ITEMS = (state, items) => {
    state.items = items
}

export const STATE_SET_ITEM_DISABLE = (state, item) => {
    const index = state.items.findIndex(element => element.value === item);
    Object.assign(state.items[index], { disable: true });
}

export const STATE_SET_ITEM_ENABLE = (state, item) => {
    const index = state.items.findIndex(element => element.value === item);
    Object.assign(state.items[index], { disable: false });
}