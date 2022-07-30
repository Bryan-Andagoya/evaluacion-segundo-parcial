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
});
