import { Password } from "@mui/icons-material";
import { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleAuth = () => {
    setAuth(!auth);
  };

  const handleLogin = () => {
    setAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{ auth, toggleAuth, handleLogin, setCurrentUser, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
