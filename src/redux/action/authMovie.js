// import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { getMovieSuccess } from "../reducers/movie/authMovie";
// import https3 from "../../utils/https3";
import { fetchReduxMoviesPopular } from "../../services/get-data-movies-popular";

export const fetchMovies = () => async (dispatch) => {
  fetchReduxMoviesPopular().then((result) => {
    dispatch(getMovieSuccess(result.data.data));
  }).catch((err) => {
    
  });
};
