import Api from "./axios";

const login = user => {
  console.log("<===== login service ====>", user);
  localStorage.setItem("App@User", JSON.stringify(user));
  localStorage.setItem(
    "App@token",
    "eyJhbGciOiJub25lIn0.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjE1NzcwOTc5LCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSIsImV4cCI6MTYxNTc3ODE3OX0"
  );
  const token =
    "eyJhbGciOiJub25lIn0.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjE1NzcwOTc5LCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSIsImV4cCI6MTYxNTc3ODE3OX0";
  const refreshToken =
    "eyJhbGciOiJub25lIn0.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjE1NzcwOTc5LCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSIsImV4cCI6MTYxNTc3ODE3OX0";
  return { user, token, refreshToken };
};

const AuthModule = {
  // login: user => Api.post("/login", user),
  login,
  signup: () => null,
  getToken: () => null,
  refreshToken: () => null
};

export default AuthModule;
