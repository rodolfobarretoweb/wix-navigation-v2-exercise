import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dfdfdf'
  },

  iconContainer: {
    marginRight: 10
  },

  labelContainer: {
    flex: 1
  },

  label: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold'
  }
});
