import React from 'react';
import { Platform, requireNativeComponent, StyleSheet, TouchableOpacity, View, } from 'react-native';
const AddToWalletButton = React.memo((props) => {
    const { onPress, ...passProps } = props;
    if (Platform.OS === 'android') {
        return React.createElement(React.Fragment, null, " ");
    }
    return (React.createElement(View, { style: styles.container },
        React.createElement(TouchableOpacity, { onPress: onPress },
            React.createElement(RCTAddToWalletButton, { style: styles.afterpayPaymentButton, ...passProps }))));
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    afterpayPaymentButton: {
        height: 45,
        width: 300,
    },
});
const RCTAddToWalletButton = requireNativeComponent('AddToWalletButton');
export default AddToWalletButton;
