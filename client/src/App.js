import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Token from './contracts/Token.json';
import Art from './contracts/Art.json';
import getWeb3 from "./getWeb3";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import "./App.css";
import NavBar from './components/NavBar';
import ImgCard from './components/ImgCard';
import DetailsDialog from './components/DetailsDialog';

const styles = {
  container: {
    marginTop: 60,
    maxWidth: 1080,
    margin: "auto",
  },
  containerTop: {
    display: "flex",
    marginBottom: 40,
    "& > div": {
      flexGrow: 1,
      margin: "0px 16px"
    },
    marginLeft: -16,
    marginRight: -16,
  },
  containerBottom: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: -4,
    marginRight: -4,
    justifyContent: "space-between",
    "& > div": {
      maxWidth: 250,
      margin: "8px 4px"
    },
  },

};

class App extends Component {
  
  
  state = { 
    storageValue: 0,
    web3: null, 
    accounts: null, 
    storageContract: null,
    tokenContract: null,
    artContract: null,
    artList: [],
    topArts: [],
    restArts: [],
    open: false,
    selectedArt: {},
  };

  handleClickOpen = (art) => {
    this.setState({
      open: true,
      selectedArt: art
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
      selectedArt: {}
    })
  }


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      // let deployedNetwork = SimpleStorageContract.networks[networkId];
      // const storage = new web3.eth.Contract(
      //   SimpleStorageContract.abi,
      //   deployedNetwork && deployedNetwork.address,
      // );

      let deployedNetwork = Token.networks[networkId];
      const tokenContract = new web3.eth.Contract(
        Token.abi,
        deployedNetwork && deployedNetwork.address,
      );

      deployedNetwork = Art.networks[networkId];
      const artContract = new web3.eth.Contract(
        Art.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, tokenContract, artContract }, this.getAllArts);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // getAndStorage = async () => {
  //   const { accounts, storage, art } = this.state;

  //   // Stores a given value, 5 by default.
  //   await storage.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await storage.methods.get().call();

  //   this.setState({
  //     storageValue: response
  //   })
  // }

  getAllArts = async () => {
    const { artContract } = this.state;
    const { arts } = this.props;
    const artList = [];

    for (let i = 0; i < 11; i++) {
      const art = await artContract.methods._allworks(i).call();
      artList.push(art);
    }

    artList.sort((a,b) => b.votes - a.votes );

    for (let i = 0; i < 11; i++) {
      arts[i].art = artList[i]
    }

    console.log(artList);

    const topArts = arts.slice(0, 3);
    const restArts = arts.slice(3);

    // Update state with the result.
    this.setState({
      topArts,
      restArts,
      artList
    });
  };

  vote = async (address, id) => {
    const { accounts, artContract } = this.state;

    await artContract.methods.vote(address, id, 1).send({ from: accounts[0] });

    this.getAllArts();
  }

  setSelectedArt = (art) => {
    this.setState({
      selectedArt: art
    })
  }

  onSale = async (address, id) => {
    const { accounts, artContract } = this.state;

    await artContract.methods.auction(address, id).send({ from: accounts[0] });
  }

  onBuy = async (address, id) => {
    const { accounts, artContract } = this.state;

    await artContract.methods.bid(address, id).send({ from: accounts[0] });
  }

  render() {
    const { classes } = this.props;
    const { accounts, artContract } = this.state;
    const { arts } = this.props;
    // const artList = await art.methods._allworks().call();

    const topArts = arts.slice(0, 3);
    const restArts = arts.slice(3);

    if (!this.state.web3) {
      return (
        <div>
          <NavBar />
          loading...
        </div>
      )
    }

    return (
      <div>
        <NavBar />
        <div className={classes.container}>
          <Typography variant="h6" color="inherit">
            Hottest
            <span role="img" aria-label="fire">🔥</span>
          </Typography>

          <div className={classes.containerTop}>
            {topArts.map((a) => (
              <ImgCard 
                className={classes.itemTop}
                onDetail={this.handleClickOpen}
                onVote={this.vote}
                onSelect={this.setSelectedArt}
                {...a}
              />
            ))}
          </div>

          <Typography variant="h6" color="inherit">
            Chasing up
          </Typography>

          <div className={classes.containerBottom}>
            {restArts.map((a) => (
              <ImgCard
                className={classes.itemBottom}
                onDetail={this.handleClickOpen}
                onVote={this.vote}
                onSelect={this.setSelectedArt}
                {...a}
              />
            ))}
          </div>
        </div>

        <DetailsDialog 
          open={this.state.open} 
          onClose={this.handleClose} 
          onSale={this.onSale}
          onBuy={this.onBuy}
          {...this.state.selectedArt}
        />
        
      </div>
    );
  }
}

export default withStyles(styles)(App);
