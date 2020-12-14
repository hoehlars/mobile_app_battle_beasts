import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { endConnection } from 'react-native-iap';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');


// source: https://reactnavigation.org/docs/testing/

require('jest-fetch-mock').enableMocks();

// https://github.com/facebook/jest/issues/6434 for no errors
jest.useFakeTimers();


// async storage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// react native oriention locker
jest.mock('react-native-orientation-locker', () => {
	return {
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		lockToPortrait: jest.fn(),
		lockToLandscapeLeft: jest.fn(),
		lockToLandscapeRight: jest.fn(),
		unlockAllOrientations: jest.fn(),
		lockToLandscape: jest.fn()
	};
});

// react native in app purchase 
jest.mock('react-native-iap', () => {
	return {
		initConnection: jest.fn(),
		endConnection: jest.fn(),
		requestPurchase: jest.fn(),
		getProducts: jest.fn(),
		purchaseErrorListener: jest.fn()
	};
});

// mock console
global.console = {
	log: jest.fn(), // console.log are ignored in tests
  };

