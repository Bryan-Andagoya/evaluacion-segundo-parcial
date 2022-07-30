import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FacebookFA5Icon } from 'app/icons';
import { SeparatorComponent } from 'app/components';
import * as Facebook from 'expo-facebook';
import { useUserContext } from 'app/context';
import { FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from 'app/config';

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
    } catch (error) {
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
      <View style={styles.logInContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logInText}>
            ¿Ya tienes una cuenta? <Text style={styles.boldText}>Inicia sesión</Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
