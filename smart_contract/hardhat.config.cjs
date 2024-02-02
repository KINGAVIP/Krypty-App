// https://eth-goerli.g.alchemy.com/v2/1CivS8g2_t8uJUIEoU8UjqBL9rkp7qsS
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/1CivS8g2_t8uJUIEoU8UjqBL9rkp7qsS",
      accounts: [
        "239c14bf7d0ed76470d696e05e60435a76ea7da2e82e778f2330145f05a6e784",
      ],
    },
  },
};
