import { NativeModules, Platform } from 'react-native';
import AddToWalletButton from './AddToWalletButton';
const LINKING_ERROR = `The package 'react-native-add-to-wallet' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo managed workflow\n';
const AddToWallet = NativeModules.AddToWallet
    ? NativeModules.AddToWallet
    : new Proxy({}, {
        get() {
            throw new Error(LINKING_ERROR);
        },
    });
export function openWallet() {
    return AddToWallet.openWallet();
}
export { AddToWalletButton };
