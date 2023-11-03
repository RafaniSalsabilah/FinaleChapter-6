import { combineReducers } from "redux";
import authLogin from "./auth/authLogin";
import authMovie from "./movie/authMovie";
import authDetail from "./details/authDetail";
import authSearch from "./search/authSearch";

export default combineReducers({
    auth: authLogin,
    movie: authMovie,
    detail: authDetail,
    search: authSearch
})
