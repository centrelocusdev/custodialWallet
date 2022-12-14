import React from "react";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const ERC20 = (props) => {
  const { email } = props;
  const [chain, setChain] = useState("mumbai");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenaddress, setTokenaddress] = useState("");
  const [loading, setLoading] = useState(false);
  const api = "https://thedelvierypointe.com";

  const tokenTransfer = async () => {
    setLoading(true);
    let provider = "";
    if (chain === "ethereum") {
      provider = "";
    } else {
      provider = "https://rpc-mumbai.maticvigil.com";
    }
    console.log(tokenaddress);
    console.log(amount);
    console.log(provider);
    try {
      const response = await axios.post(
        `${api}/tknTransfer`,
        { email, amount, receiver, provider, tokenaddress },
        { withCredentials: true },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (
        response.data.message !== "OK" ||
        response.status !== "1" ||
        response.status !== "200"
      )
        throw new Error("Opps bad Request");
      console.log(response.data);
      alert(response.data.hash);
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }
  };

  const handleChange = (e) => setChain(e.target.value);
  const handleReceiverInput = (e) => setReceiver(e.target.value);
  const handleAmountInput = (e) => setAmount(e.target.value);
  const handleTokenInput = (e) => setTokenaddress(e.target.value);

  return (
    <section className="py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F] text-[20px]">
      <select
        value={chain}
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

      {/* <h5 className="text-[#929292] my-4">Balance: {balance}</h5> */}

      <h5 className="text-white mt-4">ERC20 Token Address</h5>
      <input
        required
        type="text"
        value={tokenaddress}
        onChange={handleTokenInput}
        placeholder="Paste token address"
        className="text-[#929292] bg-[#263140] rounded-full w-full p-4 my-3 text-[16px] "
      />

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
        onClick={tokenTransfer}
        type="submit"
        className="text-white bg-[#17987F] hover:bg-gray-800 text-center rounded-full w-full p-4 my-3 text-[16px] hover:bg-gray-200 cursor-pointer"
      >
        {loading ? <CircularProgress color="success" /> : "Transfer"}
      </button>
    </section>
  );
};

ERC20.defaultProps = {
  balance: "1.296 rETH",
};

export default ERC20;