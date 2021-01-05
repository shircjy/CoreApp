import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4)
  },
}),);

/**
 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} event
 */
function handleClick(event) {
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1> WorkStation 10 </h1>
      <Divider />
    </div>
  );
}
