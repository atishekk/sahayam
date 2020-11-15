import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '400px',
    height: '200px'
  },
  fabButton: {
    position: 'fixed',
    zIndex: 1,
    bottom: 40,
    right: 40
  }
}));

export default function UserModal({ user, signIn }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ position: 'relative' }}>
            <h1>this is modal content</h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
