import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func loginButtonTapped(_ sender: UIButton) {
        guard let email = emailTextField.text, !email.isEmpty else {
            showAlert(message: "メールアドレスを入力してください")
            return
        }
        guard let password = passwordTextField.text, !password.isEmpty else {
            showAlert(message: "パスワードを入力してください")
            return
        }

        let appDelegate = UIApplication.shared.delegate as! AppDelegate
        appDelegate.login(email: email, password: password) { result in
            switch result {
            case .success:
                DispatchQueue.main.async {
                    self.navigateToMenuPage()
                }
            case .failure(let error):
                DispatchQueue.main.async {
                    self.showAlert(message: error.localizedDescription)
                }
            }
        }
    }

    private func navigateToMenuPage() {
        // メニューページに遷移するコードを記述
        // 例えば、ストーリーボードを使用している場合：
        // let storyboard = UIStoryboard(name: "Main", bundle: nil)
        // let menuPage = storyboard.instantiateViewController(identifier: "MenuPageViewController")
        // self.present(menuPage, animated: true, completion: nil)
    }

    private func showAlert(message: String) {
        let alert = UIAlertController(title: "エラー", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
        self.present(alert, animated: true, completion: nil)
    }
}
