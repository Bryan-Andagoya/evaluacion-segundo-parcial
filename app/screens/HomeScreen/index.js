import { Button, Text, View } from 'react-native';
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from 'app/config';

export const HomeScreen = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Log out" onPress={logOut} />
    </View>
  );
};
