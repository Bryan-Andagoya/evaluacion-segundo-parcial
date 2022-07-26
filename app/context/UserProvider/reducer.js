import { SET_INITIALIZING, SET_LOADING, SET_USER } from './actions';

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_INITIALIZING:
      return {
        ...state,
        initializing: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
