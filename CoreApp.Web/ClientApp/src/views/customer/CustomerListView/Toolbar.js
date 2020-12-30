import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import
{
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

import { OkButton, ActionButton, CancelButton } from 'src/components/Buttons';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginCenter: theme.spacing(1)
  },
  exportButton: {
    marginCenter: theme.spacing(1),
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
        <ActionButton variant="contained" className={classes.exportButton}>
          rescan
        </ActionButton>
        <OkButton variant="contained" className={classes.exportButton}>
          ok
        </OkButton>
        <CancelButton variant="contained">
          cancel
        </CancelButton>
      </Box>
      
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
