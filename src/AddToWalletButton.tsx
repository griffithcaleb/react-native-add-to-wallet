import React from 'react';
import {
    Platform,
  requireNativeComponent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

interface AddToWalletButtonProps extends ViewProps {
  onPress?: () => void;
}

const AddToWalletButton = React.memo(
  (props: AddToWalletButtonProps) => {
    const { onPress, ...passProps } = props;
    if (Platform.OS === 'android') {
        return <> </>
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <RCTAddToWalletButton
            style={styles.afterpayPaymentButton}
            {...passProps}
          />
        </TouchableOpacity>
      </View>
    );
  }
);

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

const RCTAddToWalletButton = requireNativeComponent<
  AddToWalletButtonProps
>('AddToWalletButton');

export default AddToWalletButton;