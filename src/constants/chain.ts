import { ChainId } from '../enums'
import { ChainKey } from '../enums'

export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.ETHEREUM]: ChainKey.ETHEREUM,
  [ChainId.BITGERT]: ChainKey.BITGERT,
  [ChainId.MATIC]: ChainKey.MATIC,
  [ChainId.MATIC_TESTNET]: ChainKey.MATIC_TESTNET,
  [ChainId.BSC]: ChainKey.BSC,
  [ChainId.BSC_TESTNET]: ChainKey.BSC_TESTNET,
}
