function FavsReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVS": {
      return [action.image, ...state];
    }
    case "REMOVE_FROM_FAVS": {
      return state.filter((image) => {
        return image.id !== action.image.id;
      });
    }
    default:
      return state;
  }
}

export default FavsReducer;
