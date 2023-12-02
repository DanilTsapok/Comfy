import React from "react";
import { useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  return (
    <>
      <div className="path">
        <div className="nav-path">
          Головна{pathSegments.length > 0 && " > " + pathSegments.join(" > ")}
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
