import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
// import { SigningCosmWasmProvider } from "contexts/cosmwasm";

import { getKeplrFromWindow } from "@keplr-wallet/stores";
import WalletConnect from "@walletconnect/client";
import {
  KeplrWalletConnectV1,
  WalletInfo,
  WalletManagerProvider,
} from "cosmodal";
import { EmbedChainInfos } from "../config";

const walletInfoList: WalletInfo[] = [
  {
    id: "keplr-wallet-extension",
    name: "Keplr Wallet",
    description: "Keplr Browser Extension",
    logoImgUrl: "/keplr-wallet-extension.png",
    getWallet: () => getKeplrFromWindow(),
  },
  {
    id: "walletconnect-keplr",
    name: "WalletConnect",
    description: "Keplr Mobile",
    logoImgUrl: "/walletconnect-keplr.png",
    getWallet: (connector?: WalletConnect) =>
      Promise.resolve(
        connector
          ? new KeplrWalletConnectV1(connector, EmbedChainInfos)
          : undefined
      ),
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletManagerProvider walletInfoList={walletInfoList}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletManagerProvider>
  );
}
export default MyApp;
