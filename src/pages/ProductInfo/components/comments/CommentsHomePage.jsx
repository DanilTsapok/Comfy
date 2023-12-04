// import React, { useContext, useState } from "react";
// import Header from "../../../../components/firstHeader/Header";
// import Secondheader from "../../../../components/secondHeader/secondHeader";
// import { useLocation, useParams } from "react-router-dom";
// import Nav from "../../../../components/nav/Nav";

// import Footer from "../../../../components/Footer/Footer";

// import MakeComments from "../../../../modal/makecommentsmodal/MakeComments";
// import CommnetsBody from "./components/comments-body/CommnetsBody";
// import ProductProvider, { ProductContext } from "../../../../data/products";

// export default function CommentsHomePage() {
//   const { products } = useContext(ProductContext);

//   const { id } = useParams();
//   const selectProduct = products.find((product) => product.id == id);

//   const [MakeCommentsActive, setMakeCommentsActive] = useState(false);
//   const [comments, setComments] = useState([]);
//   const location = useLocation();

//   return (
//     <>
//       <ProductProvider>
//         <Header />
//         <Secondheader />

//         <Nav product={selectProduct} />
//         <CommnetsBody
//           selectProduct={selectProduct}
//           setCommentsActive={setMakeCommentsActive}
//           comments={comments}
//           setComments={setComments}
//         />

//         <Footer />
//         <MakeComments
//           makecommentsActive={MakeCommentsActive}
//           setCommentsActive={setMakeCommentsActive}
//           comments={comments}
//           setComments={setComments}
//         />
//       </ProductProvider>
//     </>
//   );
// }
