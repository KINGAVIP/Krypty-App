import React, { useEffect, useState } from "react";

import { ethers } from "ethers";
import { contractABI, contractAddress } from "../Utils/constants";
export const TransactionContext = React.createContext();
import { toast } from "react-toastify";

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log({ provider, signer, transactionContract });
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const checkWalletConnected = async () => {
    if (!ethereum) return alert("Please install Metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length) {
      setConnectedAccount(accounts[0]);
    } else {
      console.log("NO accounts found");
    }
  };

  useEffect(() => {
    checkWalletConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectedAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const sendTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      console.log("hellp");
      // console.log(formData);
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(formData.amount);
      console.log(formData.amount);
      console.log(parsedAmount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: formData.addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });
      const transactionHash = await transactionContract.addtoBlockChain(
        formData.addressTo,
        parsedAmount,
        formData.message,
        formData.keyword
      );
      console.log("thik hai");
      setIsLoading(true);
      await transactionHash.wait();
      setIsLoading(false);
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      setFormData({ addressTo: "", amount: "", keyword: "", message: "" });
      console.log(transactionCount);

      toast.info("Succesfully transmitted");
    } catch (err) {
      console.log(err);
    }
  };

  const getTransaction = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transact = await transactionContract.getAllTransactions();

      return transact;
    } catch (err) {
      toast.error("Error in showing transactions");
      throw err;
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        formData,
        handleChange,
        sendTransactions,
        setFormData,
        isLoading,
        getTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
