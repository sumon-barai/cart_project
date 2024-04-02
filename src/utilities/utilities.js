class Utilities {
  isLoggedIn() {
    const token = localStorage.getItem("token");
    if (!token) return false;
    return true;
  }
  logout() {
    const token = localStorage.removeItem("token");
    if (!token) return false;
    return true;
  }

  setLocalStorage(propertyName, value) {
    const data = JSON.stringify(value);
    return localStorage.setItem(propertyName, data);
  }
  getLocalStorage(propertyName) {
    const result = localStorage.getItem(propertyName);
    return JSON.parse(result);
  }
  removeLocalStorage(propertyName) {
    const result = localStorage.removeItem(propertyName);
    if (!result) return false;
    return true;
  }

  Unauthorized() {
    this.removeLocalStorage("token");
    window.location.href = "/login";
  }
}
const utils = new Utilities();

export default utils;
