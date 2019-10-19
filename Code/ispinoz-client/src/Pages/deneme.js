import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import WebsiteIcon from '../images/european.png';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import GestureIcon from '@material-ui/icons/Gesture';
import SubjectIcon from '@material-ui/icons/Subject';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MapIcon from '@material-ui/icons/Map';

import {Icon} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    AppBarLeftMargin: {
        marginLeft: '100px',
    },
    settingsMargin: {
        marginLeft : '630px'
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    // eklenti
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    //eklenti

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h5" noWrap>
                        <img src={WebsiteIcon} height={30} width={30} />
                        İspinoz
                    </Typography>
                    <List  className="list">
                        <ListItem className={classes.AppBarLeftMargin}>
                            <Typography variant="h5" noWrap>
                                <Button color="inherit" component={Link} to="/">Ana Sayfa</Button>
                                <Button color="inherit" component={Link} to="/lectures">Dersler</Button>
                                <Button color="inherit" component={Link} to="/practices">Problemler</Button>
                                <Button color="inherit" component={Link} to="/quiz">Quiz</Button>
                            </Typography>
                        </ListItem>
                    </List>

                    <List  className="list">
                        <ListItem className={classes.settingsMargin} >
                            <Typography >
                                <IconButton onClick={toggleDrawer("right" ,true)} color="inherit"  aria-label="settings">
                                    <SettingsIcon />
                                </IconButton>
                            </Typography>
                        </ListItem>
                    </List>


                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.toolbar} />
                <List>
                    <ListItem button component={Link} to="/deneme">
                        <ListItemIcon> <GestureIcon /> </ListItemIcon>
                        <ListItemText primary="GA Nedir?" />
                    </ListItem>

                    <ListItem  button onClick={handleClick}>
                        <ListItemIcon> <SubjectIcon /> </ListItemIcon>
                        <ListItemText primary="GA Terimleri" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Mutasyon" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Çarprazlama" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Fitness" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />
                    <ListItem button >
                        <ListItemIcon> <ShoppingBasketIcon /> </ListItemIcon>
                        <ListItemText primary="Knapsack Problemi" />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon> <MapIcon /> </ListItemIcon>
                        <ListItemText primary="TSP Problemi" />
                    </ListItem>


                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                    {sideList('right')}
                </Drawer>

                <p> Deneme Page</p>
            </main>


        </div>
    );
}