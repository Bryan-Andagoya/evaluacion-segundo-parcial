import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, RegisterScreen, WelcomeScreen } from 'app/screens';
import { UserContext } from 'app/context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => {
  const { user, initializing } = useContext(UserContext);

  if (initializing) {
    return (
      <SafeAreaView>
        <ActivityIndicator color={'gold'} size="large" />
      </SafeAreaView>
    );
  }

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      {user ? (
        <AuthStack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <AuthStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </AuthStack.Navigator>
  );
};
