import React from "react";
import axios from "axios";
import { useState } from "react";
import { ethers } from "ethers";
import CircularProgress from "@mui/material/CircularProgress";

const RecentReceipt = (props) => {
    const { walletaddress } = props
    console.log(walletaddress);

    const [to1, setTo] = useState('');
    const [from1, setFrom] = useState('');
    const [amount1, setAmount] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');
    const [recentReceipts, setRecentReceipts] = useState([]);
    const [chain, setChain] = useState('mumbai')
    const [explorer, setExplorer] = useState('');

    const txActivity = async (walletAddress, provider) => {

        let endpoint;
        if (chain === 'ethereum') {
            endpoint = "https://api-sepolia.etherscan.io/api";
            setExplorer('https://sepolia.etherscan.io/tx/')
        }
        else {
            endpoint = "https://api-amoy.polygonscan.com/api"
            setExplorer('https://amoy.polygonscan.com/tx/');
        }

        const ADDRESS = walletaddress;
        const apikey = "ZYDTV4HXTU8KRZ9EIQA263HK287Y514ZN8";

        try {
            const etherscan = await axios.get(
                endpoint +
                `?module=account&action=txlist&address=${ADDRESS}&startblock=0
            &endblock=99999999
            &page=1
            &offset=1000
            &sort=desc
            &apikey=${apikey}`
            );

            if (etherscan.data.message !== "OK")
                throw new Error("Opps something went Wrong");
            const arr = etherscan.data.result;
            console.log(arr);

            console.log(etherscan.data);
            setRecentReceipts(arr.reverse());
            console.log(explorer);
            console.log(recentReceipts);
            const result = recentReceipts[recentReceipts.length - 1];
            setAmount(ethers.utils.formatUnits(result.value, "ether"));
            setTo(result.to);
            setFrom(result.from);
            setLoading(false);
            setError(null);
            return result;
        } catch (e) {
            console.log(e.message);
            // setError(e.message);
            setLoading(false);
        }
    };
    const handleChange = (e) => {
        setChain(e.target.value);
        txActivity();
    }

    React.useEffect(() => {
        txActivity();
    }, []);

    return <section className="w-full py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F] text-[20px]">
        <select value={chain} onChange={handleChange} className='p-4 rounded-full bg-[#263140] text-[#929292] w-full px-7'>
            <option value="mumbai" className="py-4 text-[#929292]">Mumbai</option>
            <option value="ethereum" className="py-4 text-[#929292]">Ethereum</option>
        </select>
        {
            recentReceipts.length ? recentReceipts.map((rec, i) => (
                <Receipt rec={rec} key={i} explorer={explorer} />
            )) : <div className="text-2xl text-center">No Transaction</div>

        }

    </section>
};

const Receipt = ({ rec, explorer }) => {
    return <div className="rounded-2xl m-5  text-[20px] rounded-2xl text-[#929292] shadow-lg">
        <div className="rounded-2xl rounded-b bg-[#263140] p-2 text-white">Amount: {ethers.utils.formatUnits(rec.value, "ether")}</div>

        <div className="p-3">
            <div className="text-[#929292">
                <h5>to:</h5>
                <h5>{rec.to}</h5>
            </div>
            <a href={explorer + rec.hash} className="text-[#17987F] font-semibold">View Transaction</a>
        </div>
    </div>
};

export default RecentReceipt;
