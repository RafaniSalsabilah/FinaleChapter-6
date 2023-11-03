import { reduxLoginUser } from "../../services/auth/post_login_user";
// import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
// import https3 from "../../utils/https3";
import { setToken } from "../reducers/auth/authLogin";

export const LoginUser = (input) => (dispatch) => {

    return reduxLoginUser(input).then((result) => {
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
        dispatch(setToken(result.data.data.token));
        return true
    }).catch((err) => {
        
    });

    // https3.post(API_ENDPOINTS.LOGIN_USER, input).then((result) => {
    //     CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
    //     dispatch(setToken(result.data.data.token))
    //     dispatch(setIsLoggedIn(true))
    // }).catch((err) => {
        
    // });
}

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken)
}

