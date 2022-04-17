import swapi from "../apis/swapi";

export const fetchMovies = () => {
  return async function (dispatch) {
    const response = await swapi.get("/films");
    dispatch({ type: "FETCH_MOVIES", payload: response.data });
  };
};
