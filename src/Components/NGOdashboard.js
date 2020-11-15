import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import EventInput from './Modal/EventInput';

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
  const [show, setShow] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <EventInput />
      </ThemeProvider>
    </div>
  );
}

export default NGOdashboard;
