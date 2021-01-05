import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Button,
  colors,
  Grid,
  Paper,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import RFID from './RFID';
import ManualLogin from './ManualLogin';
import { Divider } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
}));

const LoginView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      
      <Container maxWidth="lg">
        
        <h1> WorkStation 10 </h1>
        <Divider />

        <div className={classes.root}>
          <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={1} align="center">
                <ErrorIcon color='primary' style={{ maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px' }} />
            </Grid>
            <Grid item xs={10} align="left">
              <p>Welcome to WorkStation 10!</p>
              <p>Please login manually or tap your staff card on the RFID reader to login</p>
              <p>For help and support, please click on the help icon.</p>
            </Grid>
            </Grid>
            </Paper>
        </div>


        <div className={classes.root}>
          <Grid container spacing={3}>
              <Grid item xs={6} align="center">
              <ManualLogin />
            </Grid>
            <Grid item xs={6} align="center">
               <RFID />
            </Grid>
          </Grid>
        </div>
      
        </Container>
    </Page>
  );
};

export default LoginView;
