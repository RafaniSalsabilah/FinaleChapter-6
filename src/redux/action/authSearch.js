import { fetchReduxMoviesSearch } from "../../services/search-data-movies";
import { setSearchResults } from "../reducers/search/authSearch";

export const fetchSearch = () => async (dispatch) => {
  fetchReduxMoviesSearch().then((result) => {
    dispatch(setSearchResults(result.data.data));
  }).catch((err) => {
    
  });
};
