This BlockChain project allows a user to connect its metamask Wallet and allows transactions.

For Smart Contract

Language Used-Solidity
Functionality used-HardHat
In transaction.sol there are mainly 3 functions addtoblockchain - allows to store transactions with  blockchain
getalltransaction()- to get all transactions
getTransactionCount()-to count number of transactions

smart contract has been deployed using hardhat and a contract file is generated which contains ABI as well contract address

These two are used in Transaction Context.jsx where all functionality to connect react app with smart contract is done

to generate ethereum contract
we have to provide a provider,signer and ABI, address
other methods developed are-connectWallet, sendTransactios, getTransactions etc
