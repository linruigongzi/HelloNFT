# HelloNFT
ETH Hackathon -- NFT, DAO, Layer-2, Defi@Beijing 1 Grant


## Installation
1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Run the development console.
    ```javascript
    truffle develop
    ```

3. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

4. In the `client` directory, we run the React app. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd client
    yarn
    yarn start
    ```
