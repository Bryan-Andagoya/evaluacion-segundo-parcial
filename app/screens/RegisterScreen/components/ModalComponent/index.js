/* eslint-disable import/namespace */
import { SeparatorComponent } from 'app/components';
import { SearchFA5Icon, TimesFA5Icon } from 'app/icons';
import { colors } from 'app/styles';
import countryCodes from 'assets/json/country-codes.json';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import Modal from 'react-native-modal';

import { styles } from './style';

export const ModalComponent = ({ isModalVisible, toggleModal, setFieldValue }) => {
  const mainContainerRef = useRef();
  const [countryPhoneCodes, setCountryPhoneCodes] = useState(countryCodes);
  const [searchText, setSearchText] = useState('');

  const closeModal = () => {
    setSearchText('');
    toggleModal();
  };

  const renderItem = ({ item: { name, dial_code, code } }) => (
    <TouchableOpacity
      onPress={() => {
        setFieldValue('countryCode', `${code} ${dial_code}`);
        closeModal();
      }}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          {name} {`(${dial_code})`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  useLayoutEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      mainContainerRef.current?.setNativeProps({
        style: { height: '90%', minHeight: '90%', width: '95%', minWidth: '95%' },
      });
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      mainContainerRef.current?.setNativeProps({
        style: { height: '65%', minHeight: '65%', width: '95%', minWidth: '95%' },
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    let filteredCountryPhoneCodes = countryCodes;

    if (searchText) {
      const regex = new RegExp(`^${searchText}`, 'ig');

      filteredCountryPhoneCodes = countryCodes.filter(
        ({ name, dial_code }) => name.search(regex) !== -1 || dial_code.search(regex) !== -1
      );
    }

    setCountryPhoneCodes(filteredCountryPhoneCodes);
  }, [searchText]);

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="zoomIn"
      animationOut="zoomOut"
      animationOutTiming={50}
      avoidKeyboard
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropTransitionOutTiming={50}
      style={styles.modal}>
      <View style={styles.mainContainer} ref={mainContainerRef}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>SELECCIONA TU PAÍS</Text>
        </View>
        <View>
          <SeparatorComponent />
        </View>
        <View style={styles.searchBarContainer}>
          <View>
            <SearchFA5Icon size={25} color={colors.DARK_GRAY} />
          </View>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Nombre o código del país"
              placeholderTextColor={colors.DARK_GRAY}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          {searchText ? (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <TimesFA5Icon size={25} color={colors.DARK_GRAY} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.separatorContainer}>
          <SeparatorComponent width="95%" />
        </View>
        <FlatList
          data={countryPhoneCodes}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
          ItemSeparatorComponent={() => (
            <View style={styles.separatorContainer}>
              <SeparatorComponent width="95%" />
            </View>
          )}
          keyboardShouldPersistTaps="always"
        />
      </View>
    </Modal>
  );
};
