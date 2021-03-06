import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const styles = {
  dialog: {
    maxWidth: 1280
  },
  dialogDiv: {
    width: 1280,
    height: 720,
    display: "flex",
  },
  imageDiv: {
    width: 720,
    height: 720
  },
  img: {
    width: 720,
    height: 720,
    objectFit: "contain"
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

const imgUrl = "https://lh3.googleusercontent.com/z378T1CMLctJwPNJmyWx-g2pOVzxW_IpFAVzv5Z0hVQH2d2xhbGFURHkFCIHTXslevuhCUXjjuM-FgJa_D1GK4T7vjKtU8uZqgCFIg=s0";


function DetailsDialog(props) {
  const { classes } = props;
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialogDiv}>
        <div className={classes.imageDiv}>
          <img src={imgUrl} className={classes.img}></img>
        </div>
        <div className={classes.des}>
          price: 120
          <Button color="primary" className={classes.button}>
            Buy
          </Button>
          <Button color="primary" className={classes.button}>
            Go on Sale
          </Button>
        </div>
      </div>
      
    </Dialog>
  );
}

export default withStyles(styles)(DetailsDialog);