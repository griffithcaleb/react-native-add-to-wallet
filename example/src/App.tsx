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
