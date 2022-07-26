import { Text } from 'react-native';
import React from 'react';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>WelcomeScreen</Text>
    </SafeAreaView>
  );
};
