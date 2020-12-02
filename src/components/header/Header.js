import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/basic.css';
import '../../styles/element.css';

const Header = () => {
  return (
    <>
      <header>
        <div className="headerflex">
          <div className="hd-logo img-w">
            <Link to="/">
              <img src="../images/logo_bvt_3.svg" alt="bvoat logo"></img>
            </Link>
          </div>
          <ul className="headermenu">
            <li>
              <Link to="/search">
                <img src="../images/console_search.svg" alt="search"></img>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src="../images/console_cart.svg" alt="cart"></img>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <img src="../images/console_cart.svg" alt="login"></img>
              </Link>
            </li>
            <li>
              <Link to="/myPage">
                <img src="../images/console_cart.svg" alt="myPage"></img>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
