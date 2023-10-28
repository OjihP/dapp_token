require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // reads environment variables (.env) inside the Hardhat project

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {}
  },
};
