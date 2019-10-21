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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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
          <Typography variant="h5" noWrap className={classes.title}>
            İspinoz
          </Typography>
          <Button color="inherit" className={classes.button} component={Link} to="/lecture">Lectures</Button>
          <Button color="inherit" className={classes.button} component={Link} to="/practice">Practices</Button>
          <Button color="inherit" className={classes.button} component={Link} to="/quiz">Quizes</Button>
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
          <Typography paragraph>
              <h2>İstiklal Marşı</h2>
          </Typography>
        <Typography paragraph>
          Korkma, sönmez bu şafaklarda yüzen al sancak;<br/>
          Sönmeden yurdumun üstünde tüten en son ocak.<br/>
          O benim milletimin yıldızıdır, parlayacak;<br/>
          O benimdir, o benim milletimindir ancak.
        </Typography>
        <Typography paragraph>
          Çatma, kurban olayım, çehreni ey nazlı hilal!<br/>
          Kahraman ırkıma bir gül! Ne bu şiddet, bu celal?<br/>
          Sana olmaz dökülen kanlarımız sonra helal...<br/>
          Hakkıdır, hakk'a tapan, milletimin istiklal!
        </Typography>
        <Typography paragraph>
          Ben ezelden beridir hür yaşadım, hür yaşarım.<br/>
          Hangi çılgın bana zincir vuracakmış? Şaşarım!<br/>
          Kükremiş sel gibiyim, bendimi çiğner, aşarım.<br/>
          Yırtarım dağları, enginlere sığmam, taşarım.
        </Typography>
        <Typography paragraph>
          Garbın afakını sarmışsa çelik zırhlı duvar,<br/>
          Benim iman dolu göğsüm gibi serhaddim var.<br/>
          Ulusun, korkma! Nasıl böyle bir imanı boğar,<br/>
          'Medeniyet!' dediğin tek dişi kalmış canavar?
        </Typography>
        <Typography paragraph>
          Arkadaş! Yurduma alçakları uğratma, sakın.<br/>
          Siper et gövdeni, dursun bu hayasızca akın.<br/>
          Doğacaktır sana va'dettigi günler hakk'ın...<br/>
          Kim bilir, belki yarın, belki yarından da yakın.
        </Typography>
        <Typography paragraph>
          Bastığın yerleri 'toprak!' diyerek geçme, tanı:<br/>
          Düşün altında binlerce kefensiz yatanı.<br/>
          Sen şehit oğlusun, incitme, yazıktır, atanı:<br/>
          Verme, dünyaları alsan da, bu cennet vatanı.
        </Typography>
        <Typography paragraph>
          Kim bu cennet vatanın uğruna olmaz ki feda?<br/>
          Şuheda fışkıracak toprağı sıksan, şuheda!<br/>
          Canı, cananı, bütün varımı alsın da hüda,<br/>
          Etmesin tek vatanımdan beni dünyada cüda.
        </Typography>
        <Typography paragraph>
          Ruhumun senden, ilahi, şudur ancak emeli:<br/>
          Değmesin mabedimin göğsüne namahrem eli.<br/>
          Bu ezanlar-ki şahadetleri dinin temeli,<br/>
          Ebedi yurdumun üstünde benim inlemeli.
        </Typography>
        <Typography paragraph>
          O zaman vecd ile bin secde eder -varsa- taşım,<br/>
          Her cerihamdan, ilahi, boşanıp kanlı yaşım,<br/>
          Fışkırır ruh-i mücerred gibi yerden na'şım;<br/>
          O zaman yükselerek arsa değer belki başım.
        </Typography>
        <Typography paragraph>
          Dalgalan sen de şafaklar gibi ey şanlı hilal!<br/>
          Olsun artık dökülen kanlarımın hepsi helal.<br/>
          Ebediyen sana yok, ırkıma yok izmihlal:<br/>
          Hakkıdır, hür yaşamış, bayrağımın hürriyet;<br/>
          Hakkıdır, hakk'a tapan, milletimin istiklal!
        </Typography>
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
);
}