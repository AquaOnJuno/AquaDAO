// import { useSigningClient } from "contexts/cosmwasm";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "components/ThemeToggle";

import { SigningStargateClient } from "@cosmjs/stargate";
import { Bech32Address } from "@keplr-wallet/cosmos";
import { Keplr } from "@keplr-wallet/types";
import { KeplrWalletConnectV1, useWalletManager } from "cosmodal";
import { EmbedChainInfos } from "../config";

const AUTO_CONNECT_WALLET_KEY = "auto_connect_wallet";

function Navbar() {
  const PUBLIC_SITE_ICON_URL = process.env.NEXT_PUBLIC_SITE_ICON_URL || "";

  const [address, setAddress] = useState("");
  const [stakeCurrencyAmount, setStakeCurrencyAmount] = useState(0);
  const {
    getWallet,
    clearLastUsedWallet,
    connectionType,
    setDefaultConnectionType,
  } = useWalletManager();

  const currentChain = EmbedChainInfos[0];

  const connectWallet = async () => {
    const wallet: Keplr | KeplrWalletConnectV1 = await getWallet();
    await wallet.enable([currentChain.chainId]);
    const key = await wallet.getKey(currentChain.chainId);
    setAddress(key.bech32Address);

    const offlineSigner = wallet.getOfflineSigner(currentChain.chainId);
    const client = await SigningStargateClient.connectWithSigner(
      currentChain.rpc,
      offlineSigner
    );
    const stakeCurrencyBalance = await client.getBalance(
      key.bech32Address,
      currentChain.stakeCurrency.coinMinimalDenom
    );

    setStakeCurrencyAmount(parseFloat(stakeCurrencyBalance.amount) / 1000000);
  };

  const signOut = () => {
    setAddress("");
    clearLastUsedWallet();
    setDefaultConnectionType(undefined);
    localStorage.removeItem(AUTO_CONNECT_WALLET_KEY);
    // For removing cached WalletConnect info
    localStorage.removeItem("walletconnect");
  };

  // Store connected wallet type
  useEffect(() => {
    if (connectionType) {
      localStorage.setItem(AUTO_CONNECT_WALLET_KEY, connectionType);
    }
  }, [connectionType]);

  // Automatically connect wallet as stored type, even if page refreshed,
  useEffect(() => {
    const autoConnectionType = localStorage.getItem(AUTO_CONNECT_WALLET_KEY);
    if (autoConnectionType) {
      setDefaultConnectionType(autoConnectionType);
      connectWallet();
    }
  }, []);

  return (
    <div className="w-full px-2 md:px-16">
      <nav className="flex w-full justify-between">
        <div className="flex  text-center md:text-left md:flex flex-row items-center py-4 ">
          <div className="flex items-center">
            <Link href="/">
              <a>
                {PUBLIC_SITE_ICON_URL.length > 0 ? (
                  <Image
                    src={PUBLIC_SITE_ICON_URL}
                    height={70}
                    width={44}
                    alt="Logo"
                  />
                ) : (
                  <span className="text-2xl">⚛️ </span>
                )}
              </a>
            </Link>
          </div>
          <div className="flex flex-grow lg:flex-grow-0 max-w-full items-center">
            {NavItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <a className="ml-2 md:ml-[39px] text-gray-300">
                  {item.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={(e) => (address ? signOut() : connectWallet())}
            className="border border-white h-12 rounded-md ml-3 py-2 px-3 flex items-center justify-center text-secondary"
          >
            {address ? "Sign Out" : "Connect Wallet"}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

const NavItems = [
  {
    title: "Map",
    url: "/map"
  },
  {
    title: "Buy $AQUA",
    url: "/buyAqua"
  },
  // {
  //   title: "Governance",
  //   url: "/governance"
  // },
  // {
  //   title: "Airdrop",
  //   url: "/airdrop"
  // },
  // {
  //   title: "Contact",
  //   url: "/contact"
  // },
  {
    title: "NFT Launch",
    url: "/nftlaunch"
  }
]