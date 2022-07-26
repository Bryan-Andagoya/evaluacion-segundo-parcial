import React, { useEffect, useReducer } from 'react';
import { userReducer } from './reducer';
import { SET_INITIALIZING, SET_LOADING, SET_USER } from './actions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'app/config';
import { UserContext } from './UserContext';

const initialState = {
  user: null,
  initializing: true,
  loading: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (payload) => {
    dispatch({
      type: SET_USER,
      payload,
    });
  };

  const setInitializing = (payload) => {
    dispatch({
      type: SET_INITIALIZING,
      payload,
    });
  };

  const setLoading = (payload) => {
    dispatch({
      type: SET_LOADING,
      payload,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      state.initializing && setInitializing(false);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user: state.user,
    initializing: state.initializing,
    loading: state.loading,
    setLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
