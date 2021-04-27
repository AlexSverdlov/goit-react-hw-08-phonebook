import axios from 'axios';
import authActions from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = credential => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const responce = axios.post('/users/signup', credential);
    dispatch(authActions.registerSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};
const login = credential => dispatch => {};
const logout = () => dispatch => {};
const getCurrentUser = () => (dispatch, getState) => {};

export default { register, login, logout, getCurrentUser };
