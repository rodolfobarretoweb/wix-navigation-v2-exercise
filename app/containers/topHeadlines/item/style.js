import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  contentContainer: {
    padding: 15
  },

  image: {
    height: 300
  },

  subTitleLabel: {
    fontSize: 12,
    color: '#666'
  },

  titleLabel: {
    marginTop: 5,
    fontSize: 20,
    color: '#333'
  },

  contentLabel: {
    marginTop: 10,
    fontSize: 13,
    color: '#333'
  },

  buttonsContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row'
  },

  button: {
    marginRight: 5
  },

  disableButton: {
    backgroundColor: '#dfdfdf'
  }
});
