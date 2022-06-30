import axios from "axios";
import { useEffect, useState } from "react";
import { MdRefresh, MdExpandMore } from "react-icons/md";
import TokenSelector from "./TokenSelector";

const SwapBox = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center h-[500px] ">
      <div className="flex flex-col w-4/5 lg:w-2/3 p-4 md:p-10 bg-black rounded-xl ml-[10%]">
        <div className="flex w-full justify-end">
          <div className="flex w-7 h-7 rounded-full bg-[#2E2E37] justify-center items-center">
            <MdRefresh size="12px" color="white" />
          </div>
          <div className="flex w-16 h-7 rounded-xl bg-[#2E2E37] justify-center items-center ml-2">
            <img src="/slippage.svg" alt="slippage" className="w-3 white" />
            <span className="text-secondary text-sm font-medium ml-1">
              0.5%
            </span>
          </div>
        </div>
        <span className="text-secondary text-2 mt-6">
          You pay
        </span>
        <TokenSelector init={15}/>
        <div className="flex flex-col items-center">
          <div className="flex w-8 h-8 bg-[#2E2E37] hover:bg-primary border-2 border-white rounded-full justify-center items-center my-4  cursor-pointer">
            <img src="/swap.svg" alt="swap" className="w-4" />
          </div>
        </div>
        <span className="text-secondary text-2">
          You receive
        </span>
        <TokenSelector />
        <button className="btn btn-primary w-full h-[57px] btn-wide text-secondary mt-6"
        // onClick={}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  )
};

export default SwapBox;