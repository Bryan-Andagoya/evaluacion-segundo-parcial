/* eslint-disable import/namespace */
import React from 'react';
import { View } from 'react-native';

import { styles } from './style';

export const SeparatorComponent = ({ width }) => {
  return <View style={[styles.separator, { width: width === undefined ? '100%' : width }]} />;
};
