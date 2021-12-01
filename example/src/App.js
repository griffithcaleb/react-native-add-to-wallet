import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { AddToWalletButton, openWallet } from 'react-native-add-to-wallet';
export default function App() {
    return (React.createElement(View, { style: styles.container },
        React.createElement(AddToWalletButton, { onPress: openWallet })));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
});
