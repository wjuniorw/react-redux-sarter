import decode from "jwt-decode";

export const isLogedIn = () => {
  const token = localStorage.getItem("App@token");
  const refreshToken = localStorage.getItem("App@refreshToken");
  try {
    decode(token);
    decode(refreshToken);
    console.log("try decode tokens...");
    return true;
  } catch (e) {
    console.log("erro decode token...", e.message);
    return false;
  }
};
