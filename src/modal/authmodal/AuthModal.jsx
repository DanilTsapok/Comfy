import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./authmodal-style.scss";
import authLogo from "./../../assets/authicon/log-ll_4.svg";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../../data/AuthProvider";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth, googleProvider } from "../../firebase/firebase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "antd";

export default function AuthModal() {
  const auth = useContext(AuthContext);
  const [submit, setSubmitting] = useState(true);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Введіть пошту"),
      password: Yup.string()

        .matches(
          /^(?=.*[A-Z])(?=.*[^a-zA-Z\d]).+$/,
          "Пароль повинен містити хоча б 1 велику літеру та 1 спеціальний символ"
        )
        .min(3, "Мінімальна кількість символів 8")
        .max(15, "Максимальна кількість символів 15")
        .required("Введіть пароль"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await signInWithEmailAndPassword(
          firebaseAuth,
          values.email,
          values.password
        );
        setLoading(false);
        onAuthStateChanged(firebaseAuth, (user) => {
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            auth.setCurrentUser(user);
            auth.toggleAuth();
          }
        });
      } catch (e) {}
    },
  });

  const singUpWithGoogle = async () => {
    try {
      await signInWithPopup(firebaseAuth, googleProvider);
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));

          auth.setCurrentUser(user);
          auth.toggleAuth();
        }
      });
    } catch (e) {}
  };
  return (
    <div
      className={auth.auth ? "authmodal authactive" : "authmodal"}
      onClick={() => auth.toggleAuth()}
    >
      <div
        className={auth.auth ? "authmodal-body modalactive" : "authmodal-body"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="authmodal-body-left-side">
          <img src={authLogo} alt="" />
        </div>
        <div className="authmodal-body-right-side">
          <div className="authmodal-close">
            <CloseIcon
              onClick={() => {
                auth.toggleAuth();
                setSubmitting(true);
              }}
              fontSize="middle"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="authmodal-title">
            <h1>Вхід</h1>
          </div>
          <div className="user-info">
            <form method="post" onSubmit={formik.handleSubmit}>
              <p>Email</p>
              <div className="input-number">
                <input
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 14,
                      position: "relative",
                      top: -10,
                    }}
                  >
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <p>Password</p>
              <div className="input-number">
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 14,
                      position: "relative",
                      top: -10,
                    }}
                  >
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              {loading ? (
                <Button
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "green",
                  }}
                  type="primary"
                  loading
                >
                  Loading
                </Button>
              ) : (
                <Button htmlType="submit">Login</Button>
              )}

              <div className="about">
                <hr />
                <span>Або</span>
                <hr />
              </div>
            </form>
            <div className="google-account">
              <button onClick={singUpWithGoogle}>
                <FcGoogle className="google-icon" />
                <div className="link-text">Google</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
