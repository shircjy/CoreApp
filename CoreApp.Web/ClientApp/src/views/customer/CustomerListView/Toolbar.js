import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import
{
  Box,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

import { OkButton, ActionButton, CancelButton } from 'src/components/Buttons';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginCenter: theme.spacing(2)
  },
  exportButton: {
    marginCenter: theme.spacing(2),
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Grid container spacing={3}>
          <Grid item >
            <ActionButton variant="contained" className={classes.exportButton}>
              rescan
            </ActionButton>
          </Grid>
          
          <Grid item >
            <OkButton variant="contained" className={classes.exportButton}>
              ok
            </OkButton>
          </Grid>

          <Grid item>
            <CancelButton variant="contained">
              cancel
            </CancelButton>
          </Grid>
        </Grid>
        
        
        
        
      </Box>
      
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
