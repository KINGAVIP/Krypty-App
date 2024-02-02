const main = async () => {
  const Greeter = await hre.ethers.getContractFactory("Transactions");
  const transactionContract = await Greeter.deploy();

  await transactionContract.deployed();
  console.log("Transaction address:", transactionContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
