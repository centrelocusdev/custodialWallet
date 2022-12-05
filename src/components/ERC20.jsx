import React from "react";
import {useState} from 'react'

const ERC20 = (props) => {
    const [chain, setChain] = useState('')
    const handleChange = (e) => {
        setChain(e.target.value)
    }
    return <section className="py-12 px-7 shadow-lg rounded w-fit mx-auto bg-[#141E2F] text-[20px]">
                <select value={chain} onChange={handleChange} className='p-4 rounded-full bg-[#263140] text-[#929292] w-full px-7'>
                    <option value="" className="py-4 text-[#929292]">Select Chain</option>
                    <option value="1" className="py-4 text-[#929292]">Chain 1</option>
                    <option value="2" className="py-4 text-[#929292]">Chain 2</option>
                    <option value="3" className="py-4 text-[#929292]">Chain 3</option>
                </select>

                <h5 className="text-[#929292] my-4">Balance: {props.balance}</h5>
                
                <h5 className="text-white">ERC20 Token Address</h5>
                <input type="text" placeholder="Paste receiver address" className="text-[#929292] bg-[#263140] rounded-full w-full p-4 my-3 text-[16px] " />

                <h5 className="text-white">Receiver Address</h5>
                <div className="flex">
                    <input type="text" placeholder="Paste receiver address" className="text-[#929292] bg-[#263140] rounded-full w-full p-4 my-3 text-[16px] w-[70%] " />

                    <input type="text" placeholder="Amount" className="text-[#929292] bg-[#263140] rounded-full w-full p-4 m-3 text-[16px] w-[30%] text-center" />
                </div>

                <input type="submit" value="Transfer" className="text-white bg-[#17987F] text-center rounded-full w-full p-4 my-3 text-[16px] hover:bg-gray-200 cursor-pointer" />
           </section>
}

ERC20.defaultProps = {
    balance: '1.296 rETH'
}

export default ERC20