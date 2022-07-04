import { useSigningClient } from "contexts/cosmwasm";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "components/ThemeToggle";
import { useEffect, useCallback } from "react";

function Navbar() {
  const { walletAddress, connectWallet, disconnect } = useSigningClient();
  const handleConnect = () => {
    if (walletAddress.length === 0) {
      connectWallet();
    } else {
      disconnect();
    }
  };

  const reconnect = useCallback(() => {
    disconnect();
    connectWallet();
  }, [disconnect, connectWallet]);

  useEffect(() => {
    window.addEventListener("keplr_keystorechange", reconnect);

    return () => {
      window.removeEventListener("keplr_keystorechange", reconnect);
    };
  }, [reconnect]);

  const PUBLIC_SITE_ICON_URL = process.env.NEXT_PUBLIC_SITE_ICON_URL || "";

  return (
    <div className="w-full px-2 md:px-16">
      <nav className="flex flex-wrap text-center md:text-left md:flex flex-row w-full items-center py-4 ">
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
        <div className="flex flex-grow lg:flex-grow-0 max-w-full">
          {NavItems.map((item, index) => (
            <Link href={item.url} key={index}>
              <a className="ml-2 md:ml-[39px] text-gray-300">
                {item.title}
              </a>
            </Link>
          ))}
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