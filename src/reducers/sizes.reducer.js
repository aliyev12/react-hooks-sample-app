const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      const newUpdateState = { ...state };
      Object.keys(newUpdateState).forEach(key => newUpdateState[key].size = action.payload[key]);
      return newUpdateState;

    case 'EDIT_NAME':
      const newEditNameState = { ...state };
      Object.keys(newEditNameState).forEach(key => {
        if (key === action.payload.target) newEditNameState[key].name = action.payload.name;
      });
      return newEditNameState;

    default:
      return state;
  }
};
export default reducer;
