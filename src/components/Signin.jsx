import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    //const [walletaddress, setWalletaddress] = useState('');
    const api = "https://cors-everywhere.herokuapp.com/http://192.168.1.5:3002"

    const handleChange = event => {
        setEmail(event.target.value);

        console.log('value is:', event.target.value);
    };


    const wallet = async (e) => {
        e.preventDefault()
        
        const response = await axios.post(
            `${api}/wallet`,
            { email },
            { withCredentials: true },
            {
                headers: { "Content-Type": "application/json" },
            }
            );
            //setWalletaddress(response.data.wallet.address);
            const waddress = response.data.wallet.address;
            console.log(waddress)
            navigate('/transfer', {state: {email, waddress}})
            
            
    }

    return <section className="text-center py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F]">
        <h3 className="text-[36px] text-white">Sign In</h3>
        <h5 className="text-[24px] text-white my-3">Welcome Back!</h5>

        <form action="" onSubmit={wallet}>
        <h5 className="text-[#929292] text-[24px]">Enter your credentials to access your account</h5>
        <input type="email" placeholder="Enter Your Email" className="text-[#929292] bg-[#263140] rounded-full w-full p-4 my-3 text-[16px]" name="text" onChange={handleChange} value={email} required={true} />
        
        {/* <input type="submit" value="Sign In" className="text-[#262E38] font-semibold bg-white text-center rounded-full w-full p-4 my-3 text-[16px] hover:bg-gray-200 cursor-pointer" /> */}
        <button type="submit" className="text-[#262E38] font-semibold bg-white text-center rounded-full w-full p-4 my-3 text-[16px] hover:bg-gray-200 cursor-pointer">Sign In</button>
        </form>
        <p className="text-[#929292] text-left">Don't have an account?  <a href="/" className="text-[#17987F] font-semibold hover:text-white">Sign Up</a></p>
    </section>
}

export default Signin