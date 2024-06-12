import UIKit
import Alamofire

class LoginViewController: UIViewController {

  @IBOutlet weak var emailTextField: UITextField!
  @IBOutlet weak var passwordTextField: UITextField!
  @IBOutlet weak var errorLabel: UILabel!

  override func viewDidLoad() {
    super.viewDidLoad()
    errorLabel.text = ""
  }

  @IBAction func loginButtonTapped(_ sender: UIButton) {
    guard let email = emailTextField.text, !email.isEmpty,
          let password = passwordTextField.text, !password.isEmpty else {
      errorLabel.text = "Please enter both email and password."
      return
    }

    let parameters: [String: String] = [
      "email": email,
      "password": password
    ]

    AF.request("https://grow-curriculum-backend-f10ce9239245.herokuapp.com/login", method: .post, parameters: parameters, encoding: JSONEncoding.default).responseJSON { response in
      switch response.result {
      case .success(let value):
        if let json = value as? [String: Any], let token = json["token"] as? String {
          UserDefaults.standard.set(token, forKey: "authToken")
          self.performSegue(withIdentifier: "LoginToHome", sender: self)
        } else {
          self.errorLabel.text = "Login failed. Please check your credentials."
        }
      case .failure(let error):
        self.errorLabel.text = "Error: \(error.localizedDescription)"
      }
    }
  }
}
