import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/basUrl";
import { useAuth } from "@arcana/auth-react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || null
  );
  let initialUserData = localStorage.getItem("userData");
  if (initialUserData === "[object Object]") {
    initialUserData = JSON.stringify(initialUserData);
  }

  const [userData, setUserData] = useState(
    JSON.parse(initialUserData || "null")
  );

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken || "");
    localStorage.setItem("user", user || "");
    localStorage.setItem("userRole", userRole || "");
    localStorage.setItem("userData", JSON.stringify(userData || ""));
  }, [accessToken, user, userRole, userData]);

  const login = async (email, password) => {
    setAccessToken(null);
    setUser(null);
    setUserRole(null);
    setUserData(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userData");
    try {
      const response = await axios.post(BASE_URL+"/users/login/", {
        email: email,
        password: password,
      });
      console.log(response);
      setAccessToken(response?.data?.access);
      setUserData(response?.data?.user);
      setUser(response.data.user.first_name);
      setUserRole(response.data?.user?.role);
      // setUserData(response.data);
    } catch (error) {
      console.error("Failed to login", error);
      setError("Incorrect Username or Password");
    }
  };

  console.log(userData);
  console.log(userRole);
  console.log(user);
  console.log(accessToken);

  const {logout, isLoggedIn} = useAuth();

  const logOut = () => {
    setAccessToken(null);
    setUser(null);
    setUserRole(null);
    setUserData(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userData");
    logout();
  };

  const lastDate = new Date(userData?.last_date);
  const isAccountActive = userData?.is_active;
  const currentDate = new Date();

  if (lastDate < currentDate || isAccountActive === false) {
    logOut();
    setError(
      "Your account has expired or deactivated. Please contact your administrator."
    );
  }

  const session = 180 * 60 * 1000;

  useEffect(() => {
    setTimeout(() => {
      logOut();
      setError("Your session has expired. Please log in again.");
    }, session);
  }, [userData, logout, setError]);

  return (
    <AuthContext.Provider
      value={{ accessToken, user, userRole, login, logOut, userData, error }}
    >
      {/* {loading && <Loader />} */}
      {children}
    </AuthContext.Provider>
  );
}
