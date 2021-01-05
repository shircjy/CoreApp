import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import TabPane from './TabPane';
import BreadCrumb from './BreadCrumb';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const OrderListView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Orders"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <TabPane />
      </Container>
    </Page>
  );
};

export default OrderListView;
