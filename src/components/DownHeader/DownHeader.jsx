import React, { useContext, useEffect, useState } from "react";
import "../../colors.scss";
import "./DownHeader-style.scss";
import blockchain from "../../assets/png/icons8-apps-48.png";
import arrow from "../../assets/png/icons8-expand-arrow-30.png";
import loop from "../../assets/png/icons8-search-48.png";
import heart from "../../assets/png/icons8-heart-24.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../data/AuthProvider";
// import useLocalStorage from "../../hooks/useLocalStorage";
import { firebaseAuth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
export default function DownHeader() {
  const auth = useContext(AuthContext);
  console.log(auth.currentUser);

  // const [user, setUser] = useLocalStorage(false, "user");
  const [, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const removeCurrentUser = async () => {
    await firebaseAuth.signOut();
  };
  return (
    <>
      <div className="second-header">
        <div className="second-header-container">
          <div className="second-header-wrapper">
            <div className="second-header-catalog">
              <div className="catalog">
                <div className="catalog-header">
                  <img src={blockchain} alt="" className="first-icon " />
                  <p style={{ margin: 0 }}>Каталог товарів</p>
                </div>
                <div className="catalog-header-icon">
                  <img src={arrow} alt="" className="second-icon" />
                </div>
              </div>
            </div>
            <div className="second-header-search ">
              <input placeholder="Пошук товарів" />
              <img src={loop} alt="" />
            </div>
            <div className="second-header-items">
              <div className="second-header-login ">
                {firebaseAuth.currentUser ? (
                  <button onClick={() => removeCurrentUser()}>Выйти</button>
                ) : (
                  <button onClick={() => auth.toggleAuth()}>Увійти</button>
                )}
              </div>

              <div className="second-header-like ">
                <img src={heart} alt="" />
              </div>
              <div className="second-header-basket ">
                <LiaShoppingCartSolid size={26} color="white" />
                <p style={{ margin: 0 }}>
                  <Link to="/cart">
                    Кошик <span>1</span>{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
