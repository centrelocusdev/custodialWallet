import React from "react";
import {useState} from 'react'
import axios from 'axios';

const ERC20 = (props) => {
  const {email} = props
    const [chain, setChain] = useState('mumbai')
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');
    const [provider, setProvider] = useState('');
    const [tokenaddress, setTokenaddress] = useState('');
    const api = "http://192.168.1.10:3002"

    const tokenTransfer = async () => {
      if(chain === "ethereum"){

        setProvider()
      }
      else {
        setProvider("https://rpc-mumbai.maticvigil.com")
      }
      console.log(tokenaddress);
      console.log(amount);
      console.log(provider);
        const response = await axios.post(
          `${api}/tknTransfer`,
          { email, amount, receiver, provider, tokenaddress },
          { withCredentials: true },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(response.data);
       }
      
    const handleChange = (e) => setChain(e.target.value)
    const handleReceiverInput = (e) => setReceiver(e.target.value)
    const handleAmountInput = (e) => setAmount(e.target.value)
    const handleTokenInput = (e) => setTokenaddress(e.target.value)

    return <section className="py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F] text-[20px]">
              
							  <select value={chain} onChange={handleChange} className='p-4 rounded-full bg-[#263140] text-[#929292] w-full px-7'>
                    <option value="mumbai" className="py-4 text-[#929292]">Mumbai</option>
                    <option value="ethereum" className="py-4 text-[#929292]">Ethereum</option>
                </select>

                {/* <h5 className="text-[#929292] my-4">Balance: {balance}</h5> */}
                
                <h5 className="text-white mt-4">ERC20 Token Address</h5>
                <input type="text" value={tokenaddress} onChange={handleTokenInput} placeholder="Paste token address" className="text-[#929292] bg-[#263140] rounded-full w-full p-4 my-3 text-[16px] " />

                <h5 className="text-white">Receiver Address</h5>
                <div className="flex">
                    <input type="text" value={receiver} onChange={handleReceiverInput} placeholder="Paste receiver address" className="text-[#929292] bg-[#263140] rounded-full w-full p-4 my-3 text-[16px] w-[70%] " />

                    <input type="text" value={amount} onChange={handleAmountInput} placeholder="Amount" className="text-[#929292] bg-[#263140] rounded-full w-full p-4 m-3 text-[16px] w-[30%] text-center" />
                </div>

                <button onClick={tokenTransfer} type="submit" value="Transfer" className="text-white bg-[#17987F] text-center rounded-full w-full p-4 my-3 text-[16px] hover:bg-gray-200 cursor-pointer" />
								
           </section>
}

ERC20.defaultProps = {
    balance: '1.296 rETH'
}

export default ERC20