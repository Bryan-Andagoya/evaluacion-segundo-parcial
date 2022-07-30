import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { colors } from 'app/styles';
import { UserEiIcon } from 'app/icons';

export const RegisterScreen = () => {
  const [activeTab, setActiveTab] = useState('phone');

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
    </SafeAreaView>
  );
};
