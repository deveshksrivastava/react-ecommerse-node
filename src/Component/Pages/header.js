import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Slider from "react-slick";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import ShoppingBasketOutlined from "@material-ui/icons/ShoppingCartOutlined";
import MoreIcon from "@material-ui/icons/MoreVert";
import { postData, getData, ServerURL } from "../Admin/FetchNodeService";
import { useDispatch, useSelector } from "react-redux";
//drawer
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Delete from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({}));

export default function Header(props) {
  const classes = useStyles();
  var cart = useSelector((state) => state.cart);
  var keys = Object.keys(cart);
  var values = Object.values(cart);
  var totalamt = values.reduce(calculation, 0);
  var totalsaving = values.reduce(calculationsaving, 0);
  var actualamt = values.reduce(actualcalculation, 0);

  var dispatch = useDispatch();

  function actualcalculation(a, b) {
    var price = b.price * b.qtydemand;
    return a + price;
  }

  function calculation(a, b) {
    var price =
      b.offer > 0 ? (b.price - b.offer) * b.qtydemand : b.price * b.qtydemand;
    return a + price;
  }
  function calculationsaving(a, b) {
    var price = b.offer * b.qtydemand;
    return a + price;
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [listCategory, setListCategory] = useState([]);
  const [listSubCategory, setListSubCategory] = useState([]);
  const [anchorMEl, setAnchorMEl] = React.useState(null);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: 345,
          padding: 2,
        }}
      >
        <div
          style={{
            padding: 5,
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          <ShoppingBasketOutlined />
          <div
            style={{
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: 1,
              padding: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            {keys.length} Items
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: "bold",
            letterSpacing: 1,
            width: 230,
            padding: 3,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          Total Amount:<span>&#8377;</span> {totalamt}
        </div>
      </div>
      <Divider />
      {showCart()}
      <Divider />
      {paymentDetails()}
    </div>
  );

  const paymentDetails = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: "bold",
            letterSpacing: 2,
            display: "flex",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Payment Details
        </div>
        <Divider />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ fontSize: 14, fontWeight: 400, padding: 5 }}>
            Total Amount:
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: "bold",
              padding: 5,
              textAlign: "right",
              marginLeft: "auto",
            }}
          >
            &#8377; {actualamt}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ fontSize: 14, fontWeight: 400, padding: 5 }}>
            Total Savings:
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: "bold",
              padding: 5,
              textAlign: "right",
              marginLeft: "auto",
            }}
          >
            &#8377; {totalsaving}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ fontSize: 14, fontWeight: 400, padding: 5 }}>
            Delivery Charges:
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: "bold",
              padding: 5,
              textAlign: "right",
              marginLeft: "auto",
            }}
          >
            &#8377; {0}
          </div>
        </div>

        <Divider />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ fontSize: 14, fontWeight: 400, padding: 5 }}>
            Amount Pay:
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: "bold",
              padding: 5,
              textAlign: "right",
              marginLeft: "auto",
            }}
          >
            &#8377; {totalamt}
          </div>
        </div>
        <Divider />
        <div style={{ padding: 10 }}>
          <Button
            variant="contained"
            style={{ background: "#1e6b7b", color: "#FFF", width: 330 }}
            onClick={() => {
              props.history.push({ pathname: "/signin" });
            }}
          >
            Proceed
          </Button>
        </div>
      </div>
    );
  };

  const handleDelete = (item) => {
    //console.log('hee')
    dispatch({ type: "REMOVE_CART", payload: [item.subcategoryid] });
    dispatch({ type: "REMOVE_CART", payload: [item.categoryid] });
  };

  const showCart = () => {
    return values.map((item) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: 345,
            padding: 5,
          }}
        >
          <div style={{ padding: 5, display: "flex", alignItems: "center" }}>
            <img
              src={`${ServerURL}/images/${item.icon}`}
              alt="FNF"
              width="auto"
              height="100"
            />
          </div>
          <div style={{ fontSize: 12, fontWeight: "bold", padding: 2 }}>
            <div
              style={{
                width: 130,
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                justifyContent: "left",
              }}
            >
              {item.subcategoryname}
              {item.mobilename}
            </div>
            <div style={{ fontSize: 12, padding: 2 }}>
              Price<s>&#8377;{item.price}</s>{" "}
              <span>
                <b>&#8377; {item.price - item.offer}</b>
              </span>
            </div>
            <div style={{ fontSize: 12, padding: 5 }}>
              <span style={{ color: "green" }}>
                <b>You save </b>
              </span>
              <b>&#8377; {item.offer}</b>
            </div>

            <div style={{ fontSize: 10, padding: 2 }}>
              <b>
                {item.qtydemand} x{" "}
                {item.offer > 0 ? (
                  <span>&#8377; {item.offer}</span>
                ) : (
                  <span>&#8377; {item.price}</span>
                )}
              </b>
              <span>
                <Delete
                  style={{ fontSize: 18, marginLeft: 28, color: "red" }}
                  onClick={() => handleDelete(item)}
                />
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: 1,
              width: 80,
              padding: 3,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {item.offer > 0 ? (
              <div>
                <span>&#8377;</span>
                {item.price * item.qtydemand}
              </div>
            ) : (
              <div>
                <span>&#8377;</span>
                {item.offer * item.qtydemand}
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  const fetchAllCategory = async () => {
    var result = await getData("categories/displayall");
    setListCategory(result);
  };

  const fetchSubCategory = async (cid) => {
    var body = { categoryid: cid };
    var result = await postData(
      "subcategory/displaysubcategorybycategoryid",
      body
    );
    setListSubCategory(result);
  };

  const handleMenuClick = async (event) => {
    // alert(event.currentTarget.value);
    setAnchorMEl(event.currentTarget);
    fetchSubCategory(event.currentTarget.value);
  };

  useEffect(function () {
    fetchAllCategory();
  }, []);

  const menuCategoryItems = () => {
    return listSubCategory.map((item) => {
      return <MenuItem onClick={handleClose}> {item.subcategoryname}</MenuItem>;
    });
  };

  const menuCategory = () => {
    return listCategory.map((item) => {
      return (
        <Button
          style={{ color: "#000", marginRight: 25 }}
          value={item.categoryid}
          onClick={(event) => handleMenuClick(event)}
        >
          {item.categoryname}
        </Button>
      );
    });
  };

  const handleClose = () => {
    setAnchorMEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                <p>
                  460 West 34th Street, 15th floor, New York - Hotline:
                  804-377-3580 - 804-399-3580
                </p>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                <div className="header__actions">
                  <Link to="/signin">Login & Regiser</Link>
                  <div className="btn-group ps-dropdown">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Info<i className="fa fa-angle-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/userprofile">
                          <img src="images/flag/user.png" alt="" /> User Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src="images/flag/logout.png" alt="" /> Logout
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src="images/flag/feedback.png" alt="" />Your FeedBack
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group ps-dropdown">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Language<i className="fa fa-angle-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#">English</Link>
                      </li>
                      <li>
                        <Link to="#">Japanese</Link>
                      </li>
                      <li>
                        <Link to="#">Chinese</Link>
                      </li>
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
              <div className="header__logo">
                <Link className="ps-logo" to="/home">
                  <img src="images/background/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="navigation__column center">
              <ul className="main-menu menu">
                <li className="menu-item menu-item-has-children dropdown">
                  <Link to="/home">Home</Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/home">Homepage #1</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#">Homepage #2</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#">Homepage #3</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children has-mega-menu">
                  <Link to="#">Men</Link>
                  <div className="mega-menu">
                    <div className="mega-wrap">
                      <div className="mega-column">
                        <ul className="mega-item mega-features">
                          <li>
                            <Link to="product-listing.html">NEW RELEASES</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              FEATURES SHOES
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">BEST SELLERS</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">NOW TRENDING</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              SUMMER ESSENTIALS
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              MOTHER'S DAY COLLECTION
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">FAN GEAR</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-column">
                        <h4 className="mega-heading">Shoes</h4>
                        <ul className="mega-item">
                          <li>
                            <Link to="product-listing.html">All Shoes</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Running</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Training & Gym
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Basketball</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Football</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Soccer</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Baseball</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-column">
                        <h4 className="mega-heading">CLOTHING</h4>
                        <ul className="mega-item">
                          <li>
                            <Link to="product-listing.html">
                              Compression & Nike Pro
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Tops & T-Shirts
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Polos</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Hoodies & Sweatshirts
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Jackets & Vests
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Pants & Tights
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Shorts</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-column">
                        <h4 className="mega-heading">Accessories</h4>
                        <ul className="mega-item">
                          <li>
                            <Link to="product-listing.html">
                              Compression & Nike Pro
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Tops & T-Shirts
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Polos</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Hoodies & Sweatshirts
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Jackets & Vests
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">
                              Pants & Tights
                            </Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Shorts</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-column">
                        <h4 className="mega-heading">BRAND</h4>
                        <ul className="mega-item">
                          <li>
                            <Link to="product-listing.html">NIKE</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Adidas</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">Dior</Link>
                          </li>
                          <li>
                            <Link to="product-listing.html">B&G</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <Link to="#">Women</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Kids</Link>
                </li>
                <li className="menu-item menu-item-has-children dropdown">
                  <Link to="#">News</Link>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-has-children dropdown">
                      <Link to="blog-grid.html">Blog-grid</Link>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <Link to="blog-grid.html">Blog Grid 1</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="blog-grid-2.html">Blog Grid 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <Link to="blog-list.html">Blog List</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children dropdown">
                  <Link to="#">Contact</Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/contact">Contact Us #1</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="contact-us.html">Contact Us #2</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="navigation__column right">
              <form
                className="ps-search--header"
                action="do_action"
                method="post"
              >
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search Product…"
                />
                <button>
                  <i className="ps-icon-search"></i>
                </button>
              </form>

              {/* Card start */}
              <div className="ps-cart">
                <IconButton
                  onClick={toggleDrawer("right", true)}
                  aria-label="show cart notifications"
                  color="inherit"
                  // style={{ backgroundColor: "#74c349" }}
                >
                  <Badge badgeContent={keys.length} color="primary">
                   {/*  <ShoppingBasketOutlined /> */}
                   <img src="images/cart3.png" alt="" style={{width:"60px", height:"35px"}} />
                  </Badge>
                </IconButton>
                <div>
                  <React.Fragment key={"right"}>
                    <Drawer
                      anchor={"right"}
                      open={state["right"]}
                      onClose={toggleDrawer("right", false)}
                    >
                      {list("right")}
                    </Drawer>
                  </React.Fragment>
                </div>
              </div>
              <div className="menu-toggle">
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="header-services">
        <div
          className="ps-services owl-slider"
          data-owl-auto="true"
          data-owl-loop="true"
          data-owl-speed="7000"
          data-owl-gap="0"
          data-owl-nav="true"
          data-owl-dots="false"
          data-owl-item="1"
          data-owl-item-xs="1"
          data-owl-item-sm="1"
          data-owl-item-md="1"
          data-owl-item-lg="1"
          data-owl-duration="1000"
          data-owl-mousedrag="on"
        >
          <p className="ps-service">
            <i className="ps-icon-delivery"></i>
            <strong>Free delivery</strong>: Get free standard delivery on every
            order with Sky Store
          </p>
          <p className="ps-service">
            <i className="ps-icon-delivery"></i>
            <strong>Free delivery</strong>: Get free standard delivery on every
            order with Sky Store
          </p>
          <p className="ps-service">
            <i className="ps-icon-delivery"></i>
            <strong>Free delivery</strong>: Get free standard delivery on every
            order with Sky Store
          </p>
        </div>
      </div>
    </div>
  );
}
