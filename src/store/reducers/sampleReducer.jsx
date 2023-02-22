const initialState = {
  sample: [],
};

export default function sampleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_ITEM': {
      break;
    }
    case 'UPDATE_ITEM': {
      break;
    }
    default:
      return state;
  }

  return {};
}
