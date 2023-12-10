import React, { useContext, useEffect, useState } from "react";
import "../../colors.scss";
import "./DownHeader-style.scss";
import blockchain from "../../assets/png/icons8-apps-48.png";
import arrow from "../../assets/png/icons8-expand-arrow-30.png";
import loop from "../../assets/png/icons8-search-48.png";
import heart from "../../assets/png/icons8-heart-24.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AuthContext } from "../../data/AuthProvider";
import { firebaseAuth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function DownHeader() {
  const auth = useContext(AuthContext);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const removeCurrentUser = async () => {
    await firebaseAuth.signOut();
    localStorage.removeItem("user");
    navigate("/");
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
                  <div className="ProfileLogo">
                    <Link
                      to={`/profile`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {firebaseAuth.currentUser.photoURL ? (
                        <img
                          style={{ width: 40, height: 40, borderRadius: "50%" }}
                          src={firebaseAuth.currentUser.photoURL}
                        />
                      ) : (
                        <p>{user.email.slice(0, 1).toUpperCase()}</p>
                      )}
                    </Link>
                  </div>
                ) : (
                  navigate("/")
                )}
                {firebaseAuth.currentUser && localStorage.getItem("user") ? (
                  <button onClick={() => removeCurrentUser()}>Выйти</button>
                ) : (
                  <div style={{ display: "flex", gap: 20 }}>
                    <button onClick={() => auth.toggleAuth()}>Увійти</button>
                    <div className="second-header-like ">
                      <img src={heart} alt="" />
                    </div>
                  </div>
                )}
              </div>

              <div className="second-header-basket ">
                <LiaShoppingCartSolid size={26} color="white" />
                <p style={{ margin: 0 }}>
                  <Link to="/cart" className="cart">
                    Кошик
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
