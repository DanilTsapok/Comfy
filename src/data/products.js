import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductState = [
  {
    id: 12411,
    name: "Смартфон Apple iPhone 14 Pro Max 128Gb Space Black",
    price: 29413,
    checked: false,
    img: "./src/assets/png/w_600.avif",
    category: "Phones",
    numOfComments: 213,
    question: 123,
    oldPrice: 123,
    rating: 2,
    details:
      "Діагональ дисплея:6,7; Роздільна здатність екрану:2796х1290; Тип екрану:Super Retina XDR",
  },
  {
    id: 12432,
    name: "Гриль-барбекю електричний Delonghi CGH1130DP",
    price: 12414,
    checked: false,
    img: "./src/assets/png/grill.avif",
    category: "",
    numOfComments: 4112,
    question: 123,
    video: 411,
    oldPrice: 123,
    rating: 4,
    details:
      "Діагональ дисплея:6,7; Роздільна здатність екрану:2796х1290; Тип екрану:Super Retina XDR",
  },
  {
    id: 42344,
    name: "Гриль-барбекю електричний Delonghi CGH1130DP",
    price: 15453,
    checked: false,
    img: "./src/assets/png/w_600.avif",
    numOfComments: 123,
    question: 123,
    video: 123,
    oldPrice: 123,
    rating: 2.4,
    details:
      "Діагональ дисплея:6,7; Роздільна здатність екрану:2796х1290; Тип екрану:Super Retina XDR",
  },
  {
    id: 413123,
    name: "Ноутбук Asus VivoBook 15 X1500EA-BQ3659 Indie Black",
    price: 14532,
    checked: false,
    img: "./src/assets/png/w_601.avif",
    numOfComments: 345,
    question: 123,
    video: 12,
    oldPrice: 123,
    rating: 2,
    details:
      "Діагональ дисплея:6,7; Роздільна здатність екрану:2796х1290; Тип екрану:Super Retina XDR",
  },
  {
    id: 134121,
    name: "Кавомашина Delonghi ECAM290.51.B",
    price: 52342,
    checked: false,
    img: "./src/assets/png/w_602.avif",
    numOfComments: 123,
    question: 123,
    video: 53,
    oldPrice: 123,
    rating: 1,
    details:
      "Діагональ дисплея:6,7; Роздільна здатність екрану:2796х1290; Тип екрану:Super Retina XDR",
  },
];
export default function ProductProvider({ children }) {
  const [products, setProducts] = useState(ProductState);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
