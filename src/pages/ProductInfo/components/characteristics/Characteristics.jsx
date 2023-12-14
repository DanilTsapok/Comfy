import React, { useEffect } from "react";
import styles from "./characteristics-styles.module.css";
import { useParams } from "react-router-dom";
import useProducts from "../../../../store/Products/productsSlice";
function Characteristics() {
  const { products } = useProducts();
  const { category, nameCategory, id } = useParams();
  const test = products[category]?.productsCategory;
  const selectProduct = test[nameCategory].devices.find(
    (item) => item.id == id
  );
  const details = selectProduct.details;
  const parts = details.split(/;\s/);
  const resultObject = {};

  parts.forEach((part) => {
    const [key, value] = part.split(":");
    resultObject[key.trim()] = value.trim();
  });
  // console.log(resultObject);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={styles.characteristicsMain}>
        <div className={styles.characteristicsMainContent}>
          <h1 className={styles.characteristicsHeader}>
            {selectProduct.subname}
          </h1>
          <div style={{ padding: 30, display: "c" }}>
            <table className="table" style={{ width: "60%" }}>
              <thead>
                <tr>
                  <th>Характеристики</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(resultObject).map((element) => (
                  <tr>
                    <td>{element}</td>
                    <td className="value">{resultObject[element]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Characteristics;
