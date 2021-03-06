import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popup from './Popup';
import { Divider, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ScanButton } from 'src/components/Buttons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="STEP 1: SCAN FRUIT "
            
            {...a11yProps('one')}
          />
          <Tab value="two" label="STEP 2: WEIGH FRUIT" {...a11yProps('two')} />
          <Tab value="three" label="STEP 3: CHECK DETAILS" {...a11yProps('three')} />
          <Tab value="four" label="STEP 4: COMPLETE TASK" {...a11yProps('three')} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index="one">
        <p>Instruction: Weigh 5KG of Apples</p>
        <p>Fruit Type: Apple</p>
        <p>Weight: 5KG</p> <br />
        <Divider />
        <br /><p><b><h3> You need to scan the fruit to detect fruit type </h3></b></p>
        <p>1. Put the fruit infront of the camera and click on the 'Scan Fruit' button </p>
        <p>2. Wait for the confirmation screen to load</p>
        <p>3. Click OK to proceed to the next step</p> <br />

        <Popup />
      </TabPanel>

      <TabPanel value={value} index="two">
        <p>Instruction: Weigh 5KG of Apples</p>
        <p>Fruit Type: Apple</p>
        <p>Weight: 5KG</p> <br />
        <Divider />
        <br /><p><b><h3> You need to weigh the fruit to the expected weight </h3></b></p>
        <p>1. Put the fruit on the weighing scale </p>
        <p>2. The machine will auto take note of the weight</p>
        <p>3. Once the weight is achieved, you can proceed to the next step</p>
      </TabPanel>

      <TabPanel value={value} index="three">
        <p>Instruction: Weigh 5KG of Apples</p>
        <p>Fruit Type: Apple</p>
        <p>Weight: 5KG</p> <br />
        <Divider />
        <br /><p>Fruit Detected: </p>
        <p>Weight Detected: </p>
        <Grid container>
          <p>Comment(s): </p>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" size="small" label="" variant="outlined" />
          </form>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index="four">
        <p>Instruction: Weigh 5KG of Apples</p>
        <p>Fruit Type: Apple</p>
        <p>Weight: 5KG</p> <br />
        <Divider />
        <Grid container spacing={3}>
          <Grid item align="left">
            <CheckCircleIcon color="primary"/>
          </Grid>
          <Grid item xs={10} align="left">
            <b><p>Completed!</p></b>
          </Grid>
        </Grid>
        <p>Fruit Detected: </p>
        <p>Weight Detected: </p>
        <p>Comment(s): </p>
        

      </TabPanel>
    </div>
  );
}
