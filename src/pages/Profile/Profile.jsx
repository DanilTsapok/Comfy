import React, { useContext } from "react";
import "./profile-style.scss";
import { firebaseAuth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { LiaShoppingCartSolid } from "react-icons/lia";
function Profile() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div className="Profile-body">
      <div className="profileIcon">
        {currentUser.photoURL ? (
          <img src={currentUser.photoURL} />
        ) : (
          <p className="profileIconWithoutPhoto">
            {currentUser.email.slice(0, 1)}
          </p>
        )}
      </div>
      <div className="profileName">
        <p>{currentUser.displayName}</p>
      </div>
      <div className="profileEmail">
        <p>Пошта покупця: {currentUser.email}</p>
      </div>

      <button className="product-info-body-btnHome" onClick={() => backHome(0)}>
        <LiaShoppingCartSolid size={25} />
        Go to home
      </button>
    </div>
  );
}

export default Profile;
