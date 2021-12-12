import React, { useEffect, useState, createRef } from "react";
import Header from "./header";
import HomeContact from "./homeContact";
import Subscribe from "./subscribe";
import Footer from "./footer";
import PsContainer from "./psContainer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import QtySpinner from "./qtySpinner";
import { getData, ServerURL } from "../Admin/FetchNodeService";
import {  makeStyles } from "@material-ui/core/styles";
import {useDispatch } from 'react-redux';
import { useHistory,withRouter } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin:10,
    display: "flex",
    flexDirection: "column",
  },
  paperstyle: {
    justifyContent: "flex-start",
    display: "flex",
    padding: 10,
    width: 220,
    height:'auto',
    margin: 5,
    borderRadius: 10,
    flexDirection: "column",
  },
  imageview: {
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 2,
    cursor: "pointer",

    "&:hover": {
      transform: "scale(1.25)",
      tansition: "all 0.5s ease 0s",
    },
  },
  arrowstyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home=(props)=> {
  const [listCategory, setListCategories] = useState([]);
  const [listSubOffers, setSubOffers] = useState([]);
  const [listSubOffers1, setSubOffers1] = useState([]);
  const [listMobiles, setListMobiles] = useState([]);
  const [pageRender, setPageRender] = useState(false);
  const classes = useStyles();
  var dispatch=useDispatch()
  const history= useHistory();
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var itemsettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const fetchAllCategories = async () => {
    var list = await getData("categories/displayall");

    setListCategories(list);
    //alert(JSON.stringify(list))
  };

  const fetchAllSubcategoryOffers = async () => {
    var list = await getData("subcategory/subcategoryoffers");

    setSubOffers(list);
    //alert(JSON.stringify(list))
  };
  const fetchAllSubcategoryOffers1 = async () => {
    var list = await getData("subcategory/subcategoryoffers1");

    setSubOffers1(list);
    //alert(JSON.stringify(list))
  };

  const fetchMobilesOffers = async () => {
    var list = await getData("product/mobileoffers");

    setListMobiles(list);
    //alert(JSON.stringify(list))
  };

  const handleConsoleList1 = (subcategoryid) => {
    props.history.push(
      { pathname: "/categoryview" },
      { subcategoryid: subcategoryid }
    );
    // props.history.push({'pathname':'/categoryview'})
  };

  const handleConsoleList = (categoryid) => {
    props.history.push({ 'pathname': "/consolelist" },{ 'categoryid': categoryid })
    // props.history.push({'pathname':'/categoryview'})
  };

const handleQtyChange=(value,item)=>{
   console.log(item);
    if(value===0)
    {dispatch({type:'REMOVE_CART',payload:[item.categoryid]})}
    else {
    item['qtydemand']=value;
//    alert(JSON.stringify(item))
    dispatch({type:'ADD_CART',payload:[item.categoryid,item]})
    }
    setPageRender(!pageRender);
  }
  const showCategories = () => {
    return listCategory.map((item) => {
      return (
        <div
          style={{
            border: "1px solid #ecf0f1",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            margin: 5,
          }}
          onClick={() => handleConsoleList(item.categoryid)}
        >
          <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="50%" />
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 400,
              padding: 10,
              "text-align": "center",
            }}
          >
            {item.categoryname.toUpperCase()}
          </div>
        </div>
      );
    });
  };

  const showOffers = () => {
    return listSubOffers.map((item) => {
      return (
          <div class="ps-shoe">
          <div class="ps-shoe__thumbnail">
            <div className="ps-badge">
              <span>New</span>
            </div>
            <div className="ps-badge ps-badge--sale ps-badge--2nd">
              <span>-35%</span>
            </div>
            <a class="ps-shoe__favorite" href="#">
              <i class="ps-icon-heart"></i>
            </a>
            <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="auto" height='180px' onClick={() => handleConsoleList1(item.subcategoryid)}/>
            <a class="ps-shoe__name" href="#">
                    {item.subcategoryname.length <= 20
                      ? item.subcategoryname.toUpperCase()
                      : item.subcategoryname.toUpperCase().substring(0, 18) + ".."}
              </a>
              <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price"> £{item.price}</span>
          </div>
        
          </div>
      );
    });
  };
  useEffect(function () {
    fetchAllCategories();
    fetchAllSubcategoryOffers();
    fetchAllSubcategoryOffers1();
    fetchMobilesOffers();
  }, []);
  const [value, setValue] = React.useState(2);
  return (
    <>
      {/* // <div  className="ps-loading"> */}
      <div className="header--sidebar"></div>
      <Header />
      <div className="ps-main">
        <div className="container">
          <Slider {...settings}>
            <li
              className="ps-banner"
              data-index="rs-2972"
              data-transition="random"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-rotate="0"
            >
              <img
                className="rev-slidebg"
                src="images/slider/5.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="5"
                data-no-retina
              />
            </li>
            <li
              className="ps-banner ps-banner--white"
              data-index="rs-100"
              data-transition="random"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-rotate="0"
            >
              <img
                className="rev-slidebg"
                src="images/slider/6.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="5"
                data-no-retina
              />
              <div
                className="tp-caption ps-banner__header"
                id="layer20"
                data-x="left"
                data-hoffset="['-60','15','15','15']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-150','-120','-150','-170']"
                data-width="['none','none','none','400']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
              ></div>
            </li>
          </Slider>
        </div>
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              color: "#636e72",
              fontWeight: "normal",
              display: "flex",
              letterSpacing: "3.9px",
              fontFamily: 'Georgia,Times,"Times New Roman",serif',
              justifyContent: "center",
              padding: 10,
            }}
          >
            TOP CATEGORIES
          </div>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />

          <div style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            {showCategories()}
          </div>
        </div> */}
        {/* <div className="ps-container">
          <div className="ps-section__header mb-50">
            <h3 className="ps-section__title" data-mask="features">
              - Features Products
            </h3>
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: 30,
                    color: "#636e72",
                    fontWeight: "normal",
                    display: "flex",
                    letterSpacing: "3.9px",
                    fontFamily: 'Georgia,Times,"Times New Roman",serif',
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  TOP OFFERS CONSOLE
                </div>
                <Divider style={{ marginTop: 5, marginBottom: 5 }} />

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    style={{
                      background: "#1e6b7b",
                      position: "absolute",
                      zIndex: 1,
                      left: 5,
                      opacity: 0.8,
                    }}
                  >
                    <ArrowBackIosIcon
                      style={{ color: "#FFF", fontSize: "large" }}
                    />
                  </IconButton>
                  <div style={{ width: "98%" }}>
                    <Slider {...itemsettings}> {showOffers()}</Slider>
                  </div>
                  <IconButton
                    style={{
                      background: "#1e6b7b",
                      position: "absolute",
                      zIndex: 1,
                      right: 5,
                      opacity: 0.8,
                    }}
                  >
                    <ArrowForwardIosIcon
                      style={{ color: "#FFF", fontSize: "large" }}
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
          <div className="ps-container">
            <div className="ps-section__header mb-50">
              <h3 className="ps-section__title" data-mask="features">
                - Features Products
              </h3>
              <ul className="ps-masonry__filter">
                <li className="current">
                  <a href="#" data-filter="*">
                    All <sup>8</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".nike">
                    Nike <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".adidas">
                    Adidas <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".men">
                    Men <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".women">
                    Women <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".kids">
                    Kids <sup>4</sup>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ps-section__content pb-50">
              <div
                style={{ display: "flex",flexWrap: "wrap" }}
                className="masonry-wrapper"
                data-col-md="4"
                data-col-sm="1"
                data-col-xs="1"
                data-gap="30"
                data-radio="100%"
              >
                {listMobiles.map((item, index) => {
                  return (
                    <div
                      className="grid-item kids"
                      // style={{ padding: "5px", display: "flex" }}
                    >
                      <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                          <div className="ps-shoe__thumbnail">
                            <div className="ps-badge">
                              <span>New</span>
                            </div>

                            <a className="ps-shoe__favorite" href="#">
                              <i className="ps-icon-heart"></i>
                            </a>
                            <Paper  elevation={3} className={classes.paperstyle}>
                                <div style={{display:'flex',justifyContent:'center',padding: 'inherit'}} 
                                onClick={()=>props.history.push({"pathname":"/productView"},{'product':item})} 
                            >
                                  <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="auto" height='160px'/>
                              
                                </div>
                                
                                <div style={{ fontSize: 14, fontWeight: "bold", padding: 10 }}>
                                  {item.mobilename.length <= 15
                                    ? item.mobilename.toUpperCase()
                                    : item.mobilename.toUpperCase().substring(0, 15) + ".."}
                                </div>
                                <div style={{ fontSize: 16, padding: 10 }}>
                                  Price<s>&#8377;{item.price}</s>{" "}
                                  <span>
                                    <b>&#8377; {item.price-item.offer}</b>
                                  </span>
                                </div>
                                <div style={{ fontSize: 16, padding: 10 }}>
                                  <span style={{ color: "green" }}>
                                    <b>You save </b>
                                  </span>
                                  <b>&#8377; {item.offer}</b>
                                </div>

                            </Paper>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="ps-section--offer">
          <div className="ps-column">
            <a className="ps-offer" href="product-listing.html">
              <img src="images/banner/home-banner-1.png" alt="" />
            </a>
          </div>
          <div className="ps-column">
            <a className="ps-offer" href="product-listing.html">
              <img src="images/banner/home-banner-2.png" alt="" />
            </a>
          </div>
        </div>
        <div class="ps-section ps-section--top-sales ps-owl-root pt-80 pb-80">
        
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <div class="row">
                  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                    <h3 class="ps-section__title" data-mask="BEST SALE">- Top Sales</h3>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <div class="ps-owl-actions"><a class="ps-prev" href="#"><i class="ps-icon-arrow-right"></i>Prev</a><a class="ps-next" href="#">Next<i class="ps-icon-arrow-left"></i></a></div>
                  </div>
                  
            </div>
            
             <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <IconButton
                    style={{
                      background: "#1e6b7b",
                      position: "absolute",
                      zIndex: 1,
                      left: 5,
                      opacity: 0.8,
                    }}
                  >
                    <ArrowBackIosIcon
                      style={{ color: "#FFF", fontSize: "large" }}
                    />
                  </IconButton> */}
                  <div style={{ width: "100%",margin:'inherit' }}>
                    <Slider {...itemsettings}> 
                          {listSubOffers.map((item, index) => {
                        return (
                          <div
                            className="grid-item kids"
                            // style={{ padding: "5px", display: "flex" }}
                          >
                            <div className="grid-item__content-wrapper">
                              <div className="ps-shoe mb-30">
                                <div class="ps-shoe">
                                <div className="ps-shoe__thumbnail">
                                  <div className="ps-badge">
                                    <span>New</span>
                                  </div>

                                  <a className="ps-shoe__favorite" href="#">
                                    <i className="ps-icon-heart"></i>
                                  </a>
                                  <Paper  elevation={3} className={classes.paperstyle}>
                                      <div style={{display:'flex',justifyContent:'center',padding: 'inherit'}} 
                                        onClick={()=>handleConsoleList1(item.subcategoryid)}                                     
                                    //  onClick={()=>props.history.push({"pathname":"/consolelist"},{'product':item})} 
                                  >
                                        <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="auto" height='160px'/>
                                    
                                      </div>
                                      
                                      <div style={{ fontSize: 14, fontWeight: "bold", padding: 10,textAlign:'center' }}>
                                        {item.subcategoryname.length <= 20
                                          ? item.subcategoryname.toUpperCase()
                                          : item.subcategoryname.toUpperCase().substring(0, 18) + ".."}
                                      </div>
                                  </Paper>
                                </div>
                               </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                   {/* <IconButton
                    style={{
                      background: "#1e6b7b",
                      position: "absolute",
                      zIndex: 1,
                      right: 5,
                      opacity: 0.8,
                    }}
                  >
                    <ArrowForwardIosIcon
                      style={{ color: "#FFF", fontSize: "large" }}
                    />
                  </IconButton>  */}
                </div>
              </div> 
          </div>
          {/* {listMobiles.map((item, index) => {
                              return ( 
                                
          <Slider {...settings}> 
          <div className="ps-shoe">
                            <div className="ps-shoe__thumbnail">
                              <div className="ps-badge">
                                <span>New</span>
                              </div>
                              <div className="ps-badge ps-badge--sale ps-badge--2nd">
                                <span>-35%</span>
                              </div>
                              <a class="ps-shoe__favorite" href="#">
                                <i class="ps-icon-heart"></i>
                              </a>
                              <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="auto" height='160px' onClick={()=>props.history.push({"pathname":"/productView"},{'product':item})}/>
                              <a class="ps-shoe__overlay" href="product-detail.html"></a>
                            </div>
                            <div className="ps-shoe__content">
                              <div class="ps-shoe__variants">
                                <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                                <select class="ps-rating ps-shoe__rating">
                                  <option value="1">1</option>
                                  <option value="1">2</option>
                                  <option value="1">3</option>
                                  <option value="1">4</option>
                                  <option value="2">5</option>
                                </select>
                              </div>
                              <div class="ps-shoe__detail"><a class="ps-shoe__name" href="product-detai.html">{item.mobilename.length <= 20
                                    ? item.mobilename.toUpperCase()
                                    : item.mobilename.toUpperCase().substring(0, 18) + ".."}</a>
                                <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price"> £ {item.price}</span>
                              </div>
                            </div>
                      </div>
               </Slider>
            )})}; */}
        
        </div>

      </div>
        <hr />

        <div
          className="ps-home-testimonial bg--parallax pb-85"
          data-background="images/background/parallax.webp"
        >
          <div className="container">
            <Slider {...settings}>
              <div className="ps-testimonial">
                <div className="ps-testimonial__thumbnail">
                  <img src="images/testimonial/6.png" alt="" />
                  <i className="fa fa-quote-left"></i>
                </div>
                <header>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                  <p>Logan May - CEO & Founder Invision</p>
                </header>
                <footer>
                  <p>
                    “Dessert pudding dessert jelly beans cupcake sweet caramels
                    gingerbread. Fruitcake biscuit cheesecake. Cookie topping
                    sweet muffin pudding tart bear claw sugar plum croissant. “
                  </p>
                </footer>
              </div>
              <div className="ps-testimonial">
                <div className="ps-testimonial__thumbnail">
                  <img src="images/testimonial/6.png" alt="" />
                  <i className="fa fa-quote-left"></i>
                </div>
                <header>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                  <p>Logan May - CEO & Founder Invision</p>
                </header>
                <footer>
                  <p>
                    “Dessert pudding dessert jelly beans cupcake sweet caramels
                    gingerbread. Fruitcake biscuit cheesecake. Cookie topping
                    sweet muffin pudding tart bear claw sugar plum croissant. “
                  </p>
                </footer>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <PsContainer />
      <HomeContact />
      <Subscribe />
      <Footer />
    </>
  );
}
export default withRouter(Home);