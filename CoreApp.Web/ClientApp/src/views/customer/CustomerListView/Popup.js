import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Toolbar from './Toolbar';
import { ScanButton } from 'src/components/Buttons';
import Image from "src/assets/apple.jpg";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  ScanButton: {
    float:'right',
  },
  item: {
    verticalAlign: 'center',
    textAlign: 'center',
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      > 
      <ScanButton variant="outlined" color="primary" onClick={handleClickOpen}>
        Scan Fruit
      </ScanButton></Box>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Scan Fruit
        </DialogTitle>
        
        <DialogContent dividers>
          
          <Typography gutterBottom>
            <Grid container spacing={3}>
              <Grid item align="left">
                <img
                  height="300px"
                  src={Image}
                />
              </Grid>
              <Box display="flex"
                width={300} height={300}
                alignItems="center"
                justifyContent="center">
              <Grid item >
                <b><p>Object Detected: Apple </p>
                <br /><p>Confidence Level: 88.53% </p>
                <br /><p>Match: Yes </p></b>
                </Grid>
              </Box>
            </Grid>
          </Typography>
          </DialogContent>
            <DialogContent dividers>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Toolbar /> </Box>

          
        </DialogContent>
      </Dialog>
    </div>
  );
}
