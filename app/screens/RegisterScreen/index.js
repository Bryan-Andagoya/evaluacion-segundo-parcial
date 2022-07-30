/* eslint-disable import/namespace */
import { UserEiIcon } from 'app/icons';
import { colors } from 'app/styles';
import countryCodes from 'assets/json/country-codes.json';
import React, { useState } from 'react';
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';

export const RegisterScreen = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [phoneCode, setPhoneCode] = useState('EC +593');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.userIconContainer}>
        <UserEiIcon size={225} color={colors.TEXT_PRIMARY} />
      </View>
      <View style={styles.tabsContainer}>
        <TouchableWithoutFeedback onPress={() => setActiveTab('phone')}>
          <View style={[styles.tab, { borderBottomWidth: activeTab === 'phone' ? 1 : 0.5 }]}>
            <Text>TELÉFONO</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setActiveTab('email')}>
          <View style={[styles.tab, { borderBottomWidth: activeTab === 'email' ? 1 : 0.2 }]}>
            <Text>CORREO ELECTRÓNICO</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.phoneInputContainer}>
        <View style={styles.input}>
          <TouchableWithoutFeedback onPress={() => console.log('code')}>
            <View style={styles.phoneCodeContainer}>
              <Text style={styles.phoneCodeText}>{phoneCode}</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.phoneNumberContainer}>
            <TextInput placeholder="Teléfono" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
