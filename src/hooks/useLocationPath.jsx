import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useLocationPath() {
  const location = useLocation();
  const [path, setPath] = useState([
    { pathname: location.pathname, timestamp: new Date().toLocaleTimeString() },
  ]);

  useEffect(() => {
    setPath((prev) => [
      ...prev,
      {
        pathname: location.pathname,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, [location]);

  return path;
}
