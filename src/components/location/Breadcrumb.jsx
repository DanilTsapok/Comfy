import React from "react";
import { useLocation } from "react-router-dom";
import useLocationPath from "../../hooks/useLocationPath";

function Breadcrumb() {
  //   const pathSegments = location.pathname
  //     .split("/")
  //     .filter((segment) => segment !== "");
  const path = useLocationPath();
  return (
    <>
      <div className="path">
        <div className="nav-path">
          <div>{path.map((p) => `${p} =>`)}</div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
