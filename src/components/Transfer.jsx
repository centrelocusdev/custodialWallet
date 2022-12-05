import React from "react";
import NativeTransfer from "./NativeTransfer";

const Transfer = () => {
    return <section className="pb-12 px-7 shadow-lg rounded w-fit mx-auto text-white">
        <nav className="flex justify-between text-[20px] font-semibold mb-4">
            <a href="nativeTransfer" className="m-3 py-2 border-b-4 border-transparent hover:border-[#17987F]">Native Transfer</a>
            <a href="/erc20" className="m-3 py-2 border-b-4 border-transparent hover:border-[#17987F]">ERC 20</a>
            <a href="/recentReceipt" className="m-3 py-2 border-b-4 border-transparent hover:border-[#17987F]">Recent Receipt</a>
        </nav>

        <NativeTransfer />
    </section>
}

export default Transfer