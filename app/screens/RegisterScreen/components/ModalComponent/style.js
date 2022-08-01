import { colors } from 'app/styles';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: 'white',
    height: '65%',
    minHeight: '65%',
    width: '95%',
    minWidth: '95%',
  },
  headerContainer: {
    // backgroundColor: 'gold',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchBarContainer: {
    // backgroundColor: 'coral',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchInputContainer: {
    // backgroundColor: 'skyblue',
    paddingHorizontal: 10,
    flex: 1,
  },
  searchInput: {
    fontSize: 18,
    color: colors.TEXT_PRIMARY,
  },
  separatorContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 17,
  },
});
