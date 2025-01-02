import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./header";
import Paper from "@material-ui/core/Paper";
import { getData,postData, ServerURL } from "../Admin/FetchNodeService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./footer";
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
    width: 200,
    height: 250, 
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

export default function ConsoleList(props) {
  const classes = useStyles();
  const [listConsole, setListConsole] = useState([]);

 // alert(props.history.location.state.categoryid)
  //console.log(props.history.location);
  var categoryid = props.history.location.state.categoryid;
  var dispatch=useDispatch()

  const fetchAllSubCategories = async () => {
    var body = { categoryid: categoryid };
    var list = await postData(
      "subcategory/displayallsubcategorybycategoryid",body
    );

    setListConsole(list);
  };
/////////////////////////////
/*  const handleQtyChange=(value,item)=>{
   // console.log(item);
    if(value==0)
    {dispatch({type:'REMOVE_CART',payload:[item.subcategoryid]})}
    else {
    item['qtydemand']=value;
//    alert(JSON.stringify(item))
    dispatch({type:'ADD_CART',payload:[item.subcategoryid,item]})
    }
    setPageRender(!pageRender);
  }
*/
////////////////////////////
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
              margin: 15,
            }}

          
          >
            <Paper  elevation={1} className={classes.paperstyle}>
              <div style={{alignSelf:'center'}} 
              //onClick={()=>props.history.push({"pathname":"/productView"},{'product':item})} 
              >
                <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="150" height='160px'/>
            
              </div>
              
              <div style={{ fontSize: 14, fontWeight: "bold", padding: 10 }}>
                {item.subcategoryname.length <= 20
                  ? item.subcategoryname.toUpperCase()
                  : item.subcategoryname.toUpperCase().substring(0, 18) + ".."}
              </div>
           {/*   <div style={{ fontSize: 16, padding: 10 }}>
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
                <QtySpinner value={0} onChange={(value)=>handleQtyChange(value,item)}/> 
              </div>
           */}
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
      <Footer />
    </div>
  );
}
