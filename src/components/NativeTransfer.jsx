import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
const NativeTransfer = (props) => {
  const { email } = props;
  const [chain, setChain] = useState('mumbai');
  const [balance, setBalance] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState("");
  const [loading, setLoading] = useState(false);

  const api = "https://thedelvierypointe.com";

  useEffect(() => {
    checkBalance()
    console.log(provider)
  })

  const checkBalance = async () => {
    try {
      if (chain == "ethereum") {
        setProvider(
          "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        );
      } else {
        setProvider("https://rpc-mumbai.maticvigil.com");
      }
        
      const response = await axios.post(
        `${api}/balance`,
        { email, provider },
        { withCredentials: true },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setBalance(response.data);
      console.log(balance)
      console.log("balance: ", response)
    } catch(err) {
      console.log(err)
    }
  };

  //Transfer
  const send = async () => {
    setLoading(true);

    if (chain === "ethereum") {
      setProvider();
    } else {
      setProvider("https://rpc-mumbai.maticvigil.com");
    }

    try {
      const response = await axios.post(
        `${api}/send`,
        { email, amount, receiver, provider },
        { withCredentials: true },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
        // Do not add this
      // if (
      //   response.data.message !== "OK" ||
      //   response.status !== "1" ||
      //   response.status !== "200"
      // )
      //   throw new Error("Opps bad Request");
      alert(response.data.hash);
      checkBalance(); //calling after transfer
      setLoading(false);
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setChain(e.target.value);
    checkBalance(); //calling on change
  };

  const handleReceiverInput = (e) => setReceiver(e.target.value);
  const handleAmountInput = (e) => setAmount(e.target.value);

  return (
    <section className="py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F] text-[20px]">
      <select
      required
        onChange={handleChange}
        className="p-4 rounded-full bg-[#263140] text-[#929292] w-full px-7"
      >
        <option value="mumbai" className="py-4 text-[#929292]">
          Mumbai
        </option>
        <option value="ethereum" className="py-4 text-[#929292]">
          Ethereum
        </option>
      </select>

      <h5 className="text-[#929292] my-4">Balance: {balance}</h5>

      <h5 className="text-white">Receiver Address</h5>
      <div className="flex">
        <input
        required
          type="text"
          value={receiver}
          onChange={handleReceiverInput}
          placeholder="Paste receiver address"
          className="text-[#929292] bg-[#263140] rounded-full w-full p-4 my-3 text-[16px] w-[70%] "
        />

        <input
        required
          type="text"
          value={amount}
          onChange={handleAmountInput}
          placeholder="Amount"
          className="text-[#929292] bg-[#263140] rounded-full w-full p-4 m-3 text-[16px] w-[30%] text-center"
        />
      </div>

      <button
        onClick={send}
        type="submit"
        className="text-white bg-[#17987F] hover:bg-gray-800 text-center rounded-full w-full p-4 my-3 text-[16px] hover:bg-gray-200 cursor-pointer"
      >
        {loading ? <CircularProgress color="success" /> : "Transfer"}{" "}
      </button>
    </section>
  );
};

NativeTransfer.defaultProps = {
  balance: "1.296 rETH",
};

export default NativeTransfer;