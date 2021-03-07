import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const arts = [
  {
    title: "adam",
    nftImage: "images/adam.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {},
  },
  {
    title: "encounter",
    nftImage: "images/encounter.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "forest",
    nftImage: "images/forest.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "gang-in-a-twisted-inferno-of-apocalyptic-pinkness",
    nftImage: "images/gang-in-a-twisted-inferno-of-apocalyptic-pinkness.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "geometrical-heart-fire-dispersion",
    nftImage: "images/geometrical-heart-fire-dispersion-warm-version.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "madonna ethereum",
    nftImage: "images/madonna-ethereum-genesis-1-1.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "memory-palace",
    nftImage: "images/memory-palace.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "once-twice",
    nftImage: "images/once-twice.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "plant search",
    nftImage: "images/plant-search.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "the lions mask",
    nftImage: "images/the-lions-mask.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  },
  {
    title: "bull",
    nftImage: "images/Bull.jpg",
    des: "blah blah blah",
    creatorName: "Jobs",
    creatorAvatar: "images/avtar1.jpg",
    ownerName: "Jimmy",
    ownerAvatar: "images/avtar1.jpg",
    art: {}
  }
]

ReactDOM.render(<App arts={arts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
