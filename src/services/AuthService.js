import api from './api';
import jwt_decode from "jwt-decode";

export default class AuthService {
  static isAuth() {
    const token = localStorage.getItem("token");

    if (token) return true;

    return false;
  }

  static isTokenExpired() {
    const token = localStorage.getItem("token");
    const decodedPayload = jwt_decode(token);

    if (!!decodedPayload && decodedPayload.exp > Date.now() / 1000) {
      return false;
    }

    this.signOut();

    return true;
  }

  static signIn({ email, password }) {
    return api.post("/user/login", {
      email,
      password
    });
  }

  static signUp({ email, password }) {
    return api.post("/user/register", {
      email,
      password
    });
  }

  static saveUserToken({ token }) {
    localStorage.setItem('token', token);
  }

  static signOut() {
    localStorage.removeItem('token');
  }
}