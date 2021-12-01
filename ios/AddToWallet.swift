import PassKit
@objc(AddToWallet)
class AddToWallet: NSObject {

    @objc(openWallet)
    func openWallet() -> Void {
        let library = PKPassLibrary()
        if #available(iOS 8.3, *) {
            library.openPaymentSetup()
        } else {
            // Fallback on earlier versions
        }
    }
    
    
    @objc(addToWalletButtonView)
    class addToWalletButtonView: UIView {
        
        var paymentButtonView: PKAddPassButton!
        
        override init(frame: CGRect) {
            super.init(frame: frame)
            
            paymentButtonView = PKAddPassButton.init()
            self.addSubview(paymentButtonView)
        }
        
        required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
        
        
        override func layoutSubviews() {
           super.layoutSubviews()
           paymentButtonView.frame = self.bounds
        }
        
    }
    
    
    @objc(AddToWalletButton)
    class AddToWalletButton: RCTViewManager {

        override func view() -> UIView! {
            return addToWalletButtonView()
        }

        override static func requiresMainQueueSetup() -> Bool {
          return true
        }
    }
}
