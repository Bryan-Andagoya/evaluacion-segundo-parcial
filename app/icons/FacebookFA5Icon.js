import Icon from '@expo/vector-icons/FontAwesome5';
import React from 'react';

export const FacebookFA5Icon = ({ size, color, solid }) => {
  return (
    <Icon name="facebook" size={size} color={color} solid={solid === undefined ? true : solid} />
  );
};
