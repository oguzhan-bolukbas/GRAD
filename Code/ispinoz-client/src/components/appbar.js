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
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GestureIcon from '@material-ui/icons/Gesture';
import SubjectIcon from '@material-ui/icons/Subject';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    align: "center",
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
  const [openGATerm, setOpenGATerms] = React.useState(false);
  const [openGAProblems, setOpenGAProblems] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClickGATerms = () => {
    setOpenGATerms(!openGATerm);
  };

  const handleClickGAProblems = () => {
    setOpenGAProblems(!openGAProblems);
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
          <Typography variant="h5" noWrap className={classes.title}>
            İspinoz
          </Typography>
          <Button color="inherit" className={classes.button} component={Link} to="/">Dersler</Button>
          <Button color="inherit" className={classes.button} component={Link} to="/problemler">Problemler</Button>
          <Button color="inherit" className={classes.button} component={Link} to="/quiz">Quiz</Button>
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
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}/>
        <List>
          <ListItem button component={Link} to="/GAnedir">
            <ListItemIcon> <GestureIcon /> </ListItemIcon>
            <ListItemText primary="GA Nedir?" />
          </ListItem>

          <ListItem  button onClick={handleClickGATerms}>
            <ListItemIcon> <MenuBookIcon /> </ListItemIcon>
            <ListItemText primary="GA Terimleri" />
            {openGATerm ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openGATerm} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} component={Link} to="/mutasyon">

                <ListItemText primary="Mutasyon" />

              </ListItem>
              <ListItem button className={classes.nested} component={Link} to="/Çaprazlama">
                <ListItemText primary="Çaprazlama" />
              </ListItem>
              <ListItem button className={classes.nested} component={Link} to="/uygunluk">
                <ListItemText primary="Fitness" />
              </ListItem>
            </List>
          </Collapse>

          <Divider />

          <ListItem  button onClick={handleClickGAProblems}>
            <ListItemIcon> <SubjectIcon /> </ListItemIcon>
            <ListItemText primary="Problemler" />
            {openGAProblems ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openGAProblems} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button >
                <ListItemText primary="Sırt Çantası Problemi" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Gezici Satıcı Problemi" />
              </ListItem>
            </List>
          </Collapse>


        </List>
        <Divider />


      </Drawer>
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
          <ListItem button>
            <ListItemIcon> <PersonIcon /> </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItem>

          <ListItem button>
            <ListItemIcon> <HistoryIcon /> </ListItemIcon>
            <ListItemText primary="Öğrenme Geçmişi" />
          </ListItem>

          <ListItem button>
            <ListItemIcon> <SettingsIcon /> </ListItemIcon>
            <ListItemText primary="Ayarlar" />
          </ListItem>

        </List>
      </Drawer>
    </div>
);
}