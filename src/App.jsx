import React, {lazy, Suspense} from "react";
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
// import NativeTransfer from "./components/NativeTransfer";
// import ERC20 from "./components/ERC20";
// import RecentReceipt from "./components/RecentReceipt";

const SigninPage = lazy(() => import("./pages/SigninPage"))
const TransferPage = lazy(() => import("./pages/TransferPage"))

const App = () => {
    return <Suspense fallback={<h1 className="text-center mt-5 text-2xl font-bold">Loading....</h1>}>
            <div className="bg-gray-900 min-h-screen pb-12 min-w-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<SigninPage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/transfer" element={<TransferPage />} />
                </Routes>
            </div>
        </Suspense>
}

export default App