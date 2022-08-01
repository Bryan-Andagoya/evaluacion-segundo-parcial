import { colors } from 'app/styles';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'bisque',
    backgroundColor: 'white',
  },
  logoContainer: {
    // backgroundColor: 'chartreuse',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoText: {
    // backgroundColor: 'cornsilk',
    fontSize: 45,
    fontFamily: 'Blue-Vinyl',
    textAlign: 'center',
  },
  logInWithFacebookButtonContainer: {
    // backgroundColor: 'tomato',
    alignItems: 'center',
    flex: 1 / 4,
    justifyContent: 'center',
  },
  logInWithFacebookButton: {
    backgroundColor: colors.BUTTON_BLUE,
    flexDirection: 'row',
    width: '90%',
    padding: 13,
    borderRadius: 8,
    justifyContent: 'center',
  },
  logInWithFacebookText: {
    color: 'white',
    marginStart: 5,
  },
  orTextContainer: {
    // backgroundColor: 'gold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  orTextSeparator: {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 8,
    borderColor: colors.MEDIUM_GRAY,
  },
  orText: {
    // backgroundColor: 'red',
    color: colors.DARK_GRAY,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  registerButtonContainer: {
    // backgroundColor: 'lightgreen',
    padding: 20,
    flex: 1 / 5,
  },
  registerButtonText: {
    color: colors.BUTTON_BLUE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
