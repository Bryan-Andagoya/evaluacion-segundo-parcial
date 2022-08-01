/* eslint-disable import/namespace */
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { styles } from './style';

export const AuthFooterComponent = ({ navigation, text, boldText, screen }) => {
  return (
    <View style={styles.logInContainer}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(screen)}>
        <Text style={styles.logInText}>
          {text} <Text style={styles.boldText}>{boldText}</Text>
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
