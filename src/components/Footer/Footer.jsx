import React, { Component } from "react";
import footerData from "../../../footerData";
import "./footer-styles.scss";
import QR from "./../../assets/catalog-icons/f_auto.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-box">
          <div className="footer-upper-box">
            <div className="box-items">
              {footerData.map((element, index) => (
                <div className="item" key={index}>
                  <p>
                    <img src={element.icon} alt="" />
                  </p>
                  <div className="text-content">
                    <p className="text-content-title">{element.title}</p>
                    <p className="text-content-subtitle">
                      {element.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-down-box">
            <div className="down-box">
              <div className="down-box-left-content">
                <div className="QR-code">
                  <img src={QR} alt="" />
                  <p>
                    Туц-туду-туц. Душа співає, бо ми завантажили додаток Comfy,
                    а ти?
                  </p>
                </div>
                <div className="sendEmail">
                  <p className="sendEmail-title">Підписуйтейсь на знижки!</p>
                  <p className="sendEmail-subtitle">
                    Не турбуйтесь, ми не спамимо😍
                  </p>
                  <input
                    type="text"
                    className="email"
                    placeholder="email@email.com"
                  />
                  <input
                    type="submit"
                    className="submitBtn
                "
                    value={"Відправити"}
                  />
                </div>
              </div>
              <div className="down-box-center-content-container">
                <div className="box-center-content">
                  <ul>
                    <li className="title">Comfy</li>
                    <li>Про компанію</li>
                    <li>Магазини</li>
                    <li>Контакти</li>
                    <li>Прес-центр</li>
                    <li>Робота в Comfy</li>
                    <li>Безпека та застереження</li>
                    <li>Тендер</li>
                    <li>Партнерам</li>
                    <li>Каталог товарів</li>
                    <li>Comfy допомагає</li>
                  </ul>
                  <ul>
                    <li className="title">Послуги і сервіси</li>
                    <li>Бонусна програма</li>
                    <li>Подарункові картки</li>
                    <li>Comfy книги</li>
                    <li>Кредит та оплата частинами</li>
                    <li>Сервісні договори</li>
                    <li>Безготівковий рахунок</li>
                    <li>Оплата</li>
                  </ul>
                  <ul>
                    <li className="title">Допомога покупцеві</li>
                    <li>Знайти замовлення</li>
                    <li>Умови доставки</li>
                    <li>Обмін і повернення товару</li>
                    <li>Гарантія</li>
                    <li>Статус товару в ремонті</li>
                    <li>Часто задавані питання</li>
                    <li>Правила користування сайтом</li>
                    <li>Правила участі в акціях</li>
                    <li>Чорна п'ятниця</li>
                  </ul>
                  <ul>
                    <li className="title">Консультація</li>
                    <li>
                      <p className="number">0-800-303-505</p>
                    </li>
                    <li>
                      Безкоштовно по Україні
                      <br /> 08:00-21:00 Пн-Нд
                    </li>
                    <li className="social-nav">
                      <div className="social-item">
                        <div className="icon">+</div>
                        <p>Чат на сайті</p>
                      </div>
                      <div className="social-item">
                        <div className="icon"></div>
                        <p>Telegram</p>
                      </div>
                      <div className="social-item">
                        <div className="icon"></div>
                        <p>Viber</p>
                      </div>
                      <div className="social-item">
                        <div className="icon"></div>
                        <p>Messenger</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copywright">
              <p>© Всі права захищені ТОВ «КОМФІ ТРЕЙД», </p>
            </div>
            <div className="footer-bottom-cards"></div>
            <div className="social-connection"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;