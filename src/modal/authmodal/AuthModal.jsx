import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./authmodal-style.scss";
import authLogo from "./../../assets/authicon/log-ll_4.svg";
import CloseIcon from "@mui/icons-material/Close";
export default function AuthModal({ modalActive, setModalActive }) {
  return (
    <div
      className={modalActive ? "authmodal authactive" : "authmodal"}
      onClick={() => setModalActive(false)}
    >
      <div
        className={
          modalActive ? "authmodal-body modalactive" : "authmodal-body"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="authmodal-body-left-side">
          <img src={authLogo} alt="" />
        </div>
        <div className="authmodal-body-right-side">
          <div className="authmodal-close">
            <CloseIcon
              onClick={() => setModalActive(false)}
              fontSize="middle"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="authmodal-title">
            <h1>Вхід</h1>
          </div>
          <div className="user-info">
            <form method="post">
              <p>Номер телефону</p>
              <div className="input-number">
                <input placeholder="+38(___)___-__-__" required />
              </div>
              <input type="submit" value="Увійти" />
              <div className="about">
                <hr />
                <span>Або</span>
                <hr />
              </div>
              <div className="google-account">
                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fcomfy.ua%3Fid%3Dauth611409&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=1058493733503-89b5ap5gm4a5sr3lcc5351gq7414494i.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fcomfy.ua&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow">
                  <FcGoogle className="google-icon" />
                  <divc className="link-text">Google</divc>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
