import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [val, setVal] = useState('')
    const handleChange = (e) => {
        setVal(e.target.value)
    }

    return <div className="container flex justify-between mx-auto py-10">
                <h2 className="text-2xl text-white font-bold">Logo</h2>

                <select value={val} onChange={handleChange} className="text-white px-4 py-2 border rounded-full text-center text-xl bg-transparent">
                    <option value="" className="py-4 text-[#929292]">BRBk....sLJm</option>
                    <option value="1" className="py-4 text-[#929292]">Value 1</option>
                    <option value="2" className="py-4 text-[#929292]">Value 2</option>
                    <option value="3" className="py-4 text-[#929292]">Value 3</option>
                </select>
           </div>
}

export default Navbar