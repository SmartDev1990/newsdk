import {
  Bitgert,
  Binance,
  Ether,
} from '../entities/Native'

import { ChainId } from '../enums'
import { NativeMap } from '../types'

export const NATIVE: NativeMap = {
  [ChainId.ETHEREUM]: Ether.onChain(ChainId.ETHEREUM),
  [ChainId.BITGERT]: Bitgert.onChain(ChainId.BITGERT),
  [ChainId.MATIC]: Matic.onChain(ChainId.MATIC),
  [ChainId.MATIC_TESTNET]: Matic.onChain(ChainId.MATIC_TESTNET),
  [ChainId.BSC]: Binance.onChain(ChainId.BSC),
  [ChainId.BSC_TESTNET]: Binance.onChain(ChainId.BSC_TESTNET),
}
