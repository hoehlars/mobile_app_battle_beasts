import {User} from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageService {
  public static async readUser(): Promise<User | null> {
    try {
      const userJson = await AsyncStorage.getItem('@user');
      const user = userJson != null ? JSON.parse(userJson) : null;
      return user;
    } catch (e) {
      return null;
    }
  }

  public static async storeUser(user: User): Promise<boolean> {
    try {
      const jsonUser = JSON.stringify(user);
      await AsyncStorage.setItem('@user', jsonUser);
      return true;
    } catch (error) {
      return false;
    }
  }

  public static async deleteUser(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem('@user');
      return true;
    } catch (error) {
      return false;
    }
  }
}
