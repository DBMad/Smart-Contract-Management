# Smart Contract Management

This project is a smart contract that uses a JavaScript frontend using the ether.js library.

# Description
This project is a simple smart contract in Solidity that simulates a gacha shop according to their rarities for Dota 2 items. The contract allows users to buy common, arcana, mythical, and legendary items.

# Prerequisites

1. Make sure Node.js is installed.
2. Make sure you have Metamask extension.

# Project Setup

1. Inside the project directory, in the terminal type: npm i (this would install all dependencies)
3. Deploy the smart contract to the local Ethereum network node:
   ```bash
   npx hardhat node
   ```
4. Compile the smart contract:
   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```
5. Update the smart contract address with the address of the deployed contract.
6. Launch the frontend:
   ```bash
   npm run dev
   ```
7. Try running the program on your browser by going to http://localhost:3000/
8. Connect your Metamask account to start shopping.

# Authors

Darryl Madarang 202110370@fit.edu.ph
