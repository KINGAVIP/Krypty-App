import Bitcoin from "../Assets/bitcoin.jpg";
import Metamask from "../Assets/metamask.svg";
import React, { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";
import { toast } from "react-toastify";
import Loader from "./Helpers/Loader";
const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-lg p-2 outline-none bg-gray-800"
    />
  );
};
const Welcome = () => {
  const {
    connectWallet,
    connectedAccount,
    formData,
    handleChange,
    sendTransactions,
    setFormData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    console.log("values");
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    console.log("dekho");
    if (!addressTo || !amount || !keyword || !message) {
      toast.error("Provide each details");
      return;
    }
    sendTransactions();
  };
  return (
    <div className="container " id="Home">
      <div className=" flex flex-col w-[60%] gap-5 justify-center items-center ">
        <img src={Bitcoin} alt="bitcoins" height={300} width={300} />
        <h3 className="font-semibold text-2xl text-blue-300">
          CRYPTO EXCHANGE PLATFORM
        </h3>
        <p className="">
          This platform often offer a range of features, including real-time
          market data, secure wallets for storing digital assets, and diverse
          trading pairs, allowing users to engage in the dynamic world of
          cryptocurrency with ease.
        </p>
        {!connectedAccount && (
          <button className="button" onClick={connectWallet}>
            <h4 className="mr-4 text-xl">Connect Wallet</h4>
            <img src={Metamask} className="w-6 h-6" />
          </button>
        )}
        <table className="table-auto w-full border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Service</th>
              <th className="border border-gray-300 px-4 py-2">Chain</th>
              <th className="border border-gray-300 px-4 py-2">Network</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-gray-300 px-4 py-2">
                Crypto Exchange
              </td>
              <td className="border border-gray-300 px-4 py-2">Ethereum</td>
              <td className="border border-gray-300 px-4 py-2">
                Mumbai MainNet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <form className="flex flex-col w-[40%] mx-10 border-gray-500 border rounded-2xl p-5 border-solid ">
        <Input
          placeholder="Address to"
          name="addressTo"
          value={formData.addressTo}
          type={"text"}
          handleChange={handleChange}
        />
        <Input
          placeholder="Amount ETH"
          name="amount"
          value={formData.amount}
          type={"number"}
          handleChange={handleChange}
        />
        <Input
          placeholder="Keyword GIF"
          name="keyword"
          value={formData.keyword}
          type={"text"}
          handleChange={handleChange}
        />
        <Input
          placeholder="Enter message"
          name="message"
          value={formData.message}
          type={"text"}
          handleChange={handleChange}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <button className="button" type="submit" onClick={handleSubmit}>
            Send Now
          </button>
        )}
      </form>
    </div>
  );
};

export default Welcome;
