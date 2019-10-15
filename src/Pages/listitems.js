import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);

export const sideMainMenu = [
  {name: 'Dashboard',
  icon:'AssigmentIcon',
  subMenu: [
    {name: 'ds'},
    {name: 'ds2'},
    {name: 'Tables3'},
    {name: 'Tables4'}
  ]
},
  {name: 'Orders',
  icon:'AssigmentIcon'},
  {name: 'Customers',
  icon:'AssigmentIcon'},
  {name: 'Reports',
  icon:'AssigmentIcon',
  subMenu: [
    {name: 'Tables1'},
    {name: 'Tables2'},
    {name: 'Tables3'},
    {name: 'Tables4'}
  ]},
];

export const renderSubMenu = (mainMenuName) =>{
  const subitems = sideMainMenu.find((item)=> item.name === mainMenuName)
  
  return subitems.subMenu.map((i) =>{
    return (
      <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={i.name} />
    </ListItem>
    )
  })
}

 function render2ndMenu(name){
  const subitems = sideMainMenu.find((item)=> item.name === name)
  
  return subitems.subMenu.map((i) =>{
    return (
      <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={i.name} />
    </ListItem>
    )
  })
}

export const renderMainMenu = sideMainMenu.map((item)=>{
  return  (<ListItem button>
  <ListItemIcon>
    <DashboardIcon />
  </ListItemIcon>
  <ListItemText primary= {item.name} onClick={render2ndMenu('Dashboard')}/>
</ListItem>)
})

