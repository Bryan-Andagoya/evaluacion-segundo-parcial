/* eslint-disable import/namespace */
import { AuthFooterComponent, SeparatorComponent } from 'app/components';
import { auth } from 'app/config';
import { useUserContext } from 'app/context';
import { FacebookFA5Icon } from 'app/icons';
import * as Facebook from 'expo-facebook';
import { FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import React from 'react';
import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';

// appId: '1362106654281999'
// Faceboook key hash: ymhKdE2D2AJkwqAqv1vLb3n5POM=

export const WelcomeScreen = ({ navigation }) => {
  const { setLoading, loading } = useUserContext();

  const handleLogInWithFacebookButtonPress = async () => {
    try {
      setLoading(true);

      await Facebook.initializeAsync({
        appId: '1362106654281999',
      });

      const loginResult = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });

      if (loginResult.type === 'success') {
        const credential = FacebookAuthProvider.credential(loginResult.token);

        await signInWithCredential(auth, credential);
      }
    } catch {
      Alert.alert('¡Algo salió mal!', 'Error al iniciar sesión con Facebook');
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Instagram</Text>
      </View>
      <View style={styles.logInWithFacebookButtonContainer}>
        <TouchableOpacity
          style={styles.logInWithFacebookButton}
          onPress={handleLogInWithFacebookButtonPress}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <>
              <FacebookFA5Icon size={18} solid={false} color="white" />
              <Text style={styles.logInWithFacebookText}>Iniciar sesión con Facebook</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.orTextContainer}>
        <View style={styles.orTextSeparator} />
        <Text style={styles.orText}>o</Text>
        <View style={styles.orTextSeparator} />
      </View>
      <View style={styles.registerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerButtonText}>
            Registrate con tu correo electrónico o número de teléfono
          </Text>
        </TouchableOpacity>
      </View>
      <SeparatorComponent />
      <AuthFooterComponent
        navigation={navigation}
        text="¿Ya tienes una cuenta?"
        boldText="Inicia sesión"
        screen="Login"
      />
    </SafeAreaView>
  );
};
