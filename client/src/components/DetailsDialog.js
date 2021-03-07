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
    height: 720,
    background: "lightgrey",
  },
  img: {
    width: 720,
    height: 720,
    objectFit: "contain"
  },
  des: {
    margin: 16
  },
  people: {
    display: "flex",
    "& > div": {
      flexGrow: 1,
      span: 4
    }
  },
  person: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center"
  },
  avatar: {
    display: "inline-block",
    marginRight: "8px",
  },
  name: {
    fontSize: "1rem",
    fontWeight: "bold"
  }
};

const imgUrl = "https://lh3.googleusercontent.com/z378T1CMLctJwPNJmyWx-g2pOVzxW_IpFAVzv5Z0hVQH2d2xhbGFURHkFCIHTXslevuhCUXjjuM-FgJa_D1GK4T7vjKtU8uZqgCFIg=s0";


function DetailsDialog(props) {
  const { classes, des, creatorName, creatorAvatar, ownerName, ownerAvatar, art } = props;
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleSale = () => {
    props.onSale(props.art.nftcontract, props.art.tokenId)
  }

  const handleBuy = () => {
    props.onBuy(props.art.nftcontract, props.art.tokenId)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialogDiv}>
        <div className={classes.imageDiv}>
          <img src={imgUrl} className={classes.img}></img>
        </div>
        <div className={classes.des}>
          Artwork Name

          {/* <div className={classes.people}>
            <div className={classes.creator}>
              <Typography variant="h6" color="inherit" className={classes.des}>
                Created by
              </Typography>
              <div className={classes.person}>
                <Avatar alt="Remy Sharp" src={require("../" + creatorAvatar)} className={classes.avatar} />
                <span className={classes.name}>{ creatorName }</span>
              </div>
            </div>

            <div className={classes.owner}>
              <Typography variant="h6" color="inherit" className={classes.des}>
                Owned by
              </Typography>
              <div className={classes.person}>
                <Avatar alt="Remy Sharp" src={require( "../" + ownerAvatar )} className={classes.avatar} />
                <span className={classes.name}>{ownerName}</span>
              </div>
            </div>
            
          </div> */}

          <Typography component="p" size="small" className={classes.des}>
            { des }
          </Typography>

          <Button color="primary" className={classes.button} onClick={handleSale}>
            Buy
          </Button>
          <Button color="primary" className={classes.button} onClick={handleBuy}>
            Go on Sale
          </Button>
        </div>
      </div>
      
    </Dialog>
  );
}

export default withStyles(styles)(DetailsDialog);