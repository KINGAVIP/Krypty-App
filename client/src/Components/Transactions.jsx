import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../Context/TransactionContext";

const Transactions = () => {
  const { connectedAccount, getTransaction } = useContext(TransactionContext);
  const [transactions, setTransactions] = useState([
    { receiver: "", amount: "", gif: "", message: "" },
  ]);

  useEffect(() => {
    const fetchTransaction = async () => {
      console.log("rom");
      console.log(connectedAccount);
      if (connectedAccount) {
        const trans = await getTransaction();
        console.log(trans);

        console.log("loading");
        const updateed = trans.map((transaction, index) => ({
          receiver: transaction.receiver,
          amount: transaction.amount._hex,
          gif: transaction.keyword,
          message: transaction.message,
        }));

        console.log("updated", updateed);
        setTransactions(updateed);
      }
    };
    console.log("hi");
    fetchTransaction();
  }, [connectedAccount]);
  const TransactionCard = ({ addressTo, amount, gif, message }) => {
    return (
      <div
        className="flex items-center p-2 border-2 rounded-lg border-red-600 hover:border-transparent  cursor-pointer transition ease-in-out delay-100"
        id="Transactions"
      >
        <div>
          <div>addressTo:{addressTo}</div>
          <div>amount:{amount}</div>
          <div>gif:{gif}</div>
          <div>message:{message}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="flex items-center flex-col">
        <h3 className="text-6xl font-serif w-3/4  text-center pb-4">
          Transactions
        </h3>
        {connectedAccount ? (
          <div className="grid grid-cols-2  gap-3">
            {transactions.map((tra, key) => (
              <TransactionCard
                addressTo={tra.receiver}
                amount={tra.amount}
                gif={tra.gif}
                message={tra.message}
                key={key}
              />
            ))}
          </div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
