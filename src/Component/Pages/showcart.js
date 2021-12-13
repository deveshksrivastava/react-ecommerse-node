import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { ServerURL } from "../Admin/FetchNodeService.js";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Footer from "./footer";
import QtySpinner from "./qtySpinner.js";

const useStyles = makeStyles((theme) => ({
  itemRoot: {
    display: "flex",
    flexDirection: "column",
  },

  itemSubroot: {
    display: "flex",
    flexDirection: "row",
    padding: "15px",
    justifyContent: "space-between",
  },

  itemIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  itemHeading: {
    padding: "15px",
  },

  superRoot: {
    display: "flex",
    flexDirection: "row",
    background: "#F6F6F7",
  },

  cartRoot: {
    display: "flex",
    flexDirection: "row",
    padding: "60px",
    paddingTop: "10px",
  },

  cartSubroot: {
    display: "flex",
    flexDirection: "column",
  },

  cartContainer: {
    background: "#fff",
    borderRadius: "10px",
    padding: "25px",
  },

  cartHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "10px",
  },

  paymentRoot: {
    display: "flex",
    flexDirection: "row",
    padding: "40px",
    paddingTop: "10px",
  },

  paymentSubroot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  paymentContainer: {
    background: "#fff",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "10px",
    width: "110%",
  },

  paymentHeading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  paymentInformation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ShowCart(props) {
  const classes = useStyles();
  var cart = useSelector((state) => state.cart);
  const [refresh, setRefresh] = useState(false);
  var dispatch = useDispatch();
  var keys = Object.keys(cart);
  var values = Object.values(cart);

  var totalsaving = values.reduce(calculatesaving, 0);
  var totalrate = values.reduce(calculaterate, 0);
  var total = totalrate - totalsaving;

  function calculatesaving(a, b) {
    var price = b.qtydemand * b.offer;
    return a + price;
  }
  function calculaterate(a, b) {
    var price = b.qtydemand * b.price;
    return a + price;
  }

  const handleDelete = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: [item.subcategoryid] });
    setRefresh(!refresh);
  };

  const handleQtyChange = (value, item) => {
    if (values===0) {
      setRefresh(!refresh);
    } else {
    item["qtydemand"] = value;
    dispatch({ type: "ADD_ITEM", payload: [item.subcategoryid, item] });
    setRefresh(!refresh);
   }
  };

  const handlePlaceOrder = () => {
    props.history.push({ pathname: "/makepayment" });
  };

  const showCartItems = () => {
    return values.map((items) => {
      return (
        <div className={classes.itemRoot}>
          <div className={classes.itemSubroot}>
            <div>
              <img
                src={`${ServerURL}/images/${items.icon}`}
                alt="FNF"
                width="80"
                height="80"
              />
            </div>
            <div className={classes.itemHeading}>
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "600", fontSize: "18px" }}>
                  {items.subcategoryname}
                </span>
              </div>
              <div>
                <span
                  style={{
                    padding: "4px",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  &#8377;{items.price-items.offer}.00
                </span>
                <span
                  style={{ padding: "4px", color: "grey", fontWeight: "200" }}
                >
                  <s>&#8377;{items.price}.00</s>
                </span>
                <span
                  style={{
                    padding: "4px",
                    color: "#00A100",
                    fontWeight: "400",
                  }}
                >
                  You Save &#8377;{items.offer}.00
                </span>
              </div>
            </div>
            <div className={classes.itemIcons}>
              <div>
                <DeleteOutline onClick={() => handleDelete(items)} />
              </div>
              <div>
                <QtySpinner
                  value={items.qtydemand}
                  onChange={(value) => handleQtyChange(value, items)}
                />
              </div>
            </div>
          </div>
          <div>
            <Divider />
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <br />
      <br />
      <div className={classes.superRoot}>
        <div className={classes.cartRoot}>
          <div className={classes.cartSubroot}>
            <div>
              <h2>My Cart ({keys.length})</h2>
            </div>
            <div className={classes.cartContainer}>
              <div className={classes.cartHeading}>
                <div>
                  <h3>Mobile Shop   ({keys.length} items)</h3>
                </div>
                <div>
                  <h3>&#8377; {total}.00</h3>
                </div>
              </div>
              <div>
                {values.length !== 0 ? (
                  <div>{showCartItems()}</div>
                ) : (
                  <div>
                    <img src="/empty-cart-icon.png" alt="FNF" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.paymentRoot}>
          <div className={classes.paymentSubroot}>
            <div>
              <h2>Stepper</h2>
            </div>
            <div className={classes.paymentContainer}>
              <div className={classes.paymentHeading}>
                <div className={classes.paymentInformation}>
                  <div>
                    <h3>Apply Coupon</h3>
                  </div>
                  <div>
                    <Button variant="text" color="secondary">
                      View All
                    </Button>
                  </div>
                </div>
                <div>
                  <Button variant="text" color="primary">
                    Log in
                  </Button>
                  to see best offers and cashback deals
                </div>
              </div>
            </div>

            <div className={classes.paymentContainer}>
              <div className={classes.paymentHeading}>
                <div>
                  <h3>Payment Details</h3>
                </div>
                <div>
                  <div
                    style={{ marginBottom: "4px", marginTop: "4px" }}
                    className={classes.paymentInformation}
                  >
                    <div>
                      <span
                        style={{
                          padding: "4px",
                          color: "grey",
                          fontWeight: "400",
                        }}
                      >
                        MRP Total
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "400" }}>
                        &#8377; {totalrate}.00
                      </span>
                    </div>
                  </div>
                  <Divider />
                  <div
                    style={{ marginBottom: "4px", marginTop: "4px" }}
                    className={classes.paymentInformation}
                  >
                    <div>
                      <span style={{ color: "grey", fontWeight: "400" }}>
                        Product Discount
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "400" }}>
                        - &#8377; {totalsaving}.00
                      </span>
                    </div>
                  </div>
                  <Divider />
                  <div
                    style={{ marginBottom: "4px", marginTop: "4px" }}
                    className={classes.paymentInformation}
                  >
                    <div>
                      <span style={{ fontWeight: "600" }}>Total Amount</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "600" }}>
                        &#8377; {total}.00
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <span
                      style={{
                        padding: "4px",
                        color: "#00A100",
                        fontWeight: "400",
                      }}
                    >
                      You Save &#8377;{totalsaving}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.icon}>
              <Button
                style={{ background: "#008ECC", color: "#FFF" }}
                fullWidth
                onClick={() => handlePlaceOrder()}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
