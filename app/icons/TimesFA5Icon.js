import Icon from '@expo/vector-icons/FontAwesome5';
import React from 'react';

export const TimesFA5Icon = ({ size, color, solid }) => {
  return <Icon name="times" size={size} color={color} solid={solid === undefined ? true : solid} />;
};
