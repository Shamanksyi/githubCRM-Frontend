import jwt_decode from "jwt-decode";

export default class AuthService {

  static isTokenExpired() {
    const token = localStorage.getItem("token");
    const decodedPayload = jwt_decode(token);

    if (!!decodedPayload && decodedPayload.exp > Date.now() / 1000) {
      return false;
    }

    this.signOut();

    return true;
  }

  static signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem('email');
  }
}