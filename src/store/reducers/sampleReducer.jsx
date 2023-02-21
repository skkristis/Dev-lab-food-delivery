const initialState = {
  sample: [],
};

export default function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ITEM": {
      // TODO: implement
    }
    case "UPDATE_ITEM": {
      // TODO: implement
    }
    default:
      return state;
  }
}
