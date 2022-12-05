import React from "react";

const Signin = () => {
    return <section className="text-center py-12 px-7 shadow-lg rounded w-fit mx-auto bg-[#141E2F]">
                <h3 className="text-[36px] text-white">Sign In</h3>
                <h5 className="text-[24px] text-white my-3">Welcome Back!</h5>

                <h5 className="text-[#929292] text-[24px]">Enter your credentials to access your account</h5>
                <input type="text" placeholder="Enter your Email" className="text-[#929292] bg-[#141E2F] rounded-full w-full p-4 my-3 text-[16px]" />

                <input type="submit" value="Sign In" className="text-[#262E38] font-semibold bg-white text-center rounded-full w-full p-4 my-3 text-[16px] hover:bg-gray-200 cursor-pointer" />

                <p className="text-[#929292] text-left">Don't have an account?  <a href="/" className="text-[#17987F] font-semibold hover:text-white">Sign Up</a></p>
           </section>
}

export default Signin