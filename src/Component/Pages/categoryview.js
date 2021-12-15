import React, { useEffect, useState } from "react";
import {  makeStyles } from "@material-ui/core/styles";
import Header from "./header";
import Footer from './footer'
import Paper from "@material-ui/core/Paper";
import { getData,postData, ServerURL } from "../Admin/FetchNodeService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QtySpinner from "./qtySpinner";
import {useDispatch } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  paperstyle: {
    justifyContent: "flex-start",
    display: "flex",
    padding: 10,
    width: 220,
    height: 360,
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

export default function CategoryView(props) {
  const classes = useStyles();
  const [listConsole, setListConsole] = useState([]);
  const [pageRender, setPageRender] = useState(false);

  //alert(props.history.location.state.categoryid)
  //console.log(props.history.location);
  var product = props.history.location.state.subcategoryid;
 // alert(JSON.stringify(product));
  var dispatch=useDispatch()

  const fetchAllSubCategories = async () => {
    var body = { subcategoryid: product };
//    console.log(body)
    var list = await postData(
      "product/displayallproductbysubcategoryid",
      body
    );
//    alert(JSON.stringify(list))
    setListConsole(list);
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

  const showConsole = () => {
    return listConsole.map((item) => {
      return (
        <div >
          <div
            style={{
              //border: "1px solid #ecf0f1",
              width: 200,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 10,
              margin: 0,
            }}

          
          >
            <Paper  elevation={3} className={classes.paperstyle}>
              <div style={{alignSelf:'center'}} 
              onClick={()=>props.history.push({"pathname":"/productView"},{'product':item})} 
          >
                <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="auto" height='160px'/>
            
              </div>
              
              <div style={{ fontSize: 14, fontWeight: "bold", padding: 10 }}>
                {item.mobilename.length <= 20
                  ? item.mobilename.toUpperCase()
                  : item.mobilename.toUpperCase().substring(0, 18) + ".."}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                   {item.stock >= 1 ? (
                    <div style={{ margin: 20 }}>
                    <QtySpinner
                        value={0}

                      onChange={(value) => handleQtyChange(value,item)}
                    />
                    </div>
                ) : (
                    <></>
                )}
                </div>
          </Paper>
          </div>
        </div>
      );
    });
  };

  useEffect(function () {

    fetchAllSubCategories();
  
  }, []);

  return (
    <div>
      <Header history={props.history} />
      {/* <div
        style={{
          padding: 8,
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
        }}
      >
        {showConsole()}
      </div> */}
      <main class="ps-main">
      <div class="ps-products-wrap pt-80 pb-80">
        <div class="ps-products" data-mh="product-listing">
          <div class="ps-product-action">
            <div class="ps-product__filter">
              <select class="ps-select selectpicker">
                <option value="1">Shortby</option>
                <option value="2">Name</option>
                <option value="3">Price (Low to High)</option>
                <option value="3">Price (High to Low)</option>
              </select>
            </div>
            <div class="ps-pagination">
              <ul class="pagination">
                <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
          </div>
          {/* <div class="ps-product__columns">
             <div class="ps-product__column">
              <div class="ps-shoe mb-30"> */}
               {/* <div class="ps-shoe__thumbnail">
                  <div class="ps-badge"><span>New</span></div>
                  <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src="images/shoe/1.jpg" alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                </div>
                <div class="ps-shoe__content">
                  <div class="ps-shoe__variants">
                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                    <select class="ps-rating ps-shoe__rating">
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                    </select>
                  </div>
                  <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                      <del>£220</del> £ 120</span>
                  </div>
                </div>
              </div>
            </div> */}
              <div
                style={{
                  padding: 8,
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "left",
                }}
              >
                {showConsole()}
              </div>
            {/* </div>
            </div>
          </div> */}
          <div class="ps-product-action">
            <div class="ps-product__filter">
              <select class="ps-select selectpicker">
                <option value="1">Shortby</option>
                <option value="2">Name</option>
                <option value="3">Price (Low to High)</option>
                <option value="3">Price (High to Low)</option>
              </select>
            </div>
            <div class="ps-pagination">
              <ul class="pagination">
                <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ps-sidebar" data-mh="product-listing">
          <aside class="ps-widget--sidebar ps-widget--category">
            <div class="ps-widget__header">
              <h3>Category</h3>
            </div>
            <div class="ps-widget__content">
              <ul class="ps-list--checked">
                <li class="current"><a href="product-listing.html">Life(521)</a></li>
                <li><a href="product-listing.html">Running(76)</a></li>
                <li><a href="product-listing.html">Baseball(21)</a></li>
                <li><a href="product-listing.html">Football(105)</a></li>
                <li><a href="product-listing.html">Soccer(108)</a></li>
                <li><a href="product-listing.html">Trainning & game(47)</a></li>
                <li><a href="product-listing.html">More</a></li>
              </ul>
            </div>
          </aside>
          <aside class="ps-widget--sidebar ps-widget--filter">
            <div class="ps-widget__header">
              <h3>Category</h3>
            </div>
            <div class="ps-widget__content">
              <div class="ac-slider" data-default-min="300" data-default-max="2000" data-max="3450" data-step="50" data-unit="$"></div>
              <p class="ac-slider__meta">Price:<span class="ac-slider__value ac-slider__min"></span>-<span class="ac-slider__value ac-slider__max"></span></p><a class="ac-slider__filter ps-btn" href="#">Filter</a>
            </div>
          </aside>
          <aside class="ps-widget--sidebar ps-widget--category">
            <div class="ps-widget__header">
              <h3>Sky Brand</h3>
            </div>
            <div class="ps-widget__content">
              <ul class="ps-list--checked">
                <li class="current"><a href="product-listing.html">Nike(521)</a></li>
                <li><a href="product-listing.html">Adidas(76)</a></li>
                <li><a href="product-listing.html">Baseball(69)</a></li>
                <li><a href="product-listing.html">Gucci(36)</a></li>
                <li><a href="product-listing.html">Dior(108)</a></li>
                <li><a href="product-listing.html">B&G(108)</a></li>
                <li><a href="product-listing.html">Louis Vuiton(47)</a></li>
              </ul>
            </div>
          </aside>
          <aside class="ps-widget--sidebar ps-widget--category">
            <div class="ps-widget__header">
              <h3>Width</h3>
            </div>
            <div class="ps-widget__content">
              <ul class="ps-list--checked">
                <li class="current"><a href="product-listing.html">Narrow</a></li>
                <li><a href="product-listing.html">Regular</a></li>
                <li><a href="product-listing.html">Wide</a></li>
                <li><a href="product-listing.html">Extra Wide</a></li>
              </ul>
            </div>
          </aside>
          <div class="ps-sticky desktop">
            <aside class="ps-widget--sidebar">
              <div class="ps-widget__header">
                <h3>Size</h3>
              </div>
              <div class="ps-widget__content">
                <table class="table ps-table--size">
                  <tbody>
                    <tr>
                      <td class="active">3</td>
                      <td>5.5</td>
                      <td>8</td>
                      <td>10.5</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>3.5</td>
                      <td>6</td>
                      <td>8.5</td>
                      <td>11</td>
                      <td>13.5</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>6.5</td>
                      <td>9</td>
                      <td>11.5</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>4.5</td>
                      <td>7</td>
                      <td>9.5</td>
                      <td>12</td>
                      <td>14.5</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>7.5</td>
                      <td>10</td>
                      <td>12.5</td>
                      <td>15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </aside>
            <aside class="ps-widget--sidebar">
              <div class="ps-widget__header">
                <h3>Color</h3>
              </div>
              <div class="ps-widget__content">
                <ul class="ps-list--color">
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                </ul>
              </div>
            </aside>
          </div>
          {/* <!--aside.ps-widget--sidebar-->
          <!--    .ps-widget__header: h3 Ads Banner-->
          <!--    .ps-widget__content-->
          <!--        a(href='product-listing'): img(src="images/offer/sidebar.jpg" alt="" /)-->
          <!---->
          <!--aside.ps-widget--sidebar-->
          <!--    .ps-widget__header: h3 Best Seller-->
          <!--    .ps-widget__content-->
          <!--        - for (var i = 0; i < 3; i ++)-->
          <!--            .ps-shoe--sidebar-->
          <!--                .ps-shoe__thumbnail-->
          <!--                    a(href='#')-->
          <!--                    img(src="images/shoe/sidebar/"+(i+1)+".jpg" alt="" /)-->
          <!--                .ps-shoe__content-->
          <!--                    if i == 1-->
          <!--                        a(href='#').ps-shoe__title Nike Flight Bonafide-->
          <!--                    else if i == 2-->
          <!--                        a(href='#').ps-shoe__title Nike Sock Dart QS-->
          <!--                    else-->
          <!--                        a(href='#').ps-shoe__title Men's Sky-->
          <!--                    p <del> £253.00</del> £152.00-->
          <!--                    a(href='#').ps-btn PURCHASE--> */}
        </div>
       </div>
      </main>
      
      <Footer />
    </div>
  );
}
