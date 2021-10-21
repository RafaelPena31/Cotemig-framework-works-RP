export const SET_DIGIMONS = "SET_DIGIMONS";

const digimonsState = {
  digimons: [],
};

export const DigimonsReducer = (state = digimonsState, action) => {
  switch (action.type) {
    case SET_DIGIMONS:
      return {
        ...state,
        digimons: action.payload,
      };

    default:
      return state;
  }
};

export const SetDigimons = (payload) => ({
  type: SET_DIGIMONS,
  payload: payload,
});
