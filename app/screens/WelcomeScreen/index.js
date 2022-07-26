import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FacebookFA5Icon } from 'app/icons';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Instagram</Text>
      </View>
      <View style={styles.logInWithFacebookButtonContainer}>
        <TouchableOpacity style={styles.logInWithFacebookButton}>
          <FacebookFA5Icon size={18} solid={false} color="white" />
          <Text style={styles.logInWithFacebookText}>Iniciar sesión con Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orTextContainer}>
        <View style={styles.orTextSeparator} />
        <Text style={styles.orText}>o</Text>
        <View style={styles.orTextSeparator} />
      </View>
      <View style={styles.registerButtonContainer}>
        <TouchableOpacity>
          <Text style={styles.registerButtonText}>
            Registrate con tu correo electrónico o número de teléfono
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
