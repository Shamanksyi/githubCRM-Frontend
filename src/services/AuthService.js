import jwt_decode from "jwt-decode";

export default class AuthService {

  static isTokenExpired() {
    const token = localStorage.getItem("token");

    if (token === 'FAKE TOKEN') return false;

    const decodedPayload = jwt_decode(token);

    if (!!decodedPayload && decodedPayload.exp > Date.now() / 1000) {
      return false;
    }

    this.signOut();

    return true;
  }

  static signIn({ email, password }) {
    return { token: 'FAKE TOKEN' }
  }

  static saveUserToken({ token }) {
    localStorage.setItem('token', token);
  }

  static signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem('email');
  }
}