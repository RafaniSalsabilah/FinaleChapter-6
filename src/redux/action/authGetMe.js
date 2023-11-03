import { reduxGetMe } from "../../services/auth/get_me_user";
import { setUser } from "../reducers/auth/authLogin";

export const fetchGetMe = () => async (dispatch) => {
  reduxGetMe().then((result) => {
    dispatch(setUser(result.data.data))
  }).catch((err) => {
    
  });
};
