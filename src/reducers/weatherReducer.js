import { GET_WEATHER } from "../actions/types";

export default (state = { isLoaded: false }, { type, payload }) => {
  switch (type) {
    case GET_WEATHER:
      return { ...state, isLoaded: true, ...payload };

    default:
      return state;
  }
};
