import { colors } from 'app/styles';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  userIconContainer: {
    backgroundColor: 'silver',
    alignItems: 'center',
  },
  tabsContainer: {
    backgroundColor: 'thistle',
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  tab: {
    padding: 10,
    borderColor: colors.TEXT_PRIMARY,
    flex: 1,
    alignItems: 'center',
  },
  phoneInputContainer: {
    backgroundColor: 'tan',
    paddingHorizontal: 25,
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
    paddingHorizontal: 13,
  },
});
