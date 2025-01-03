import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ListIcon from '@material-ui/icons/List';
import DevicesIcon from '@material-ui/icons/Devices';
import BookIcon from '@material-ui/icons/Book';
import ReceiptIcon from '@material-ui/icons/Receipt';

import CategoryInterface from './CategoryInterface';
import DisplayAllCategory from "./DisplayAllCategory"
import SubCategoryInterface from "./SubCategoryInterface"
import DisplayAllSubCategories from "./DisplayAllSubCategories"
import MobileInterface from "./MobileInterface"
import DisplayMobiles from "./DisplayMobiles"
import MobilePicture from './MobilePicture';
import DisplayOrders from './DisplayOrders'
import DisplayOrdersDetails from './DisplayOrdersDetails';
export default function ListItems(props){


  const handleClick=(v)=>{
    props.setComponent(v)
  }
return(
 <div>
 <div>
    <ListItem button>
      <ListItemIcon>
      <CategoryIcon onClick={()=>handleClick(<CategoryInterface/>)}/>
      </ListItemIcon>
      <ListItemText primary="Category" onClick={()=>handleClick(<CategoryInterface/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <ListIcon onClick={()=>handleClick(<DisplayAllCategory/>)}/>
      </ListItemIcon>
      <ListItemText primary="List Category" onClick={()=>handleClick(<DisplayAllCategory/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountTreeIcon onClick={()=>handleClick(<SubCategoryInterface/>)}/>
      </ListItemIcon>
      <ListItemText primary="Subcategories" onClick={()=>handleClick(<SubCategoryInterface/>)}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <ListIcon onClick={()=>handleClick(<DisplayAllSubCategories/>)}/>
      </ListItemIcon>
      <ListItemText primary="List subcategories" onClick={()=>handleClick(<DisplayAllSubCategories/>)} />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <DevicesIcon onClick={()=>handleClick(<MobileInterface/>)}/>
      </ListItemIcon>
      <ListItemText primary="Add Product" onClick={()=>handleClick(<MobileInterface/>)} />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <ListIcon onClick={()=>handleClick(<DisplayMobiles/>)}/>
      </ListItemIcon>
      <ListItemText primary="List Mobile" onClick={()=>handleClick(<DisplayMobiles/>)}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddPhotoAlternateIcon onClick={()=>handleClick(<MobilePicture/>)}/>
      </ListItemIcon>
      <ListItemText primary="Mobile Pictures" onClick={()=>handleClick(<MobilePicture/>)}/>
    </ListItem>
 {/*    <ListItem button>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="List Pictures" onClick={()=>handleClick(<DisplayMobilePicture/>)}/>
    </ListItem>
*/}
  </div>

  <div>
    <hr></hr>
    <ListSubheader inset>Saved Reports</ListSubheader>
    <hr></hr>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon onClick={()=>handleClick(<DisplayOrders/>)}/>
      </ListItemIcon>
      <ListItemText primary="Genrate Orders" onClick={()=>handleClick(<DisplayOrders/>)}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BookIcon onClick={()=>handleClick(<DisplayOrdersDetails/>)}/>
      </ListItemIcon>
      <ListItemText primary="Orders Details" onClick={()=>handleClick(<DisplayOrdersDetails/>)}/>
    </ListItem>

  </div>
  </div>
);
}