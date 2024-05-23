require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const API_URL = process.env.API_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    amoy: {
      url: API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
