import React from 'react';
import { UserProvider } from '../UserProvider';

export const RootProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
