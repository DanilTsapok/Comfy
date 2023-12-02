import { Password } from "@mui/icons-material";
import { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth(!auth);
  };

  const handleLogin = () => {
    setAuth(true);
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
