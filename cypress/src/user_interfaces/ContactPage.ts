export default class ContactPage {
  static contactButton = (): string => {
    return ":nth-child(2) > .nav-link";
  };

  static emailInput = (): string => {
    return "#recipient-email";
  };

  static nameInput = (): string => {
    return "#recipient-name";
  };

  static messageInput = (): string => {
    return "#message-text";
  };

  static closeButton = (): string => {
    return "close";
  };

  static sendMessageButton = (): string => {
    return "Send message";
  };
}
