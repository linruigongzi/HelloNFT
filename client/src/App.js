import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
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
    storage: null,
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  }

  handleClose = () => {
    this.setState({
      open: false
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
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const storage = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, storage }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, storage } = this.state;

    // Stores a given value, 5 by default.
    await storage.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await storage.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    const { classes } = this.props;

    if (!this.state.web3) {
      return (
        <div>
          <NavBar />
          <div className={classes.container}>
            <Typography variant="h6" color="inherit">
              Hottest
              <span role="img" aria-label="fire">🔥</span>
            </Typography>

            <div className={classes.containerTop}>
              <ImgCard className={classes.itemTop} onClick={this.handleClickOpen}/>
              <ImgCard className={classes.itemTop}/>
              <ImgCard className={classes.itemTop}/>
            </div>

            <Typography variant="h6" color="inherit">
              Chasing up
            </Typography>

            <div className={classes.containerBottom}>
              <ImgCard className={classes.itemBottom}/>
              <ImgCard className={classes.itemBottom}/>
              <ImgCard className={classes.itemBottom}/>
              <ImgCard className={classes.itemBottom}/>
              <ImgCard className={classes.itemBottom}/>
              <ImgCard className={classes.itemBottom}/>
              <ImgCard className={classes.itemBottom}/>
              <ImgCard className={classes.itemBottom}/>
            </div>
          </div>

          <DetailsDialog open={this.state.open} onClose={this.handleClose}/>
          
        </div>
      )
      // return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <div className="App">
        <NavBar />
        Hottest
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
