import React from 'react';
import
{
  Container,
  Grid,
  Paper,
  makeStyles,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import BreadCrumb from './BreadCrumb';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import { IssuesButton } from 'src/components/Buttons';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  icons: {
    verticalAlign: 'middle',
  }, item: {
    verticalAlign: 'center',
    textAlign: 'center',
  }, 
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <Box
          display="flex"
          justifyContent="flex-end"
          mb={1}
        >          
        </Box>

        <div>

        <Grid container spacing={3}>
            <Grid item sm={4}>
              <Typography> <Paper className={classes.paper}><ErrorIcon color='primary' /> You have <b><u>2</u></b> uncompleted orders </Paper> </Typography>
            </Grid>
          </Grid>

          <Box
            display="flex"
            justifyContent="flex-end"
            mb={3}
          >
          </Box>

        <Grid container spacing={3}>
            <Grid item sm={5} align="center">
            
              <Button variant="contained" color="primary" style={{ maxWidth: '35px', maxHeight: '350px', minWidth: '350px', minHeight: '350px' }} fullWidth href='/app/customers'>
                <div class="item">
                  <AssignmentIcon style={{ maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: '200px' }} />
                  <center>ORDERS</center>
                </div>
              </Button>
            </Grid>

            <Grid item sm={5} align="center">

              <IssuesButton variant="contained" style={{ maxWidth: '350px', maxHeight: '350px', minWidth: '350px', minHeight: '350px' }} fullWidth>
                <div class="item">
                  <WarningIcon style={{ maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: '200px' }} /> 
                  <center>ISSUES</center>
                </div>
              </IssuesButton>
            </Grid>

        </Grid>
          </div>
      </Container>
    </Page>
  );
};

export default Dashboard;
