import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Button, Chip } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import firebase from 'firebase/app';
import 'firebase/auth';

import { Auth } from '../firebase/config';

const useStyles = makeStyles({
  containerStyle: {
    marginTop: '80px',
    border: '1px solid #e0e0e0'
  },
  labelStyles: {
    marginLeft: '5%',
    position: 'absolute',
    bottom: 0,
    paddingTop: '6px',
    paddingBottom: '20px'
  },
  inputContainer: {
    position: 'relative',
    marginTop: '4%'
  },
  inputStyles: {},
  radios: {
    margin: '30px auto',
    height: '50px',
    width: '50%',

    display: 'flex',
    justifyContent: 'space-between'
  }
});

const theme = createMuiTheme({
  root: {
    flexGrow: 1
  },
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#f50057'
    }
  },
  typography: {
    fontFamily: ['sans-serif', '-apple-system', 'BlinkMacSystemFont'].join(',')
  }
});

function CreateUser() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const onFormSubmit = async () => {
    if (email === '' || password === '') {
      console.log('email password cant be blank');
    }

    Auth.createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log('added');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="md"
          className={classes.containerStyle}
          style={{ backgroundColor: '#fff' }}
        >
          <Typography
            component="div"
            style={{ backgroundColor: '#fff', height: '45vh', marginTop: '10px' }}
          >
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              SIGNUP
            </Typography>
            <div>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3} className={classes.inputContainer}>
                  <Grid item xs={4}>
                    <Typography className={classes.labelStyles}>Email</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      type="email"
                      variant="standard"
                      label="Email"
                      className={classes.inputStyles}
                      value={email}
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3} className={classes.inputContainer}>
                  <Grid item xs={4}>
                    <Typography className={classes.labelStyles}>Password</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      type="password"
                      variant="standard"
                      label="Password"
                      className={classes.inputStyles}
                      value={password}
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <RadioGroup
                  aria-label="Select Role"
                  name="role"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className={classes.radios}
                >
                  <FormControlLabel
                    value="NGO"
                    control={<Radio />}
                    label="NGO"
                    style={{ marginRight: '100px' }}
                  />
                  <FormControlLabel value="volunteer" control={<Radio />} label="Volunteer" />
                </RadioGroup>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: '100px auto', borderRadius: '50px', padding: '10px 20px' }}
                  onClick={onFormSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </div>
          </Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default CreateUser;
