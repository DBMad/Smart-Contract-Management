# Smart Contract Management

This smart contract allows users to buy a set of items in the Dota 2 shop

# Description
This project is a simple smart contract that simulates a gacha shop according to their rarities for Dota 2 items. The contract allows buy common, arcana, mythical, and legendary item.

# Functions

1. buyCommonItem: Buys a common item for the user that costs 1 ETH.
2. buyArcana: Buys an arcana for the user thats costs 2 ETH.
3. buyMythicalItem: Buys a mythical item for the user that costs 5 ETH.
4. buyLegendaryItem: Buys a legendary item for the user that costs 10 ETH.
5. getMyItems: Retrieves the list of items bought by the user.

# Prerequisites

1. Make sure Node.js is installed.
2. Make sure you have Metamask extension.

# Project Setup

1. Inside the project directory, in the terminal type: npm i (this would install all dependencies)
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.
6. Try running the program on your browser by going to http://localhost:3000/

# Authors

Darryl Madarang 202110370@fit.edu.ph
