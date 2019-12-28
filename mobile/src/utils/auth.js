import { AsyncStorage } from 'react-native';

export const getToken = async () => {
  const TOKEN_KEY = await AsyncStorage.getItem('token');

  return TOKEN_KEY;
};
