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
import { NavLink } from 'react-router-dom';
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
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 2000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };

  var settingbanner = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextA />,
    prevArrow: <SamplePrevA />
  };
  function SampleNextA(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'flex',background: 'black', }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevA(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'flex',background: 'black' }}
        onClick={onClick}
      />
    );
  }  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'flex',background: 'black' }}

        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'flex',background: 'black' }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <SampleNextA />,
    prevArrow: <SamplePrevA />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const showSlider = () => {
    return listCategory.map((item) => {
      return (
        <div>
          <img src={`${ServerURL}/images/${item.ad}`} alt="FNF" width="100%" />
        </div>
      );
    });
   
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
          <Slider {...settingbanner}>
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
                src="images/banner/b5.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="5"
                data-no-retina
              />

            </li>

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
                src="images/banner/b3.png"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="5"
                data-no-retina
              />
            </li>

              <img
                className="rev-slidebg"
                src="images/banner/b6.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="5"
                data-no-retina
              />
            {/* <li
              className="ps-banner ps-banner--white"
              data-index="rs-100"
              data-transition="random"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-rotate="0"
            > */}

              {/* <div
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
              ></div> */}
            {/* </li> */}
          </Slider>
          {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <Slider {...settingbanner}>
            {showSlider()}
          </Slider>
        </div>
      </div> */}
        </div>

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
                                <div style={{display:'flex',justifyContent:'center'}} 
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
            <a className="ps-offer" href="#">
              <img src="images/banner/banner1.png" alt="" />
            </a>
          </div>
          <div className="ps-column">
            <a className="ps-offer" href="product-listing.html">
              <img src="images/banner/banner2.png" alt="" />
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
                    <Slider {...settings}> 
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
                                      <div style={{display:'flex',justifyContent:'center'}} 

                                        onClick={()=>handleConsoleList1(item.subcategoryid)}                            
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

      <div style={{background: 'url(../images/banner/banner2.png) no-repeat center',
        'background-size': 'cover',
       backgroundAttachment:'fixed',
        '-webkit-background-size':' cover',
        '-o-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-ms-background-size': 'cover',
        'position': 'relative',
        'z-index': 1}}>
        <div className="container pt-lg-2 pb-lg-4 py-4">
          <div className="welcome-left text-center py-lg-4">
            <div style={{'margin-bottom': '35px',position: 'relative',top:-92, 'max-width': '120px',display: 'inline-block','border-radius': '50%',border:' 2px solid #fff'}} >
                  <img src="images/testimonial/6.png" alt="" />
                  <i className="fa fa-quote-left" style={{
                  'display': 'inline-block',
                  'position':' absolute',
                  width: '35px',
                  height: '35px',
                  bottom: 0,
                  right: 0,
                  'background-color': '#2AC37D',
                  '-webkit-border-radius': '50%',
                  '-moz-border-radius': '50%',
                  '-ms-border-radius': '50%',
                  'border-radius': '50%',
                  'border': '2px solid #fff'
                  }}></i>
            </div>
            <h2 style={{color:'white'}}>Logan May - CEO & Founder Invision</h2>
            <h3 className="hny-title">
            <header >
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
                  {/* <h2>Logan May - CEO & Founder Invision</h2> */}
 
                </header>
                <footer>
                  <p style={{'font-size': '24px','font-style': 'italic','line-height': '1.88em',color: '#fff'}}>
                    “Dessert pudding dessert jelly beans cupcake sweet caramels
                    gingerbread. Fruitcake biscuit cheesecake. Cookie topping
                    sweet muffin pudding tart bear claw sugar plum croissant. “
                  </p>
                </footer>
            </h3>
            <div className="middle-buttons pb-5">
              <NavLink
                to="/about"
                className="btn btn-style btn-white mt-sm-5 mt-4 mr-2"
              >
                Read More{' '}
                <span
                  className="fa fa-chevron-right ml-2"
                  aria-hidden="true"
                ></span>
              </NavLink>
              <NavLink
                to="/contact-us"
                className="btn btn-style btn-primary mt-sm-5 mt-4"
              >
                Contact Us{' '}
                <span
                  className="fa fa-chevron-right ml-2"
                  aria-hidden="true"
                ></span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

        {/* <div
          className="ps-home-testimonial bg--parallax pb-85"
          data-background="images/background/parallax.jpg"
        >
          <div style={{top:'-90px',position:'relative'}} >
          <div className="container">
            <Slider {...settings}>
              <div className="ps-testimonial">
                <div className="ps-testimonial__thumbnail" >
                  <img src="images/testimonial/6.png" alt="" />
                  <i className="fa fa-quote-left" ></i>
                </div>
                <header >
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
        </div> */}
      </div>

      <PsContainer />
      <HomeContact />
      <Subscribe />
      <Footer />
    </>
  );
}
export default withRouter(Home);
// export default responsive (Home);