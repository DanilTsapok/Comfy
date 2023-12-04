// import React, { useEffect, useState } from "react";
// import "./comment-style.scss";
// import { Box, Rating } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// function Comment({ comment, selectProduct }) {
//   const [currentDate, setCurrentDate] = useState("");

//   useEffect(() => {
//     const getCurrentDate = () => {
//       const today = new Date();
//       const day = today.getDate();
//       const month = today.getMonth() + 1;
//       const year = today.getFullYear();
//       const months = [
//         "Січень",
//         "Лютий",
//         "Березень",
//         "Квітень",
//         "Травень",
//         "Червень",
//         "Липень",
//         "Серпень",
//         "Вересень",
//         "Жовтень",
//         "Листопад",
//         "Грудень",
//       ];
//       const monthName = months[month];
//       const formatedDate = `${day} ${monthName} ${year}`;
//       setCurrentDate(formatedDate);
//     };
//     getCurrentDate();
//   }, []);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <div className="comment-main">
//         <div className="item-content">
//           <div className="name-product">
//             <p>Відгук про модель: {selectProduct.name}</p>
//           </div>
//           <div className="item-content-text">
//             <div className="item__header">
//               <p className="customer">{comment.name}</p>
//               <div>
//                 <div className="comment-date">{currentDate}</div>
//                 <div className="rating">
//                   <Box
//                     sx={{
//                       width: 130,
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Rating
//                       name="text-feedback"
//                       value={comment.rating}
//                       readOnly
//                       precision={0.5}
//                       emptyIcon={
//                         <StarIcon
//                           style={{ opacity: 0.55 }}
//                           fontSize="inherit"
//                         />
//                       }
//                     />
//                   </Box>
//                 </div>
//               </div>
//             </div>
//             <div className="item__body">
//               <div className="comment-text">
//                 <p>{comment.text}</p>
//               </div>
//               <div className="comment-advantage-disadvantage">
//                 <div>
//                   <p className="title">Переваги</p>
//                   <p>{comment.advantages}</p>
//                 </div>
//                 <div>
//                   <p className="title">Недоліки</p>
//                   <p>{comment.disadvantages}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Comment;
