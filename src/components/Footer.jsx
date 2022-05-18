import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer margin-top">
      <div className="container">
        <div className="row text-center">
          <div className="col col-xs-12">
            <div className="footer-inner">
              <div className="footer-content">
                <h4>TUCO REMERAS</h4>
                <a to="https://goo.gl/maps/JTE5RLHFwSNADTvY8" target="_blank">
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

          <div className="col col-sm-4 col-xs-12">
            <div className="footer-inner">
              <div className="footer-content">
                <h4>CONTACTO</h4>
                <p>
                  2352 40 7827 <br />
                  info@tucoremeras.store
                  <br />
                  <a to="https://tucoremeras.store/"> www.tucoremeras.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col col-xs-12">
            <div className="footer-inner">
              <div className="footer-content">
                <ul className="social-media">
                  <li>
                    <a
                      to="https://api.whatsapp.com/send?phone=542352407827&text=Hola!%20Quiero%20hacer%20un%20pedido..."
                      target="_blank"
                    >
                      <i className="ion-social-whatsapp-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/tucoremeras/"
                      target="_blank"
                    >
                      <i className="ion-social-instagram-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/TucoRemeras/"
                      target="_blank"
                    >
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
        </div>
      </div>
    </div>
  );
}
