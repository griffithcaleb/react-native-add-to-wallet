#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(AddToWallet, NSObject)

RCT_EXTERN_METHOD(openWallet)

@end

@interface RCT_EXTERN_MODULE(AddToWalletButton, RCTViewManager)

@end
