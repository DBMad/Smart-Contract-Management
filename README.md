# Smart Contract Management

This project is a smart contract that uses a JavaScript frontend using the ether.js library.

# Description
This project is a simple smart contract in Solidity that simulates a gacha shop according to their rarities for Dota 2 items. The contract allows users to buy common, arcana, mythical, and legendary items.

# Prerequisites

1. Make sure Node.js is installed.
2. Make sure you have Metamask extension.

# Project Setup

1. Inside the project directory, in the terminal type:
   ```bash
   npm i
   ```
2. Deploy the smart contract to the local Ethereum network node, in the terminal type:
   ```bash
   npx hardhat node
   ```
3. Compile the smart contract, in the terminal type:
   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```
4. Update the smart contract address with the address of the deployed contract.
5. Launch the frontend, in the terminal type:
   ```bash
   npm run dev
   ```
6. Try running the program on your browser by going to http://localhost:3000/
7. Connect your Metamask account to start shopping.

# Authors

Darryl Madarang 202110370@fit.edu.ph
