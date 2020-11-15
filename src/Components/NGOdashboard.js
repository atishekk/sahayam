import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import EventInput from './Modal/EventInput';

const useStyles = makeStyles({
  EventContainer: {
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px'
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
  const classes = makeStyles();

  const db = firebase.firestore();
  const [show, setShow] = useState(false);
  const [uid, setUid] = useState('');
  const [events, setEvents] = useState('');

  useEffect(() => {
    setUid(firebase.auth().currentUser.uid);
    let dataItems = [];

    const getdata = async () => {
      if (uid != '') {
        const NGOevents = db.collection('NGOevents').doc(uid);
        const listOfEvents = await NGOevents.get();
        dataItems = listOfEvents.data().events;
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
    const { title, description, date, image, sugg } = events[id];
    return (
      <Grid item sm={3} xs={12} key={id}>
        {(title, description, date)}
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
