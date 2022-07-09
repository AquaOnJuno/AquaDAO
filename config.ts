import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

export const EmbedChainInfos: ChainInfo[] = [
  {
    rpc: "https://rpc.juno-1.deuslabs.fi",
    rest: "https://rpc.juno-1.deuslabs.fi",
    chainId: "juno-1",
    chainName: "Juno",
    stakeCurrency: {
      coinDenom: "JUNO",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno",
      coinImageUrl: "/juno.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("juno"),
    currencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno",
        coinImageUrl: "/juno.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "juno",
        coinImageUrl: "/juno.svg",
      },
    ],
    coinType: 118,
    features: ["ibc-transfer", "ibc-go"],
  },
];
