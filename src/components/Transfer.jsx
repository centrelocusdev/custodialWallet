import React from "react";
import NativeTransfer from "./NativeTransfer";
import { useState } from "react";
import ERC20 from "./ERC20";
import RecentReceipt from "./RecentReceipt";
import {useLocation} from 'react-router-dom';

const Transfer = () => {
  const location = useLocation()
  const { email, waddress } = location.state ? location.state : {email:'k315@gmail.com', waddress: '0x94fd4A135D3797bdb5e1b63e26BAc50a07dAc49F'}
  
  const tabs = ["Native Transfer", "ERC 20", "Recent Receipt"];
  const [tab, setTab] = useState(tabs[0]);

  const handleCurrentTab = (currentTab) => {
    setTab(currentTab);
  };
  console.log(tab);

  console.log("email: ", email)
  console.log("walletaddress: ", waddress)

  return (
    <section className="flex flex-col">
    <div className="text-white w-fit float-right  translate-x-[125%] -translate-y-16  px-4 py-2 border rounded-full text-center text-xl bg-transparent">
    Wallet Address: {waddress}
    </div>
    <section className="pb-12 px-7 shadow-lg rounded w-fit mx-auto text-white">
      <nav className="flex justify-between text-[20px] font-semibold mb-4">
        <button
          onClick={(e) => handleCurrentTab(e.target.textContent)}
          className={`m-3 transition-all ${
            tab === "Native Transfer" && "border-[#17987F]"
          } py-2 border-b-4 border-transparent hover:border-[#17987F]`}
        >
          Native Transfer
        </button>
        <button
          onClick={(e) => handleCurrentTab(e.target.textContent)}
          className={`m-3 transition-all ${
            tab === "ERC 20" && "border-[#17987F]"
          } py-2 border-b-4 border-transparent hover:border-[#17987F]`}
        >
          ERC 20
        </button>
        <button
          onClick={(e) => handleCurrentTab(e.target.textContent)}
          className={`m-3 transition-all  ${
            tab === "Recent Receipt" && "border-[#17987F]"
          } py-2 border-b-4 border-transparent hover:border-[#17987F]`}
        >
          Recent Receipt
        </button>
      </nav>
      {/* passing email and walletaddress to other components */}
      {tab === tabs[0] && <NativeTransfer email={email} walletaddress={waddress} />}
      {tab === tabs[1] && <ERC20 email={email} walletaddress={waddress}/>}
      {tab === tabs[2] && <RecentReceipt email={email} walletaddress={waddress} />}
    </section>
    </section>
  );
};

export default Transfer;
