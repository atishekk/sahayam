import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid, Card, Typography, CssBaseline } from '@material-ui/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import EventInput from './Modal/EventInput';

import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  EventContainer: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  cardStyle: {
    margin: '8px',
    border: '0.8px solid #e0e0e0',
    textAlign: 'left',
    borderRadius: '4px',
    padding: '5px 8px'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#f50057'
    }
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif', '-apple-system', 'BlinkMacSystemFont'].join(',')
  }
});

function NGOdashboard() {
  const classes = useStyles();

  const db = firebase.firestore();
  const [show, setShow] = useState(false);
  const [uid, setUid] = useState('');
  const [events, setEvents] = useState('');
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    let dataItems = [];
    if (firebase.auth().currentUser) setUid(firebase.auth().currentUser.uid);
    const getdata = async () => {
      if (uid != '') {
        const NGOevents = db.collection('NGOevents').doc(uid);
        const listOfEvents = await NGOevents.get();
        if (listOfEvents.data() != null) dataItems = listOfEvents.data().events;
      }

      const eventsRef = db.collection('events');
      const snapshot = await eventsRef.get();

      let documents = [];
      snapshot.forEach((doc) => {
        dataItems.forEach((e) => parseInt(e));

        if (dataItems.length != 0 && dataItems.includes(doc.id)) {
          documents.push({ ...doc.data() });
        }
      });
      const newData = {};
      documents.forEach((doc, index) => {
        newData[index + 1] = {
          id: index + 1,
          title: doc.title,
          description: doc.description,
          date: doc.date,
          time: doc.time,
          image: doc.image,
          sugg: doc.sugg
        };
      });
      setEvents(newData);
      // console.log(events);
    };
    getdata();
  }, [events]);

  const getEventCard = (id) => {
    const { title, description, date, time, image, sugg } = events[id];
    return (
      <Grid item sm={3} xs={12} key={id}>
        <Card className={classes.cardStyle}>
          <CardHeader title={title} subheader={date} />
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350
"
            title={title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>{description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <EventInput uid={uid} />
        <Grid container className={classes.EventContainer}>
          {Object.keys(events).map((id) => getEventCard(id))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default NGOdashboard;
