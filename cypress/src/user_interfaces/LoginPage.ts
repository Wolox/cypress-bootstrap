export default class LoginPage {
  static usernameInput = (): string => {
    return "#loginusername";
  };
  static passwordInput = (): string => {
    return "#loginpassword";
  };
  static loginButtonMenu = (): string => {
    return "#login2";
  };
  static loginButton = (): string => {
    return "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary";
  };
}
