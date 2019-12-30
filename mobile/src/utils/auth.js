import { AsyncStorage } from 'react-native';

export async function getToken() {
  const TOKEN_KEY = await AsyncStorage.getItem('token');

  return TOKEN_KEY;
}
