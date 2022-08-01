/* eslint-disable import/namespace */
import { AuthFooterComponent, SeparatorComponent } from 'app/components';
import { TimesFA5Icon, UserEiIcon } from 'app/icons';
import { colors } from 'app/styles';
import { useFormik } from 'formik';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';

import { ModalComponent } from './components';
import { styles } from './style';

export const RegisterScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('phone');
  const [isModalVisible, setModalVisible] = useState(false);
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const userIconRef = useRef();

  const formik = useFormik({
    initialValues: {
      countryCode: 'EC +593',
      phoneNumber: '',
      email: '',
    },
    validationSchema: Yup.object({
      phone: Yup.string(),
      email: Yup.string().trim().email('Correo electrónico inválido'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const toggleModal = () => {
    setModalVisible((prevModalVisible) => !prevModalVisible);
  };

  useEffect(() => {
    if (activeTab === 'phone') {
      phoneInputRef.current.focus();
    } else {
      emailInputRef.current.focus();
    }
  }, [activeTab]);

  useLayoutEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      userIconRef.current?.setNativeProps({
        style: { flexGrow: 0 },
      });
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      userIconRef.current?.setNativeProps({
        style: { flexGrow: 1 / 5 },
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.userIconContainer} ref={userIconRef}>
        <UserEiIcon size={225} color={colors.TEXT_PRIMARY} />
      </View>
      <ScrollView style={styles.formContainer} keyboardShouldPersistTaps="always">
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
          <View
            style={[
              styles.input,
              {
                borderColor:
                  (activeTab === 'email' && formik.errors.email && formik.touched.email) ||
                  (activeTab === 'phone' && formik.errors.phoneNumber && formik.touched.phoneNumber)
                    ? colors.ERROR_MAIN
                    : colors.MEDIUM_GRAY,
              },
            ]}>
            {activeTab === 'phone' ? (
              <>
                <TouchableWithoutFeedback onPress={toggleModal}>
                  <View style={styles.phoneCodeContainer}>
                    <Text style={styles.phoneCodeText}>{formik.values.countryCode}</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.phoneNumberContainer}>
                  <TextInput
                    placeholder="Teléfono"
                    style={styles.phoneInput}
                    placeholderTextColor={colors.DARK_GRAY}
                    keyboardType="numeric"
                    ref={phoneInputRef}
                    value={formik.values.phoneNumber}
                    onChangeText={formik.handleChange('phoneNumber')}
                    autoCapitalize="none"
                    autoComplete="tel-device"
                    textContentType="telephoneNumber"
                    onBlur={formik.handleBlur('phoneNumber')}
                  />
                  {formik.values.phoneNumber ? (
                    <TouchableOpacity onPress={() => formik.setFieldValue('phoneNumber', '')}>
                      <TimesFA5Icon size={25} color={colors.DARK_GRAY} />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </>
            ) : (
              <>
                <TextInput
                  ref={emailInputRef}
                  value={formik.values.email}
                  onChangeText={formik.handleChange('email')}
                  placeholderTextColor={colors.DARK_GRAY}
                  placeholder="Correo electrónico"
                  style={styles.emailInput}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoComplete="email"
                  textContentType="emailAddress"
                  onBlur={formik.handleBlur('email')}
                />
                {formik.values.email ? (
                  <View style={styles.xmarkContainer}>
                    <TouchableOpacity onPress={() => formik.setFieldValue('email', '')}>
                      <TimesFA5Icon size={25} color={colors.DARK_GRAY} />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </>
            )}
          </View>
        </View>
        {(activeTab === 'email' && formik.errors.email && formik.touched.email) ||
        (activeTab === 'phone' && formik.errors.phoneNumber && formik.touched.phoneNumber) ? (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>
              {formik.errors.email || formik.errors.phoneNumber}
            </Text>
          </View>
        ) : null}
        {activeTab === 'phone' && (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              Es posible que te enviemos notificaciones por SMS con fines de seguridad e inicio de
              sesión
            </Text>
          </View>
        )}
        <View style={styles.buttonContainer}>
          {activeTab === 'phone' ? (
            <TouchableOpacity
              style={[[styles.button, { opacity: formik.values.phoneNumber ? 1 : 0.4 }]]}
              disabled={!formik.values.phoneNumber}
              onPress={formik.handleSubmit}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[[styles.button, { opacity: formik.values.email ? 1 : 0.4 }]]}
              disabled={!formik.values.email}
              onPress={formik.handleSubmit}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <SeparatorComponent />
      <AuthFooterComponent
        navigation={navigation}
        text="¿Ya tienes una cuenta?"
        boldText="Inicia sesión"
        screen="Login"
      />
      <ModalComponent
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        setFieldValue={formik.setFieldValue}
      />
    </SafeAreaView>
  );
};
