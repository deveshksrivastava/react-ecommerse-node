import React from 'react'
import Header from './header'
import HomeContact from './homeContact'
import Subscribe from './subscribe'
import Footer from './footer'
import PsContainer from './psContainer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed:1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const [value, setValue] = React.useState(2);
    return (
        <>
         {/* // <div  className="ps-loading"> */}
            <div className="header--sidebar"></div>
            <Header />
            <div className="ps-main">
                
            <div className="container">
            <Slider {...settings}>

                    <li className="ps-banner" data-index="rs-2972" data-transition="random" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-rotate="0"><img className="rev-slidebg" src="images/slider/5.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" data-no-retina />
                    </li>
                    <li className="ps-banner ps-banner--white" data-index="rs-100" data-transition="random" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-rotate="0"><img className="rev-slidebg" src="images/slider/6.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="5" data-no-retina />
                    <div className="tp-caption ps-banner__header" id="layer20" data-x="left" data-hoffset="['-60','15','15','15']" data-y="['middle','middle','middle','middle']" data-voffset="['-150','-120','-150','-170']" data-width="['none','none','none','400']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                    </div>
                       </li>
            </Slider>         
            </div>
            <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
            <div className="ps-container">
            <div className="ps-section__header mb-50">
                <h3 className="ps-section__title" data-mask="features">- Features Products</h3>
                <ul className="ps-masonry__filter">
                <li className="current"><a href="#" data-filter="*">All <sup>8</sup></a></li>
                <li><a href="#" data-filter=".nike">Nike <sup>1</sup></a></li>
                <li><a href="#" data-filter=".adidas">Adidas <sup>1</sup></a></li>
                <li><a href="#" data-filter=".men">Men <sup>1</sup></a></li>
                <li><a href="#" data-filter=".women">Women <sup>1</sup></a></li>
                <li><a href="#" data-filter=".kids">Kids <sup>4</sup></a></li>
                </ul>
            </div>

            <div className="ps-section__content pb-50">
                <div className="masonry-wrapper" data-col-md="4" data-col-sm="1" data-col-xs="1" data-gap="30" data-radio="100%">
                <div className="ps-masonry">
                    <div className="grid-sizer"></div>
                    <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail">
                            <div className="ps-badge"><span>New</span></div>
                            <div className="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/1.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price">
                                <del>£220</del> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-item nike">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/2.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-item adidas">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/3.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail">
                            <div className="ps-badge ps-badge--sale"><span>-35%</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/4.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price">
                                <del>£220</del> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-item men">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/5.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-item women">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/6.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/7.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                        <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/8.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                        </div>
                        <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                            <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                            <select className="ps-rating ps-shoe__rating">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            </div>
                            <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                            <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>

        <div className="ps-section--offer">
            <div className="ps-column"><a className="ps-offer" href="product-listing.html"><img src="images/banner/home-banner-1.png" alt=""/></a></div>
            <div className="ps-column"><a className="ps-offer" href="product-listing.html"><img src="images/banner/home-banner-2.png" alt=""/></a></div>
        </div>
        <hr/ >
            

            {/* <div className="ps-section--sale-off ps-section pt-80 pb-40">
                <div className="ps-container"> 
                    <div className="ps-section__header mb-50">
                        <h3 className="ps-section__title" data-mask="Sale off">- Hot Deal Today</h3>
                    </div>
                    <div className="ps-section__content">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                <div className="ps-hot-deal">
                                <h3>Nike DUNK Max 95 OG</h3>
                                <p className="ps-hot-deal__price">Only:  <span>£155</span></p>
                                <ul className="ps-countdown" data-time="December 13, 2017 15:37:25">
                                    <li><span className="hours"></span><p>Hours</p></li>
                                    <li className="divider">:</li>
                                    <li><span className="minutes"></span><p>minutes</p></li>
                                    <li className="divider">:</li>
                                    <li><span className="seconds"></span><p>Seconds</p></li>
                                </ul><a className="ps-btn" href="#">Order Today<i className="ps-icon-next"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                <div className="ps-hotspot"><a className="point first active" href="javascript:;"><i className="fa fa-plus"></i>
                                    <div className="ps-hotspot__content">
                                    <p className="heading">JUMP TO HEADER</p>
                                    <p>Dynamic Fit Collar en la zona del tobillo que une la parte inferior de la pierna y el pie sin reducir la libertad de movimiento.</p>
                                    </div></a><a className="point second" href="javascript:;"><i className="fa fa-plus"></i>
                                    <div className="ps-hotspot__content">
                                    <p className="heading">JUMP TO HEADER</p>
                                    <p>Dynamic Fit Collar en la zona del tobillo que une la parte inferior de la pierna y el pie sin reducir la libertad de movimiento.</p>
                                    </div></a><a className="point third" href="javascript:;"><i className="fa fa-plus"></i>
                                    <div className="ps-hotspot__content">
                                    <p className="heading">JUMP TO HEADER</p>
                                    <p>Dynamic Fit Collar en la zona del tobillo que une la parte inferior de la pierna y el pie sin reducir la libertad de movimiento.</p>
                                    </div></a><img src="images/hot-deal.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             */}
        
            {/* <div className="ps-section ps-section--top-sales ps-owl-root pt-80 pb-80">
                <div className="ps-container">
             <Slider {...settings}>
                    <div className="ps-section__header mb-50">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                                <h3 className="ps-section__title" data-mask="BEST SALE">- Top Sales</h3>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                <div className="ps-owl-actions"><a className="ps-prev" href="#"><i className="ps-icon-arrow-right"></i>Prev</a><a className="ps-next" href="#">Next<i className="ps-icon-arrow-left"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section__content">
                        <div className="ps-owl--colection owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="30" data-owl-nav="false" data-owl-dots="false" data-owl-item="4" data-owl-item-xs="1" data-owl-item-sm="2" data-owl-item-md="3" data-owl-item-lg="4" data-owl-duration="1000" data-owl-mousedrag="on">
                        
                                    <div className="ps-shoes--carousel">
                                        <div className="ps-shoe">
                                            <div className="ps-shoe__thumbnail">
                                                <div className="ps-badge"><span>New</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/1.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div className="ps-shoe__content">
                                                <div className="ps-shoe__variants">
                                                <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                                                <select className="ps-rating ps-shoe__rating">
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                    <option value="1">4</option>
                                                    <option value="2">5</option>
                                                </select>
                                                </div>
                                                <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                                <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        <div className="ps-shoes--carousel">
                            <div className="ps-shoe">
                            <div className="ps-shoe__thumbnail">
                                <div className="ps-badge"><span>New</span></div>
                                <div className="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/2.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                            </div>
                            <div className="ps-shoe__content">
                                <div className="ps-shoe__variants">
                                <div className="ps-shoe__variant normal">
                                    <img src="images/shoe/2.jpg" alt=""/>
                                    <img src="images/shoe/3.jpg" alt=""/>
                                    <img src="images/shoe/4.jpg" alt=""/>
                                    <img src="images/shoe/5.jpg" alt=""/>
                                </div>
                                <select className="ps-rating ps-shoe__rating">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="2">5</option>
                                </select>
                                </div>
                                <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price">
                                    <del>£220</del> £ 120</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ps-shoes--carousel">
                            <div className="ps-shoe">
                            <div className="ps-shoe__thumbnail">
                                <div className="ps-badge"><span>New</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/3.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                            </div>
                            <div className="ps-shoe__content">
                                <div className="ps-shoe__variants">
                                <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                                <select className="ps-rating ps-shoe__rating">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="2">5</option>
                                </select>
                                </div>
                                <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ps-shoes--carousel">
                            <div className="ps-shoe">
                            <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/4.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                            </div>
                            <div className="ps-shoe__content">
                                <div className="ps-shoe__variants">
                                <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                                <select className="ps-rating ps-shoe__rating">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="2">5</option>
                                </select>
                                </div>
                                <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ps-shoes--carousel">
                            <div className="ps-shoe">
                            <div className="ps-shoe__thumbnail">
                                <div className="ps-badge"><span>New</span></div>
                                <a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/5.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                            </div>
                            <div className="ps-shoe__content">
                                <div className="ps-shoe__variants">
                                <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                                <select className="ps-rating ps-shoe__rating">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="2">5</option>
                                </select>
                                </div>
                                <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ps-shoes--carousel">
                            <div className="ps-shoe">
                            <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/6.jpg" alt=""/><a className="ps-shoe__overlay" href="product-detail.html"></a>
                            </div>
                            <div className="ps-shoe__content">
                                <div className="ps-shoe__variants">
                                <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt=""/><img src="images/shoe/3.jpg" alt=""/><img src="images/shoe/4.jpg" alt=""/><img src="images/shoe/5.jpg" alt=""/></div>
                                <select className="ps-rating ps-shoe__rating">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="2">5</option>
                                </select>
                                </div>
                                <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                </Slider>
                </div>
            </div> */} 

            <div className="ps-home-testimonial bg--parallax pb-85" data-background="images/background/parallax.webp">
                <div className="container">
                <Slider {...settings}>
                <div className="ps-testimonial"  >
                    <div className="ps-testimonial__thumbnail" ><img src="images/testimonial/6.png" alt=""/><i className="fa fa-quote-left"></i></div>
                    <header>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
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
                        <p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant. “</p>
                    </footer>
                    </div>
                    <div className="ps-testimonial">
                    <div className="ps-testimonial__thumbnail"><img src="images/testimonial/6.png" alt=""/><i className="fa fa-quote-left"></i></div>
                    <header>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
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
                        <p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant. “</p>
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
    )
}
