# react-native-add-to-wallet

Simple RN bridge for add to wallet button and open wallet method.
Does not pass senstive information to the wallet, but rather opens the wallet for manual card entry.

## Installation

```sh
npm install react-native-add-to-wallet
```

## Usage

```js
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { AddToWalletButton, openWallet } from 'react-native-add-to-wallet';

export default function App() {
  
  return (
    <View style={styles.container}>
      {
        // ios only
        Platform.OS === 'ios' && (
          <AddToWalletButton onPress={openWallet} />
        )
      } 
    </View>
  );
}

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
