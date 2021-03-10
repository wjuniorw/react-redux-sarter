import Api from "./axios";

const AuthModule = {
  login: user => Api.post("/login", user),
  signup: () => null,
  getToken: () => null,
  refreshToken: () => null
};

export default AuthModule;
