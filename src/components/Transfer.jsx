import React from "react";
import NativeTransfer from "./NativeTransfer";
import { useState } from "react";
import ERC20 from "./ERC20";
import RecentReceipt from "./RecentReceipt";
const Transfer = () => {
  const tabs = ["Native Transfer", "ERC 20", "Recent Receipt"];
  const [tab, setTab] = useState(tabs[0]);

  const handleCurrentTab = (currentTab) => {
    setTab(currentTab);
  };
  console.log(tab);
  return (
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
      {tab === tabs[0] && <NativeTransfer />}
      {tab === tabs[1] && <ERC20 />}
      {tab === tabs[2] && <RecentReceipt />}
    </section>
  );
};

export default Transfer;
