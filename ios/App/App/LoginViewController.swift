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

    let apiUrl = "https://grow-curriculum-backend-f10ce9239245.herokuapp.com/login"

    AF.request(apiUrl, method: .post, parameters: parameters, encoding: JSONEncoding.default).validate().responseJSON { response in
      debugPrint("Request: \(String(describing: response.request))")
      debugPrint("Response: \(String(describing: response.response))")
      debugPrint("Result: \(response.result)")

      switch response.result {
      case .success(let value):
        debugPrint("Response JSON: \(value)")
        if let json = value as? [String: Any], let token = json["token"] as? String {
          UserDefaults.standard.set(token, forKey: "authToken")
          self.performSegue(withIdentifier: "LoginToHome", sender: self)
        } else {
          self.errorLabel.text = "Login failed. Please check your credentials."
        }
      case .failure(let error):
        self.errorLabel.text = "Error: \(error.localizedDescription)"
        debugPrint("Request failed with error: \(error)")
        if let data = response.data, let responseString = String(data: data, encoding: .utf8) {
          debugPrint("Response data: \(responseString)")
        } else {
          debugPrint("No response data received")
        }
      }
    }
  }
}
