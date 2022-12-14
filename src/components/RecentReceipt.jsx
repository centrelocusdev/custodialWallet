const txActivity = async (walletAddress, provider) => {

    let endpoint;
    if (provider === 'ethereum') {
    if (chain === 'ethereum') {
        endpoint = "https://api-goerli.etherscan.io/api";
    }
    else {
        endpoint = "https://api-testnet.polygonscan.com/api"
    }
    const ADDRESS = walletaddress;
    const apikey = "ZYDTV4HXTU8KRZ9EIQA263HK287Y514ZN8";
    const etherscan = await axios.get(endpoint + `?module=account&action=txlist&address=${ADDRESS}&startblock=0
&endblock=99999999
&page=1
&offset=1000
&sort=desc
&apikey=${apikey}`);
    const arr = etherscan.data.result;
    setRecentReceipts(arr.reverse());
    console.log(arr)
    if (recentReceipts.length === 0) {
        return "No Transactions"
    }
    else {
        //console.log(recentReceipts);
        const result = recentReceipts[recentReceipts.length - 1]
        console.log(result);
        // setAmount(ethers.utils.formatUnits(result.value, "ether"));
        // setTo(result.to);
        // setFrom(result.from);
        return result;
    }
}
const handleChange = (e) => setChain(e.target.value)
txActivity();
return <section className="w-full py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F] text-[20px]">
    <select value={chain} onChange={handleChange} className='p-4 rounded-full bg-[#263140] text-[#929292] w-full px-7'>
        <option value="mumbai" className="py-4 text-[#929292]">Mumbai</option>
        <option value="ethereum" className="py-4 text-[#929292]">Ethereum</option>
    </select>
    {
        recentReceipts.length ?  recentReceipts.map((rec, i) => (
            <Receipt rec={rec} key={i} />
        )) : <div className="text-2xl text-center">No Transaction</div>
       
    }
</section>
}
const Receipt = ({ rec }) => {
return <div className="rounded-2xl m-5  text-[20px] rounded-2xl text-[#929292] shadow-lg">
    <div className="rounded-2xl rounded-b bg-[#263140] p-2 text-white">Amount: {ethers.utils.formatUnits(rec.value, "ether")}</div>
    <div className="p-3">
        <div className="text-[#929292">
            <h5>to:</h5>
            <h5>{rec.to}</h5>
        </div>
        <a href="https://mumbai.polygonscan.com/tx/0x15b962b7d08ae74f0937ce9b4f1e3a6fce86d7c0a8bcbda02f3c174ad1b7642c" className="text-[#17987F]">View Transaction</a>
    </div>
</div>
}
export default RecentReceipt