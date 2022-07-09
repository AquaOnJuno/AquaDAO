import React, { useState, useEffect, FunctionComponent } from "react";
import axios from "axios";
import { MdRefresh, MdExpandMore } from "react-icons/md";

interface Props {
  init?: number
}
const TokenSelector:FunctionComponent<Props> = ({init = 0}) => {
  const [tokenList, setTokenList] = useState<any[]>([
    {
      name: "AQUA",
      logoURI: "/aqua.svg"
    }
  ]);
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState("0");

  useEffect(() => {
    const fetchTokenList = async () => {
      const res = await axios.get("https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/ibc_assets.json");

      setTokenList(res.data.tokens);
      setIndex(init);
      return res;
    }
    fetchTokenList();
  }, [])

  const TokenItem = ({ name, logoURI, index }: { name: string, logoURI: string, index: number }) => {
    return (
      <div className="flex p-3 hover:bg-red-100 mt-4" onClick={() => setIndex(index)}>
        <img src={logoURI} alt={name} className="w-8 h-8" />
        <span className="whitespace-nowrap">
          {name}
        </span>
      </div>
    )
  }

  return (
    <div className="flex w-full h-16 bg-[#FFFFFF40] rounded-xl">
      <div className="dropdown flex w-full">
        <div tabIndex={0} className="flex w-full  items-center">
          <img src={tokenList[index].logoURI} alt="token" className="w-8 h-8 ml-4" />
          <span className="text-secondary ml-2 text-base whitespace-nowrap">
            {tokenList[index].name}
          </span>
          <MdExpandMore size="32px" color="white" className="ml-2" />
        </div>
        <div className="dropdown-content flex flex-col menu p-2 bg-base-100 rounded-box top-[100%] w-[300px]">
          <div
            tabIndex={0}
            className="thin-scrollbar flex flex-col w-full p-2 shadow h-[300px] overflow-y-scroll"
          >
            {tokenList.map((token: any, index: number) => (
              <TokenItem name={token.name} logoURI={token.logoURI} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
      <input
        type="text"
        className="w-full bg-transparent outline-none border-none text-secondary text-right mr-4"
        value={amount}
      />
    </div>
  )
};

export default TokenSelector;