import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ButtonBase from "@material-ui/core/ButtonBase";
import European from "../images/European.png";
import Grid from "@material-ui/core/Grid";
import {EmojiFlagsTwoTone} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  button: {
    align: "center",
    marginLeft: "10px",
    marginRight: "10px"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="fixed" className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      >
        <Toolbar>
          <Grid item className={classes.title}>
            <ButtonBase component={Link} to={"/"}>
              <img className={classes.img} alt="complex" src={European} width={50}/>
            </ButtonBase>
            <ButtonBase className={classes.image} component={Link} to={"/"}>
              <Typography variant="h6" color="inherit">İSPİNOZ</Typography>
            </ButtonBase>
          </Grid>
          <ButtonBase className={classes.button} component={Link} to={"/"}>
            <Typography variant="subtitle1" color="inherit">ANA SAYFA</Typography>
          </ButtonBase>
          <ButtonBase className={classes.button} component={Link} to={"/problemler"}>
            <Typography variant="subtitle1" color="inherit">PROBLEMLER</Typography>
          </ButtonBase>
          <ButtonBase className={classes.button} component={Link} to={"/quiz"}>
            <Typography variant="subtitle1" color="inherit">QUIZ</Typography>
          </ButtonBase>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <AccountBoxIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.toolbar}/>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          <ListItem button component={Link} to="/profil">
            <ListItemIcon> <PersonIcon /> </ListItemIcon>
            <ListItemText primary="Profil"/>
          </ListItem>
          <ListItem button component={Link} to="/genel-puan-tablosu">
            <ListItemIcon> <EmojiFlagsTwoTone /> </ListItemIcon>
            <ListItemText primary="Genel Puan Geçmişi"/>
          </ListItem>

        </List>
      </Drawer>
    </div>
  );
}