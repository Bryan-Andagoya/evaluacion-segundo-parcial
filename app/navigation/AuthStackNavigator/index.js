import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, RegisterScreen, WelcomeScreen } from 'app/screens';
import { useUserContext } from 'app/context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => {
  const { user, initializing } = useUserContext();
  let [fontsLoaded] = useFonts({
    'Blue-Vinyl': require('assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
    'Blue-Vinyl-Bold': require('assets/fonts/Fontspring-DEMO-blue_vinyl_bold_ps_ot.otf'),
  });

  if (initializing || !fontsLoaded) {
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
