import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

const useStyles = makeStyles({
  fabButton: {
    position: 'fixed',
    zIndex: 1,
    bottom: 40,
    right: 40
  }
});

function NGOdashboard() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fabButton}
          onClick={() => setShow(!show)}
        >
          <AddIcon />
        </Fab>
      </ThemeProvider>
    </div>
  );
}

export default NGOdashboard;
