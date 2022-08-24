import { ChainTokenMap, TokenMap } from '../types'
import { RICE_ADDRESS, SUSHI_ADDRESS, USDC_ADDRESS, USD_ADDRESS, WETH9_ADDRESS, WNATIVE_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'

export const USDC: TokenMap = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, USDC_ADDRESS[ChainId.ETHEREUM], 6, 'USDC', 'USD Coin'),
  [ChainId.BITGERT]: new Token(ChainId.BITGERT, USDC_ADDRESS[ChainId.BITGERT], 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, USDC_ADDRESS[ChainId.MATIC], 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC_TESTNET]: new Token(ChainId.MATIC_TESTNET, USDC_ADDRESS[ChainId.MATIC_TESTNET], 6, 'USDC', 'USD Coin'),
  [ChainId.BSC]: new Token(ChainId.BSC, USDC_ADDRESS[ChainId.BSC], 18, 'USDC', 'USD Coin'),
}

export const USD: TokenMap = {
  ...USDC,
  [ChainId.BITGERT]: new Token(ChainId.BITGERT, USDC_ADDRESS[ChainId.BITGERT], 6, 'USDC', 'USD Coin'),
}

export const WNATIVE: TokenMap = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, WNATIVE_ADDRESS[ChainId.ETHEREUM], 18, 'WETH', 'Wrapped Ethereum'),
  [ChainId.BITGERT]: new Token(ChainId.BITGERT, WNATIVE_ADDRESS[ChainId.BITGERT], 18, 'WBRISE', 'Wrapped Brise'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, WNATIVE_ADDRESS[ChainId.MATIC], 18, 'WMATIC', 'Wrapped Matic'),
  [ChainId.MATIC_TESTNET]: new Token(
    ChainId.MATIC_TESTNET,
    WNATIVE_ADDRESS[ChainId.MATIC_TESTNET],
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, WNATIVE_ADDRESS[ChainId.BSC], 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    WNATIVE_ADDRESS[ChainId.BSC_TESTNET],
    18,
    'WBNB',
    'Wrapped BNB'
  ),
}

export const RICE: ChainTokenMap = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, SUSHI_ADDRESS[ChainId.ETHEREUM], 18, 'SUSHI', 'SushiToken'),
  [ChainId.BITGERT]: new Token(ChainId.BITGERT, RICE_ADDRESS[ChainId.BITGERT], 18, 'RICE', 'RiceToken'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, SUSHI_ADDRESS[ChainId.MATIC], 18, 'SUSHI', 'SushiToken'),
  [ChainId.BSC]: new Token(ChainId.BSC, SUSHI_ADDRESS[ChainId.BSC], 18, 'SUSHI', 'SushiToken'),
}
