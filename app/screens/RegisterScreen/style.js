import { colors } from 'app/styles';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  userIconContainer: {
    // backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 0,
    paddingVertical: 5,
  },
  formContainer: {
    // backgroundColor: 'gold',
    paddingHorizontal: 25,
    flex: 1,
  },
  tabsContainer: {
    // backgroundColor: 'thistle',
    flexDirection: 'row',
  },
  tab: {
    padding: 10,
    borderColor: colors.TEXT_PRIMARY,
    flex: 1,
    alignItems: 'center',
  },
  phoneInputContainer: {
    // backgroundColor: 'tan',
    paddingTop: 10,
  },
  input: {
    backgroundColor: colors.LIGHT_GRAY,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    borderColor: colors.MEDIUM_GRAY,
  },
  phoneCodeContainer: {
    borderEndWidth: 1,
    borderColor: colors.MEDIUM_GRAY,
    paddingHorizontal: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneCodeText: {
    fontWeight: 'bold',
    color: colors.DARK_GRAY,
    fontSize: 15,
  },
  phoneNumberContainer: {
    // backgroundColor: 'coral',
    marginHorizontal: 13,
    flexDirection: 'row',
    flex: 1,
  },
  phoneInput: {
    fontSize: 15,
    // backgroundColor: 'blue',
    flex: 1,
    marginEnd: 13,
  },
  emailInput: {
    // backgroundColor: 'palegreen',
    paddingHorizontal: 13,
    fontSize: 15,
    flex: 1,
  },
  xmarkContainer: {
    paddingEnd: 13,
  },
  errorMessageContainer: {
    // backgroundColor: 'palegreen',
  },
  errorMessage: {
    fontSize: 12,
    color: colors.ERROR_MAIN,
  },
  messageContainer: {
    // backgroundColor: 'paleturquoise',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  messageText: {
    textAlign: 'center',
    fontSize: 12,
  },
  buttonContainer: {
    // backgroundColor: 'navajowhite',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: colors.BUTTON_BLUE,
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
});
