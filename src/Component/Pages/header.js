import React from 'react'
import {Link} from 'react-router-dom';
import Login from './login';

export default function Header() {
    return (
    <div>
<header className="header">
      <div className="header__top">
        <div className="container-fluid">
          <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                  <p>460 West 34th Street, 15th floor, New York  -  Hotline: 804-377-3580 - 804-399-3580</p>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                  <div className="header__actions"><Link to="/login">Login & Regiser</Link >
                    <div className="btn-group ps-dropdown"><Link  className="dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD<i className="fa fa-angle-down"></i></Link >
                      <ul className="dropdown-menu">
                        <li><Link to="#"><img src="images/flag/usa.svg" alt=""/> USD</Link ></li>
                        <li><Link to="#"><img src="images/flag/singapore.svg" alt=""/> SGD</Link ></li>
                        <li><Link to="#"><img src="images/flag/japan.svg" alt=""/> JPN</Link ></li>
                      </ul>
                    </div>
                    <div className="btn-group ps-dropdown"><Link  className="dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language<i className="fa fa-angle-down"></i></Link >
                      <ul className="dropdown-menu">
                        <li><Link to="#">English</Link ></li>
                        <li><Link to="#">Japanese</Link ></li>
                        <li><Link to="#">Chinese</Link ></li>
                      </ul>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <nav className="navigation">
        <div className="container-fluid">
          <div className="navigation__column left">
            <div className="header__logo"><Link  className="ps-logo" to="/home"><img src="images/logo.png" alt=""/></Link ></div>
          </div>
          <div className="navigation__column center">
                <ul className="main-menu menu">
                  <li className="menu-item menu-item-has-children dropdown"><Link to="/home">Home</Link >
                        <ul className="sub-menu">
                          <li className="menu-item"><Link to="/home">Homepage #1</Link ></li>
                          <li className="menu-item"><Link to="#">Homepage #2</Link ></li>
                          <li className="menu-item"><Link to="#">Homepage #3</Link ></li>
                        </ul>
                  </li>
                  <li className="menu-item menu-item-has-children has-mega-menu"><Link to="#">Men</Link >
                    <div className="mega-menu">
                      <div className="mega-wrap">
                        <div className="mega-column">
                          <ul className="mega-item mega-features">
                            <li><Link to="">NEW RELEASES</Link ></li>
                            <li><Link to="product-listing.html">FEATURES SHOES</Link ></li>
                            <li><Link to="product-listing.html">BEST SELLERS</Link ></li>
                            <li><Link to="product-listing.html">NOW TRENDING</Link ></li>
                            <li><Link to="product-listing.html">SUMMER ESSENTIALS</Link ></li>
                            <li><Link to="product-listing.html">MOTHER'S DAY COLLECTION</Link ></li>
                            <li><Link to="product-listing.html">FAN GEAR</Link ></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">Shoes</h4>
                          <ul className="mega-item">
                            <li><Link to="product-listing.html">All Shoes</Link ></li>
                            <li><Link to="product-listing.html">Running</Link ></li>
                            <li><Link to="product-listing.html">Training & Gym</Link ></li>
                            <li><Link to="product-listing.html">Basketball</Link ></li>
                            <li><Link to="product-listing.html">Football</Link ></li>
                            <li><Link to="product-listing.html">Soccer</Link ></li>
                            <li><Link to="product-listing.html">Baseball</Link ></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">CLOTHING</h4>
                          <ul className="mega-item">
                            <li><Link to="product-listing.html">Compression & Nike Pro</Link ></li>
                            <li><Link to="product-listing.html">Tops & T-Shirts</Link ></li>
                            <li><Link to="product-listing.html">Polos</Link ></li>
                            <li><Link to="product-listing.html">Hoodies & Sweatshirts</Link ></li>
                            <li><Link to="product-listing.html">Jackets & Vests</Link ></li>
                            <li><Link to="product-listing.html">Pants & Tights</Link ></li>
                            <li><Link to="product-listing.html">Shorts</Link ></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">Accessories</h4>
                          <ul className="mega-item">
                            <li><Link to="product-listing.html">Compression & Nike Pro</Link ></li>
                            <li><Link to="product-listing.html">Tops & T-Shirts</Link ></li>
                            <li><Link to="product-listing.html">Polos</Link ></li>
                            <li><Link to="product-listing.html">Hoodies & Sweatshirts</Link ></li>
                            <li><Link to="product-listing.html">Jackets & Vests</Link ></li>
                            <li><Link to="product-listing.html">Pants & Tights</Link ></li>
                            <li><Link to="product-listing.html">Shorts</Link ></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">BRAND</h4>
                          <ul className="mega-item">
                            <li><Link to="product-listing.html">NIKE</Link ></li>
                            <li><Link to="product-listing.html">Adidas</Link ></li>
                            <li><Link to="product-listing.html">Dior</Link ></li>
                            <li><Link to="product-listing.html">B&G</Link ></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item"><Link to="#">Women</Link ></li>
                  <li className="menu-item"><Link to="#">Kids</Link ></li>
                  <li className="menu-item menu-item-has-children dropdown"><Link to="#">News</Link >
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-has-children dropdown"><Link to="blog-grid.html">Blog-grid</Link >
                                <ul className="sub-menu">
                                  <li className="menu-item"><Link to="blog-grid.html">Blog Grid 1</Link ></li>
                                  <li className="menu-item"><Link to="blog-grid-2.html">Blog Grid 2</Link ></li>
                                </ul>
                          </li>
                          <li className="menu-item"><Link to="blog-list.html">Blog List</Link ></li>
                        </ul>
                  </li>
                  <li className="menu-item menu-item-has-children dropdown"><Link to="#">Contact</Link >
                        <ul className="sub-menu">
                          <li className="menu-item"><Link to="/contact">Contact Us #1</Link ></li>
                          <li className="menu-item"><Link to="contact-us.html">Contact Us #2</Link ></li>
                        </ul>
                  </li>
                </ul>
          </div>
          <div className="navigation__column right">
            <form className="ps-search--header" action="do_action" method="post">
              <input className="form-control" type="text" placeholder="Search Product…"/>
              <button><i className="ps-icon-search"></i></button>
            </form>
            <div className="ps-cart"><Link  className="ps-cart__toggle" to="#"><span><i>20</i></span><i className="ps-icon-shopping-cart"></i></Link >
              <div className="ps-cart__listing">
                <div className="ps-cart__content">
                  <div className="ps-cart-item"><Link className="ps-cart-item__close" to="#"></Link >
                    <div className="ps-cart-item__thumbnail"><Link to="product-detail.html"></Link ><img src="images/cart-preview/1.jpg" alt=""/></div>
                    <div className="ps-cart-item__content"><Link  className="ps-cart-item__title" to="product-detail.html">Amazin’ Glazin’</Link >
                      <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                    </div>
                  </div>
                  <div className="ps-cart-item"><Link  className="ps-cart-item__close" to="#"></Link >
                    <div className="ps-cart-item__thumbnail"><Link to="product-detail.html"></Link ><img src="images/cart-preview/2.jpg" alt=""/></div>
                    <div className="ps-cart-item__content"><Link  className="ps-cart-item__title" to="product-detail.html">The Crusty Croissant</Link >
                      <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                    </div>
                  </div>
                  <div className="ps-cart-item"><Link  className="ps-cart-item__close" to="#"></Link >
                    <div className="ps-cart-item__thumbnail"><Link to="product-detail.html"></Link ><img src="images/cart-preview/3.jpg" alt=""/></div>
                    <div className="ps-cart-item__content"><Link  className="ps-cart-item__title" to="product-detail.html">The Rolling Pin</Link >
                      <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                    </div>
                  </div>
                </div>
                <div className="ps-cart__total">
                  <p>Number of items:<span>36</span></p>
                  <p>Item Total:<span>£528.00</span></p>
                </div>
                <div className="ps-cart__footer"><Link  className="ps-btn" to="cart.html">Check out<i className="ps-icon-arrow-left"></i></Link ></div>
              </div>
            </div>
            <div className="menu-toggle"><span></span></div>
          </div>
        </div>
      </nav>
    </header>
    <div className="header-services">
      <div className="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
        <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
        <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
        <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
      </div>
    </div>
        </div>
    )
}
