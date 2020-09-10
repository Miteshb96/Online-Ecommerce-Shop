import React from 'react';
import './App.css';
import clsx from 'clsx';
import SneakersShop from "./component"
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ContactsIcon from '@material-ui/icons/Contacts';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const drawerWidth = "50%";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    color: "white !important"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundImage: "url('https://sneakerize.gr/wp-content/uploads/2018/12/Sneaker-Feature-.jpg')"
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const IconStyle = {display:"flex", justifyContent: "center"}
  const TextStyle = { color: "white"}
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <header className="header">
        {"Shoe Store"}
      </header>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={!open ? handleDrawerOpen : handleDrawerClose}>
            {open ? <ChevronLeftIcon color="secondary" fontSize="large" /> : <MenuIcon color="inherit" fontSize="default"/> }
          </IconButton>
        </div>
        <List>
          <ListItem button key={"About"}>
            <ListItemIcon  style={IconStyle}> <InfoIcon color={open ? "secondary" : "inherit"} fontSize="default" /> </ListItemIcon>
            <ListItemText style={TextStyle} primary={"About"} />
          </ListItem>
          <ListItem button key={"Accessories"}>
            <ListItemIcon style={IconStyle}> <InboxIcon color={open ? "secondary" : "inherit"} fontSize="default" /> </ListItemIcon>
            <ListItemText style={TextStyle} primary={"Accessories"} />
          </ListItem>
          <ListItem button key={"Store"}>
            <ListItemIcon style={IconStyle}> <LocalGroceryStoreIcon color={open ? "secondary" : "inherit"} fontSize="default" /> </ListItemIcon>
            <ListItemText style={TextStyle} primary={"Store"} />
          </ListItem>
          <ListItem button key={"Contact Us"}>
            <ListItemIcon style={IconStyle}> <ContactsIcon color={open ? "secondary" : "inherit"} fontSize="default" /> </ListItemIcon>
            <ListItemText style={TextStyle} primary={"Contact Us"} />
          </ListItem>
        </List>
      </Drawer>
      <SneakersShop />
    </div>
  );
}

export default App;
