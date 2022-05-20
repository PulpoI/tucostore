import React from "react";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row text-center">
          <div className="col col-xs-12">
            <div className="footer-inner">
              <div className="footer-content">
                <h4>TUCO REMERAS</h4>
                <a
                  href="https://goo.gl/maps/JTE5RLHFwSNADTvY8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <address>
                    Chacabuco, Buenos Aires <br />
                    Velez Sarsfield 85
                    <br />
                    Argentina
                  </address>
                </a>
              </div>
            </div>
          </div>

          <div className="col col-xs-12">
            <div className="footer-inner">
              <div className="footer-content">
                <ul className="social-media">
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=542352407827&text=Hola!%20Quiero%20hacer%20un%20pedido..."
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsWhatsapp />
                      <i className="ion-social-whatsapp-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/tucoremeras/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram />
                      <i className="ion-social-instagram-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/TucoRemeras/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFacebook />
                      <i className="ion-social-facebook"></i>
                    </a>
                  </li>
                </ul>
                <span className="copyright-mark">
                  &copy; 2021 TUCO REMERAS <br />
                  ALL RIGHTS RESERVED <br />
                  Design by Pablo Duarte
                </span>
              </div>
            </div>
          </div>

          <div className="col col-sm-4 col-xs-12">
            <div className="footer-inner">
              <div className="footer-content">
                <h4>CONTACTO</h4>
                <p>
                  2352 40 7827 <br />
                  info@tucoremeras.store
                  <br />
                  <a
                    href="https://tucoremeras.com.ar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    www.tucoremeras.com.ar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
