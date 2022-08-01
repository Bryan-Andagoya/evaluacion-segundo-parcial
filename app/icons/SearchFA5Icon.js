import Icon from '@expo/vector-icons/FontAwesome5';
import React from 'react';

export const SearchFA5Icon = ({ size, color, solid }) => {
  return (
    <Icon name="search" size={size} color={color} solid={solid === undefined ? true : solid} />
  );
};
