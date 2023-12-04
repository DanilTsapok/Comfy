// import React from "react";
// import { useLocation } from "react-router-dom";
// import useLocationPath from "../../hooks/useLocationPath";

// function Breadcrumb() {
//   const location = useLocation();
//   const pathSegments = location.pathname
//     .split("/")
//     .filter((segment) => segment !== "");
//   const path = useLocationPath();
//   return (
//     <>
//       <div className="path">
//         <div className="nav-path">
//           Головна{pathSegments.length > 0 && " > " + pathSegments.join(" > ")}
//         </div>
//       </div>

//       <div>{path.map((p) => `${p} =>`)}</div>
//     </>
//   );
// }

// export default Breadcrumb;
