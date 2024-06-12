import UIKit
import Alamofire
import Capacitor

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        return true
    }

    func login(email: String, password: String, completion: @escaping (Result<Void, Error>) -> Void) {
        let loginData: [String: Any] = [
            "email": email,
            "password": password
        ]

        let url = "https://grow-curriculum-backend-f10ce9239245.herokuapp.com/auth/sign_in"

        AF.request(url, method: .post, parameters: loginData, encoding: JSONEncoding.default).responseJSON { response in
            switch response.result {
            case .success(let value):
                if let json = value as? [String: Any], let status = json["status"] as? String, status == "success" {
                    if let headers = response.response?.allHeaderFields as? [String: String] {
                        self.setCookies(headers: headers)
                    }
                    completion(.success(()))
                } else {
                    completion(.failure(NSError(domain: "", code: -1, userInfo: [NSLocalizedDescriptionKey: "ログインエラーが発生しました"])))
                }
            case .failure(let error):
                completion(.failure(error))
            }
        }
    }

    private func setCookies(headers: [String: String]) {
        if let accessToken = headers["access-token"],
           let client = headers["client"],
           let uid = headers["uid"] {
            UserDefaults.standard.set(accessToken, forKey: "access-token")
            UserDefaults.standard.set(client, forKey: "client")
            UserDefaults.standard.set(uid, forKey: "uid")
        }
    }
}
