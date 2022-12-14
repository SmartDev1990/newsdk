import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const SUSHI_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '',
  [ChainId.BITGERT]: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
  [ChainId.MATIC]: '',
  [ChainId.BSC]: '',
}

export const RICE_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '',
  [ChainId.BITGERT]: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
  [ChainId.MATIC]: '',
  [ChainId.BSC]: '',
}

export const XRICE_ADDRESS: AddressMap = {
  [ChainId.BITGERT]: '0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56',
}

export const USDC_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  [ChainId.BITGERT]: '0xcf2DF9377A4e3C10e9EA29fDB8879d74C27FCDE7',
  [ChainId.MATIC]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  [ChainId.BSC]: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
}

export const USD_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: USDC_ADDRESS[ChainId.ETHEREUM],
  [ChainId.BITGERT]: USDC_ADDRESS[ChainId.BITGERT],
  [ChainId.MATIC]: USDC_ADDRESS[ChainId.MATIC],
  [ChainId.BSC]: USDC_ADDRESS[ChainId.BSC],
}

export const WETH9_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  [ChainId.BITGERT]: '0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710',
  [ChainId.BSC]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  [ChainId.MATIC]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: WETH9_ADDRESS[ChainId.ETHEREUM],
  [ChainId.BITGERT]: WETH9_ADDRESS[ChainId.BITGERT],
  [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  [ChainId.BSC]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  [ChainId.BSC_TESTNET]: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
}

export const DAI_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  [ChainId.BITGERT]: '0x5d8CEEf69160a9692471670D5f7147157656fF46',
  [ChainId.MATIC]: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  [ChainId.BSC]: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
}

export const USDT_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  [ChainId.BITGERT]: '0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06',
  [ChainId.MATIC]: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  [ChainId.BSC]: '0x55d398326f99059fF775485246999027B3197955',
}

export const MIM_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
  [ChainId.BITGERT]: '0x4603aC7a1fdf9BdEf680C818A92874Db66900C94',
  [ChainId.BSC]: '0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba',
  [ChainId.MATIC]: '0x49a0400587A7F65072c87c4910449fDcC5c47242',
}

export const FRAX_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
  [ChainId.BITGERT]: '',
  [ChainId.BSC]: '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',
  [ChainId.MATIC]: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.BITGERT]: '0xb5AFBC6F9CC06a3CC3403eCae0957E153c7dad5C',
  [ChainId.MATIC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.MATIC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  [ChainId.BITGERT]: '0x5635149e37007885017eb8c92EfD79F02747b1dF',
  [ChainId.MATIC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.MATIC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.BITGERT]: '0x338c63fa6Df4B6C35158894343a22E8c1cec5D0a',
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.BITGERT]: '',
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.BITGERT]: '',
}

export const TIMELOCK_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
  [ChainId.BITGERT]: '0x936e1d1bfc2547544a4d28d3d8ce66280e6be6c3',
}

export const BENTOBOX_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.BITGERT]: '0x7489907896a65dcccb79c95bd4a00f7e922b8652',
  [ChainId.MATIC]: '0x0319000133d3AdA02600f0875d2cf03D442C3367',
  [ChainId.MATIC_TESTNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.BSC]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.BSC_TESTNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
}

export const KASHI_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.BITGERT]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.MATIC]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.BSC]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
}

export const SUSHISWAP_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.BITGERT]: '0xf441ca6ed0c071adaa58a89dd9b6cf5a04b9af10',
  [ChainId.MATIC]: '0xe9589382130Ded5DF2397E2fD7A3E9b41DD2701D',
  [ChainId.BSC]: '0x1766733112408b95239aD1951925567CB1203084',
}

export const SUSHISWAP_MULTISWAPPER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.BITGERT]: '0xd7a2043d18a1ce4301f2ebc7fa2741a56cd9de7e',
  [ChainId.MATIC]: '0x73BE093B84c773fe8eE0f76DDc0829E45c215415',
  [ChainId.BSC]: '0x86c655cAc122e9A2fd9Ae1f79Df27b30E357968c',
}

export const SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.BITGERT]: '0x71c8ebeda911af79a3fb01655aa4e3c1c31a4525',
  [ChainId.MATIC]: '0xDB6C4EDd9545d3b815dA85E6429B699c418886f9',
  [ChainId.BSC]: '0x1B16149Edaf1EFa6ADE6aEEF33e63C6e08c9bB1B',
}

export const PEGGED_ORACLE_ADDRESS = ''

export const SUSHISWAP_TWAP_0_ORACLE_ADDRESS = ''

export const SUSHISWAP_TWAP_1_ORACLE_ADDRESS = ''

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.MATIC]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.BITGERT]: '',
  [ChainId.BSC]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
}

export const BORING_HELPER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.BITGERT]: '',
  [ChainId.MATIC]: '0xA77a7fD5a16237B85E0FAd02C51f459D18AE93Cd',
  [ChainId.BSC]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
}

export const MINICHEF_ADDRESS: AddressMap = {
  [ChainId.MATIC]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
  [ChainId.BITGERT]: '',
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.BITGERT]: '',
}

export const ZAPPER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2',
  [ChainId.BITGERT]: '',
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982',
  [ChainId.BITGERT]: '',
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.BITGERT]: '0x3AFd2494833cbB234B363440E65BC2A171Dbb267',
  [ChainId.MATIC]: '0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
}

export const BALANCE_FETCHER_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x386a4B75578C7843A6082EFe181D5d629236C047',
  [ChainId.BITGERT]: '0xfb9d2a104789563cac593771b4f854c6495b7bef',
  [ChainId.MATIC]: '0x06a846BA430Ed005bE60f8598B4C563dbaa6feF0',
  [ChainId.BSC]: '0x9d6c13Bc5269E553C4697767b4c267FB33Dd8d1A',
}

export const MULTISIG_ADDRESS: AddressMap = {
  [ChainId.ETHEREUM]: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
  [ChainId.BITGERT]: '',
  [ChainId.MATIC]: '0x850a57630A2012B2494779fBc86bBc24F2a7baeF',
  [ChainId.BSC]: '0xc6fD91aD4919Fd91e2c84077ba648092cB499638',
}
