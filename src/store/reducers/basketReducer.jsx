const initialState = {
  basket: { deals: ['works', 'works', 'works'] },
};

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case 'get_deals':
      console.lot(state);
      return;
    case 'add_deal':
      return;
    case 'remove_deal':
      return;
    default:
      return state;
  }
}
