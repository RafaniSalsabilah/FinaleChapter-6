import { fetchReduxMoviesDetail } from "../../services/get-data-movies-detail";
import { setMovieDetail } from "../reducers/details/authDetail";

export const fetchDetails = () => async (dispatch) => {
  fetchReduxMoviesDetail().then((result) => {
    dispatch(setMovieDetail(result.data.data));
  }).catch((err) => {
    
  });
};
