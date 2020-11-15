import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function MainUI() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to={"/"} color={"inherit"}>
              Sahayam
            </Link>
          </Typography>
          <Link to={"/createuser"}>
            <Button>Create</Button>
          </Link>
          <Link to={"/signin"}>
            <Button>SignIn</Button>
          </Link>
          <Link to={"/dashboardUser"}>
            <Button>DashBoard (USER)</Button>
          </Link>
          <Link to={"/dashboardNGO"}>
            <Button>DashBoard (NGO)</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
