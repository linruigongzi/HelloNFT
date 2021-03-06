import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  button: {
  },
  toolbar: {
    justifyContent: "space-between"
  },
  menu: {
    display: "flex",
    justifyContent: "space-evenly",
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            Icon
          </Typography>

          <div className={classes.menu}>
            <Button color="primary" className={classes.button}>
              Home
            </Button>
            <Button color="primary" className={classes.button}>
              Bid
            </Button>
            <Button color="primary" className={classes.button}>
              DAO
            </Button>
          </div>

          <Button variant="outlined" color="primary" className={classes.button}>
            Connect Wallet
          </Button>
        </Toolbar>

      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);