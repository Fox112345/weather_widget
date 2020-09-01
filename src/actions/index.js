import { weather } from "../apis/weather";
import { GET_WEATHER } from "./types";

export const getWeather = () => async (dispatch) => {
  const res = await weather.get(
    "weather?q=Vladimir&units=metric&appid=acc35fc2688f65c89eb63a160c47c1f2"
  );

  dispatch({
    type: GET_WEATHER,
    payload: res.data,
  });
};
