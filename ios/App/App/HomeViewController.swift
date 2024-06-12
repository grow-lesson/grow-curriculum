import UIKit

class HomeViewController: UIViewController {

  override func viewDidLoad() {
    super.viewDidLoad()

    if let token = UserDefaults.standard.string(forKey: "authToken") {
      // Use the token for authenticated requests
      print("Token: \(token)")
    } else {
      // No token found, user needs to log in
      performSegue(withIdentifier: "HomeToLogin", sender: self)
    }
  }
}
