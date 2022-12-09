import React from "react";
import axios from 'axios';
import { useState } from 'react'
import { ethers } from "ethers";

const RecentReceipt = (props) => {
    const { waddress } = props

    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [amount, setAmount] = useState('');
    const [recentReceipts, setRecentReceipts] = useState([]);

    const txActivity = async (walletAddress, provider) => {

        let endpoint;
        if (provider === 'ethereum') {
            endpoint = "https://api-goerli.etherscan.io/api";
        }
        else {
            endpoint = "https://api-testnet.polygonscan.com/api"
        }

        const ADDRESS = waddress;
        const apikey = "ZYDTV4HXTU8KRZ9EIQA263HK287Y514ZN8";

        const etherscan = await axios.get(endpoint + `?module=account&action=txlist&address=${ADDRESS}&startblock=0
    &endblock=99999999
    &page=1
    &offset=1000
    &sort=asc
    &apikey=${apikey}`);


        setRecentReceipts(etherscan.data.results)
        console.log(recentReceipts.length)

        if (recentReceipts.length == 0) {
            return "No Transactions"
        }
        else {
            //console.log(recentReceipts);
            const result = recentReceipts[recentReceipts.length - 1]
            setAmount(ethers.utils.formatUnits(result.value, "ether"));
            setTo(result.to);
            setFrom(result.from);
            return result;
        }
    }

    return <section className="w-full py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F] text-[20px]">
        {
            recentReceipts.length ?  recentReceipts.map((rec, i) => (
                <Receipt rec={rec} key={i} />
            )) : <div className="text-2xl text-center">No Transaction</div>
           
        }

    </section>
}

const Receipt = ({ rec }) => {
    return <div className="rounded-2xl m-5  text-[20px] rounded-2xl text-[#929292] shadow-lg">
        <div className="rounded-2xl rounded-b bg-[#263140] p-2 text-white">Amount: {rec.amount}</div>

        <div className="p-3">
            <div className="text-[#929292">
                <h5>to:</h5>
                <h5>{rec.to}</h5>
            </div>
            <a href="/" className="text-[#17987F]">View Transaction</a>
        </div>
    </div>
}

const recentReceiptsTemp = [
    {
        amount: '1.222',
        to: '0xCA9bB13e14574008632F59F7c064f2908eB80259'
    },
    {
        amount: '1.333',
        to: '0xCA9bB13e14574008632F59F7c064f2908eB80259'
    },
    {
        amount: '1.444',
        to: '0xCA9bB13e14574008632F59F7c064f2908eB80259'
    },

]

export default RecentReceipt