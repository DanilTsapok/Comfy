import React from "react";
import { useLocation } from "react-router-dom";
import useLocationPath from "../../hooks/useLocationPath";

function Breadcrumb() {
  const path = useLocationPath();

  return (
    <>
      <div className="path">
        <div className="nav-path">
          {path.map((p, index) => (
            <div key={index}>
              <span>{p.pathname}</span>
              {p.timestamp && (
                <span className="timestamp">{` - ${p.timestamp}`}</span>
              )}
              {index < path.length - 1 && " => "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
