import React from "react";

const RecentReceipt = () => {
    return <section className="py-12 px-7 shadow-lg rounded-2xl w-fit mx-auto bg-[#141E2F] text-[20px]">
            {
                recentReceipts.map((rec) => (
                    <Receipt rec={rec} />
                ))
            }

            </section>
}

const Receipt = ({rec}) => {
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

const recentReceipts = [
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