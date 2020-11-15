import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Chip,
} from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

// import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { Button } from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "650px",
    height: "690px",
  },
  fabButton: {
    position: "fixed",
    zIndex: 1,
    bottom: 40,
    right: 40,
  },
  containerStyle: {
    // marginTop: "80px",
    // border: "1px solid #e0e0e0",
  },
  labelStyles: {
    marginLeft: "5%",
    position: "absolute",
    bottom: 0,
    paddingTop: "6px",
    paddingBottom: "20px",
  },
  inputContainer: {
    position: "relative",
    marginTop: "2%",
  },
  inputStyles: {},
}));

const theme = createMuiTheme({
  root: {
    flexGrow: 1,
  },
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: ["sans-serif", "-apple-system", "BlinkMacSystemFont"].join(","),
  },
});
export default function UserModal({ user, signIn }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [sugg, setSugg] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const IconShow = () => {
    return (
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fabButton}
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon />
      </Fab>
    );
  };

  return (
    <div>
      <IconShow />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ position: "relative" }}>
            {/* <h1>this is modal content</h1> */}
            <ThemeProvider theme={theme}>
              <Container
                maxWidth="md"
                className={classes.containerStyle}
                style={{ backgroundColor: "#fff" }}
              >
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "#fff",
                    height: "15vh",
                    marginTop: "10px",
                  }}
                >
                  <Typography variant="h4" style={{ textAlign: "center" }}>
                    Add Event
                  </Typography>
                  <div className={classes.root}>
                    <Grid container spacing={1}>
                      <Grid
                        container
                        item
                        xs={12}
                        spacing={3}
                        className={classes.inputContainer}
                      >
                        <Grid item xs={4}>
                          <Typography className={classes.labelStyles}>
                            Title
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            type="text"
                            variant="standard"
                            label="Title"
                            className={classes.inputStyles}
                            value={title}
                            fullWidth
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        spacing={3}
                        className={classes.inputContainer}
                      >
                        <Grid item xs={4}>
                          <Typography className={classes.labelStyles}>
                            Time of event
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            type="time"
                            variant="standard"
                            // label="Time"
                            className={classes.inputStyles}
                            value={time}
                            fullWidth
                            onChange={(e) => setTime(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        spacing={3}
                        className={classes.inputContainer}
                      >
                        <Grid item xs={4}>
                          <Typography className={classes.labelStyles}>
                            Date of event
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            type="date"
                            variant="standard"
                            // label="date"
                            className={classes.inputStyles}
                            value={date}
                            fullWidth
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        item
                        xs={12}
                        spacing={3}
                        className={classes.inputContainer}
                      >
                        <Grid item xs={4}>
                          <Typography className={classes.labelStyles}>
                            Description
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            type="text"
                            variant="standard"
                            label="Description"
                            className={classes.inputStyles}
                            value={description}
                            fullWidth
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        spacing={3}
                        className={classes.inputContainer}
                      >
                        <Grid item xs={4}>
                          <Typography className={classes.labelStyles}>
                            Image
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            type="url"
                            variant="standard"
                            label="mage"
                            className={classes.inputStyles}
                            value={image}
                            fullWidth
                            onChange={(e) => setImage(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        spacing={3}
                        className={classes.inputContainer}
                      >
                        <Grid item xs={4}>
                          <Typography className={classes.labelStyles}>
                            Job Suggestion
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            type="text"
                            variant="standard"
                            label="Job Suggestion"
                            className={classes.inputStyles}
                            value={sugg}
                            fullWidth
                            onChange={(e) => setSugg(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{
                          margin: "60px auto",
                          borderRadius: "50px",
                          padding: "12px 20px",
                        }}
                        // onClick={onFormSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </div>
                </Typography>
              </Container>
            </ThemeProvider>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
