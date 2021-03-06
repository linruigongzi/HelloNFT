import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  grow: {
    flexGrow: 1,
  },
  favorite: {
    color: "red",
    marginLeft: "8px"
  },
  des: {
    color: "darkslategrey",
    lineHeight: 1.25,
    fontSize: "1rem",
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

const json = [
  {
    nftImage: "images/nft1.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/jobs.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/jimmy.jpg",
  },
  {
    nftImage: "images/nft1.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/jobs.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/jimmy.jpg",
  },
]

const imgUrl = "https://lh3.googleusercontent.com/z378T1CMLctJwPNJmyWx-g2pOVzxW_IpFAVzv5Z0hVQH2d2xhbGFURHkFCIHTXslevuhCUXjjuM-FgJa_D1GK4T7vjKtU8uZqgCFIg=s0";

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.people}>
            <div className={classes.creator}>
              <Typography variant="h6" color="inherit" className={classes.des}>
                Created by
              </Typography>
              <div className={classes.person}>
                <Avatar alt="Remy Sharp" src={require("images/avtar1.jpg")} className={classes.avatar} />
                <span className={classes.name}>Cody Fisher</span>
              </div>
            </div>

            <div className={classes.owner}>
              <Typography variant="h6" color="inherit" className={classes.des}>
                Owned by
              </Typography>
              <div className={classes.person}>
                <Avatar alt="Remy Sharp" src={require("images/avtar1.jpg")} className={classes.avatar} />
                <span className={classes.name}>Robert Fox</span>
              </div>
            </div>
            
            
            
          </div>
          <Typography component="p" size="small" className={classes.des}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.grow}></div>
        <Button variant="outlined" size="small" color="primary">
          256
          <FavoriteIcon className={classes.favorite}/>
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
