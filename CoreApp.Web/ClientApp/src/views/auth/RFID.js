import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Image from "src/assets/rfid.PNG";
import { RFIDButton } from 'src/components/Buttons';

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
  item: {
    verticalAlign: 'top',
    textAlign: 'center',
  },  
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
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
      <RFIDButton variant="contained" style={{ maxWidth: '350px', maxHeight: '350px', minWidth: '350px', minHeight: '350px' }} onClick={handleClickOpen} fullWidth>
        <div class="item">
          <RecentActorsIcon style={{ maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: '200px' }} />
          <center>LOGIN USING RFID </center>
        </div>
      </RFIDButton>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} color="primary">
          Login via Staff Card
        </DialogTitle>
         

        <DialogContent dividers>
          <Typography gutterBottom>
            <img
              height="200px"
              src={Image}
              style={{
                padding: "10px",
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            />
            <center><b> Reading RFID ... </b></center>
          </Typography>
        </DialogContent>

      </Dialog>
    </div>
  );
}
