'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var JSBI = _interopDefault(require('jsbi'));
var invariant = _interopDefault(require('tiny-invariant'));
var address = require('@ethersproject/address');
var warning = _interopDefault(require('tiny-warning'));
var _Big = _interopDefault(require('big.js'));
var _Decimal = _interopDefault(require('decimal.js-light'));
var toFormat = _interopDefault(require('toformat'));
var solidity = require('@ethersproject/solidity');

(function (ChainId) {
  ChainId[ChainId["ETHEREUM"] = 1] = "ETHEREUM";
  ChainId[ChainId["BITGERT"] = 32520] = "BITGERT";
  ChainId[ChainId["MATIC"] = 137] = "MATIC";
  ChainId[ChainId["MATIC_TESTNET"] = 80001] = "MATIC_TESTNET";
  ChainId[ChainId["BSC"] = 56] = "BSC";
  ChainId[ChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
})(exports.ChainId || (exports.ChainId = {}));

(function (ChainKey) {
  ChainKey["BSC"] = "bsc";
  ChainKey["BSC_TESTNET"] = "bsc-testnet";
  ChainKey["ETHEREUM"] = "ethereum";
  ChainKey["BITGERT"] = "bitgert";
  ChainKey["MATIC"] = "polygon";
  ChainKey["MATIC_TESTNET"] = "matic-testnet";
})(exports.ChainKey || (exports.ChainKey = {}));

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 3] = "ROUND_UP";
})(exports.Rounding || (exports.Rounding = {}));

(function (SolidityType) {
  SolidityType["uint8"] = "uint8";
  SolidityType["uint256"] = "uint256";
})(exports.SolidityType || (exports.SolidityType = {}));

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(exports.TradeType || (exports.TradeType = {}));

(function (TradeVersion) {
  TradeVersion[TradeVersion["V2TRADE"] = 0] = "V2TRADE";
  TradeVersion[TradeVersion["V3TRADE"] = 1] = "V3TRADE";
})(exports.TradeVersion || (exports.TradeVersion = {}));

var _SUSHI_ADDRESS, _RICE_ADDRESS, _XRICE_ADDRESS, _USDC_ADDRESS, _USD_ADDRESS, _WETH9_ADDRESS, _WNATIVE_ADDRESS, _DAI_ADDRESS, _USDT_ADDRESS, _MIM_ADDRESS, _FRAX_ADDRESS, _FACTORY_ADDRESS, _ROUTER_ADDRESS, _MASTERCHEF_ADDRESS, _BAR_ADDRESS, _MAKER_ADDRESS, _TIMELOCK_ADDRESS, _BENTOBOX_ADDRESS, _KASHI_ADDRESS, _SUSHISWAP_SWAPPER_AD, _SUSHISWAP_MULTISWAPP, _SUSHISWAP_MULTI_EXAC, _CHAINLINK_ORACLE_ADD, _BORING_HELPER_ADDRES, _MINICHEF_ADDRESS, _MASTERCHEF_V2_ADDRES, _ENS_REGISTRAR_ADDRES, _ZAPPER_ADDRESS, _MERKLE_DISTRIBUTOR_A, _MULTICALL2_ADDRESS, _BALANCE_FETCHER_ADDR, _MULTISIG_ADDRESS;
var SUSHI_ADDRESS = (_SUSHI_ADDRESS = {}, _SUSHI_ADDRESS[exports.ChainId.ETHEREUM] = '', _SUSHI_ADDRESS[exports.ChainId.BITGERT] = '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34', _SUSHI_ADDRESS[exports.ChainId.MATIC] = '', _SUSHI_ADDRESS[exports.ChainId.BSC] = '', _SUSHI_ADDRESS);
var RICE_ADDRESS = (_RICE_ADDRESS = {}, _RICE_ADDRESS[exports.ChainId.ETHEREUM] = '', _RICE_ADDRESS[exports.ChainId.BITGERT] = '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34', _RICE_ADDRESS[exports.ChainId.MATIC] = '', _RICE_ADDRESS[exports.ChainId.BSC] = '', _RICE_ADDRESS);
var XRICE_ADDRESS = (_XRICE_ADDRESS = {}, _XRICE_ADDRESS[exports.ChainId.BITGERT] = '0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56', _XRICE_ADDRESS);
var USDC_ADDRESS = (_USDC_ADDRESS = {}, _USDC_ADDRESS[exports.ChainId.ETHEREUM] = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', _USDC_ADDRESS[exports.ChainId.BITGERT] = '0xcf2DF9377A4e3C10e9EA29fDB8879d74C27FCDE7', _USDC_ADDRESS[exports.ChainId.MATIC] = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', _USDC_ADDRESS[exports.ChainId.BSC] = '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', _USDC_ADDRESS);
var USD_ADDRESS = (_USD_ADDRESS = {}, _USD_ADDRESS[exports.ChainId.ETHEREUM] = USDC_ADDRESS[exports.ChainId.ETHEREUM], _USD_ADDRESS[exports.ChainId.BITGERT] = USDC_ADDRESS[exports.ChainId.BITGERT], _USD_ADDRESS[exports.ChainId.MATIC] = USDC_ADDRESS[exports.ChainId.MATIC], _USD_ADDRESS[exports.ChainId.BSC] = USDC_ADDRESS[exports.ChainId.BSC], _USD_ADDRESS);
var WETH9_ADDRESS = (_WETH9_ADDRESS = {}, _WETH9_ADDRESS[exports.ChainId.ETHEREUM] = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', _WETH9_ADDRESS[exports.ChainId.BITGERT] = '0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710', _WETH9_ADDRESS[exports.ChainId.BSC] = '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', _WETH9_ADDRESS[exports.ChainId.MATIC] = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', _WETH9_ADDRESS);
var WNATIVE_ADDRESS = (_WNATIVE_ADDRESS = {}, _WNATIVE_ADDRESS[exports.ChainId.ETHEREUM] = WETH9_ADDRESS[exports.ChainId.ETHEREUM], _WNATIVE_ADDRESS[exports.ChainId.BITGERT] = WETH9_ADDRESS[exports.ChainId.BITGERT], _WNATIVE_ADDRESS[exports.ChainId.MATIC] = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', _WNATIVE_ADDRESS[exports.ChainId.BSC] = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', _WNATIVE_ADDRESS[exports.ChainId.BSC_TESTNET] = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', _WNATIVE_ADDRESS);
var DAI_ADDRESS = (_DAI_ADDRESS = {}, _DAI_ADDRESS[exports.ChainId.ETHEREUM] = '0x6B175474E89094C44Da98b954EedeAC495271d0F', _DAI_ADDRESS[exports.ChainId.BITGERT] = '0x5d8CEEf69160a9692471670D5f7147157656fF46', _DAI_ADDRESS[exports.ChainId.MATIC] = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', _DAI_ADDRESS[exports.ChainId.BSC] = '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', _DAI_ADDRESS);
var USDT_ADDRESS = (_USDT_ADDRESS = {}, _USDT_ADDRESS[exports.ChainId.ETHEREUM] = '0xdAC17F958D2ee523a2206206994597C13D831ec7', _USDT_ADDRESS[exports.ChainId.BITGERT] = '0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06', _USDT_ADDRESS[exports.ChainId.MATIC] = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', _USDT_ADDRESS[exports.ChainId.BSC] = '0x55d398326f99059fF775485246999027B3197955', _USDT_ADDRESS);
var MIM_ADDRESS = (_MIM_ADDRESS = {}, _MIM_ADDRESS[exports.ChainId.ETHEREUM] = '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3', _MIM_ADDRESS[exports.ChainId.BITGERT] = '0x4603aC7a1fdf9BdEf680C818A92874Db66900C94', _MIM_ADDRESS[exports.ChainId.BSC] = '0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba', _MIM_ADDRESS[exports.ChainId.MATIC] = '0x49a0400587A7F65072c87c4910449fDcC5c47242', _MIM_ADDRESS);
var FRAX_ADDRESS = (_FRAX_ADDRESS = {}, _FRAX_ADDRESS[exports.ChainId.ETHEREUM] = '0x853d955aCEf822Db058eb8505911ED77F175b99e', _FRAX_ADDRESS[exports.ChainId.BITGERT] = '', _FRAX_ADDRESS[exports.ChainId.BSC] = '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40', _FRAX_ADDRESS[exports.ChainId.MATIC] = '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89', _FRAX_ADDRESS);
var FACTORY_ADDRESS = (_FACTORY_ADDRESS = {}, _FACTORY_ADDRESS[exports.ChainId.ETHEREUM] = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac', _FACTORY_ADDRESS[exports.ChainId.BITGERT] = '0xb5AFBC6F9CC06a3CC3403eCae0957E153c7dad5C', _FACTORY_ADDRESS[exports.ChainId.MATIC] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[exports.ChainId.MATIC_TESTNET] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[exports.ChainId.BSC] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[exports.ChainId.BSC_TESTNET] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS);
var ROUTER_ADDRESS = (_ROUTER_ADDRESS = {}, _ROUTER_ADDRESS[exports.ChainId.ETHEREUM] = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F', _ROUTER_ADDRESS[exports.ChainId.BITGERT] = '0x5635149e37007885017eb8c92EfD79F02747b1dF', _ROUTER_ADDRESS[exports.ChainId.MATIC] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[exports.ChainId.MATIC_TESTNET] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[exports.ChainId.BSC] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[exports.ChainId.BSC_TESTNET] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS);
var MASTERCHEF_ADDRESS = (_MASTERCHEF_ADDRESS = {}, _MASTERCHEF_ADDRESS[exports.ChainId.ETHEREUM] = '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd', _MASTERCHEF_ADDRESS[exports.ChainId.BITGERT] = '0x338c63fa6Df4B6C35158894343a22E8c1cec5D0a', _MASTERCHEF_ADDRESS);
var BAR_ADDRESS = (_BAR_ADDRESS = {}, _BAR_ADDRESS[exports.ChainId.ETHEREUM] = '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', _BAR_ADDRESS[exports.ChainId.BITGERT] = '', _BAR_ADDRESS);
var MAKER_ADDRESS = (_MAKER_ADDRESS = {}, _MAKER_ADDRESS[exports.ChainId.ETHEREUM] = '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50', _MAKER_ADDRESS[exports.ChainId.BITGERT] = '', _MAKER_ADDRESS);
var TIMELOCK_ADDRESS = (_TIMELOCK_ADDRESS = {}, _TIMELOCK_ADDRESS[exports.ChainId.ETHEREUM] = '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1', _TIMELOCK_ADDRESS[exports.ChainId.BITGERT] = '0x936e1d1bfc2547544a4d28d3d8ce66280e6be6c3', _TIMELOCK_ADDRESS);
var BENTOBOX_ADDRESS = (_BENTOBOX_ADDRESS = {}, _BENTOBOX_ADDRESS[exports.ChainId.ETHEREUM] = '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966', _BENTOBOX_ADDRESS[exports.ChainId.BITGERT] = '0x7489907896a65dcccb79c95bd4a00f7e922b8652', _BENTOBOX_ADDRESS[exports.ChainId.MATIC] = '0x0319000133d3AdA02600f0875d2cf03D442C3367', _BENTOBOX_ADDRESS[exports.ChainId.MATIC_TESTNET] = '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966', _BENTOBOX_ADDRESS[exports.ChainId.BSC] = '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966', _BENTOBOX_ADDRESS[exports.ChainId.BSC_TESTNET] = '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966', _BENTOBOX_ADDRESS);
var KASHI_ADDRESS = (_KASHI_ADDRESS = {}, _KASHI_ADDRESS[exports.ChainId.ETHEREUM] = '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42', _KASHI_ADDRESS[exports.ChainId.BITGERT] = '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42', _KASHI_ADDRESS[exports.ChainId.MATIC] = '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7', _KASHI_ADDRESS[exports.ChainId.BSC] = '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42', _KASHI_ADDRESS);
var SUSHISWAP_SWAPPER_ADDRESS = (_SUSHISWAP_SWAPPER_AD = {}, _SUSHISWAP_SWAPPER_AD[exports.ChainId.ETHEREUM] = '0x1766733112408b95239aD1951925567CB1203084', _SUSHISWAP_SWAPPER_AD[exports.ChainId.BITGERT] = '0xf441ca6ed0c071adaa58a89dd9b6cf5a04b9af10', _SUSHISWAP_SWAPPER_AD[exports.ChainId.MATIC] = '0xe9589382130Ded5DF2397E2fD7A3E9b41DD2701D', _SUSHISWAP_SWAPPER_AD[exports.ChainId.BSC] = '0x1766733112408b95239aD1951925567CB1203084', _SUSHISWAP_SWAPPER_AD);
var SUSHISWAP_MULTISWAPPER_ADDRESS = (_SUSHISWAP_MULTISWAPP = {}, _SUSHISWAP_MULTISWAPP[exports.ChainId.ETHEREUM] = '0x545820d5Cc05248da112419fEfb18522c63C8e12', _SUSHISWAP_MULTISWAPP[exports.ChainId.BITGERT] = '0xd7a2043d18a1ce4301f2ebc7fa2741a56cd9de7e', _SUSHISWAP_MULTISWAPP[exports.ChainId.MATIC] = '0x73BE093B84c773fe8eE0f76DDc0829E45c215415', _SUSHISWAP_MULTISWAPP[exports.ChainId.BSC] = '0x86c655cAc122e9A2fd9Ae1f79Df27b30E357968c', _SUSHISWAP_MULTISWAPP);
var SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS = (_SUSHISWAP_MULTI_EXAC = {}, _SUSHISWAP_MULTI_EXAC[exports.ChainId.ETHEREUM] = '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7', _SUSHISWAP_MULTI_EXAC[exports.ChainId.BITGERT] = '0x71c8ebeda911af79a3fb01655aa4e3c1c31a4525', _SUSHISWAP_MULTI_EXAC[exports.ChainId.MATIC] = '0xDB6C4EDd9545d3b815dA85E6429B699c418886f9', _SUSHISWAP_MULTI_EXAC[exports.ChainId.BSC] = '0x1B16149Edaf1EFa6ADE6aEEF33e63C6e08c9bB1B', _SUSHISWAP_MULTI_EXAC);
var PEGGED_ORACLE_ADDRESS = '';
var SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '';
var SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '';
var CHAINLINK_ORACLE_ADDRESS = (_CHAINLINK_ORACLE_ADD = {}, _CHAINLINK_ORACLE_ADD[exports.ChainId.ETHEREUM] = '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB', _CHAINLINK_ORACLE_ADD[exports.ChainId.MATIC] = '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB', _CHAINLINK_ORACLE_ADD[exports.ChainId.BITGERT] = '', _CHAINLINK_ORACLE_ADD[exports.ChainId.BSC] = '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB', _CHAINLINK_ORACLE_ADD);
var BORING_HELPER_ADDRESS = (_BORING_HELPER_ADDRES = {}, _BORING_HELPER_ADDRES[exports.ChainId.ETHEREUM] = '0x11Ca5375AdAfd6205E41131A4409f182677996E6', _BORING_HELPER_ADDRES[exports.ChainId.BITGERT] = '', _BORING_HELPER_ADDRES[exports.ChainId.MATIC] = '0xA77a7fD5a16237B85E0FAd02C51f459D18AE93Cd', _BORING_HELPER_ADDRES[exports.ChainId.BSC] = '0x11Ca5375AdAfd6205E41131A4409f182677996E6', _BORING_HELPER_ADDRES);
var MINICHEF_ADDRESS = (_MINICHEF_ADDRESS = {}, _MINICHEF_ADDRESS[exports.ChainId.MATIC] = '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F', _MINICHEF_ADDRESS);
var MASTERCHEF_V2_ADDRESS = (_MASTERCHEF_V2_ADDRES = {}, _MASTERCHEF_V2_ADDRES[exports.ChainId.ETHEREUM] = '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d', _MASTERCHEF_V2_ADDRES[exports.ChainId.BITGERT] = '', _MASTERCHEF_V2_ADDRES);
var ENS_REGISTRAR_ADDRESS = (_ENS_REGISTRAR_ADDRES = {}, _ENS_REGISTRAR_ADDRES[exports.ChainId.ETHEREUM] = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e', _ENS_REGISTRAR_ADDRES[exports.ChainId.BITGERT] = '', _ENS_REGISTRAR_ADDRES);
var ZAPPER_ADDRESS = (_ZAPPER_ADDRESS = {}, _ZAPPER_ADDRESS[exports.ChainId.ETHEREUM] = '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2', _ZAPPER_ADDRESS[exports.ChainId.BITGERT] = '', _ZAPPER_ADDRESS);
var MERKLE_DISTRIBUTOR_ADDRESS = (_MERKLE_DISTRIBUTOR_A = {}, _MERKLE_DISTRIBUTOR_A[exports.ChainId.ETHEREUM] = '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982', _MERKLE_DISTRIBUTOR_A[exports.ChainId.BITGERT] = '', _MERKLE_DISTRIBUTOR_A);
var MULTICALL2_ADDRESS = (_MULTICALL2_ADDRESS = {}, _MULTICALL2_ADDRESS[exports.ChainId.ETHEREUM] = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696', _MULTICALL2_ADDRESS[exports.ChainId.BITGERT] = '0x3AFd2494833cbB234B363440E65BC2A171Dbb267', _MULTICALL2_ADDRESS[exports.ChainId.MATIC] = '0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD', _MULTICALL2_ADDRESS[exports.ChainId.BSC] = '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9', _MULTICALL2_ADDRESS);
var BALANCE_FETCHER_ADDRESS = (_BALANCE_FETCHER_ADDR = {}, _BALANCE_FETCHER_ADDR[exports.ChainId.ETHEREUM] = '0x386a4B75578C7843A6082EFe181D5d629236C047', _BALANCE_FETCHER_ADDR[exports.ChainId.BITGERT] = '0xfb9d2a104789563cac593771b4f854c6495b7bef', _BALANCE_FETCHER_ADDR[exports.ChainId.MATIC] = '0x06a846BA430Ed005bE60f8598B4C563dbaa6feF0', _BALANCE_FETCHER_ADDR[exports.ChainId.BSC] = '0x9d6c13Bc5269E553C4697767b4c267FB33Dd8d1A', _BALANCE_FETCHER_ADDR);
var MULTISIG_ADDRESS = (_MULTISIG_ADDRESS = {}, _MULTISIG_ADDRESS[exports.ChainId.ETHEREUM] = '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7', _MULTISIG_ADDRESS[exports.ChainId.BITGERT] = '', _MULTISIG_ADDRESS[exports.ChainId.MATIC] = '0x850a57630A2012B2494779fBc86bBc24F2a7baeF', _MULTISIG_ADDRESS[exports.ChainId.BSC] = '0xc6fD91aD4919Fd91e2c84077ba648092cB499638', _MULTISIG_ADDRESS);

var _CHAIN_KEY;
var CHAIN_KEY = (_CHAIN_KEY = {}, _CHAIN_KEY[exports.ChainId.ETHEREUM] = exports.ChainKey.ETHEREUM, _CHAIN_KEY[exports.ChainId.BITGERT] = exports.ChainKey.BITGERT, _CHAIN_KEY[exports.ChainId.MATIC] = exports.ChainKey.MATIC, _CHAIN_KEY[exports.ChainId.MATIC_TESTNET] = exports.ChainKey.MATIC_TESTNET, _CHAIN_KEY[exports.ChainId.BSC] = exports.ChainKey.BSC, _CHAIN_KEY[exports.ChainId.BSC_TESTNET] = exports.ChainKey.BSC_TESTNET, _CHAIN_KEY);

var _INIT_CODE_HASH;
var INIT_CODE_HASH = (_INIT_CODE_HASH = {}, _INIT_CODE_HASH[exports.ChainId.ETHEREUM] = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303', _INIT_CODE_HASH[exports.ChainId.BITGERT] = '0xd12a2c7423c2978ecc6469106ef79ce752a73ffee356ddc84f092521a99bfb94', _INIT_CODE_HASH[exports.ChainId.MATIC] = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303', _INIT_CODE_HASH[exports.ChainId.MATIC_TESTNET] = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303', _INIT_CODE_HASH[exports.ChainId.BSC] = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303', _INIT_CODE_HASH[exports.ChainId.BSC_TESTNET] = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303', _INIT_CODE_HASH);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */

var AbstractCurrency =
/**
 * Constructs an instance of the base class `BaseCurrency`.
 * @param chainId the chain ID on which this currency resides
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
 */
function AbstractCurrency(chainId, decimals, symbol, name) {
  !Number.isSafeInteger(chainId) ?  invariant(false, 'CHAIN_ID')  : void 0;
  !(decimals >= 0 && decimals < 255 && Number.isInteger(decimals)) ?  invariant(false, 'DECIMALS')  : void 0;
  this.chainId = chainId;
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */

var NativeCurrency = /*#__PURE__*/function (_AbstractCurrency) {
  _inheritsLoose(NativeCurrency, _AbstractCurrency);

  function NativeCurrency() {
    var _this;

    _this = _AbstractCurrency.apply(this, arguments) || this;
    _this.isNative = true;
    _this.isToken = false;
    return _this;
  }

  return NativeCurrency;
}(AbstractCurrency);

function validateAndParseAddress(address$1) {
  try {
    var checksummedAddress = address.getAddress(address$1);
    "development" !== "production" ? warning(address$1 === checksummedAddress, address$1 + " is not checksummed.") : void 0;
    return checksummedAddress;
  } catch (error) {
      invariant(false, address$1 + " is not a valid address.")  ;
  }
}

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_AbstractCurrency) {
  _inheritsLoose(Token, _AbstractCurrency);

  function Token(chainId, address, decimals, symbol, name) {
    var _this;

    _this = _AbstractCurrency.call(this, chainId, decimals, symbol, name) || this;
    _this.isNative = false;
    _this.isToken = true;
    _this.chainId = chainId;
    _this.address = validateAndParseAddress(address);
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    return other.isToken && this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ?  invariant(false, 'CHAIN_IDS')  : void 0;
    !(this.address !== other.address) ?  invariant(false, 'ADDRESSES')  : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
  /**
   * Return this token, which does not need to be wrapped
   */
  ;

  _createClass(Token, [{
    key: "wrapped",
    get: function get() {
      return this;
    }
  }]);

  return Token;
}(AbstractCurrency);
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}

var _USDC, _extends2, _WNATIVE, _RICE;
var USDC = (_USDC = {}, _USDC[exports.ChainId.ETHEREUM] = /*#__PURE__*/new Token(exports.ChainId.ETHEREUM, USDC_ADDRESS[exports.ChainId.ETHEREUM], 6, 'USDC', 'USD Coin'), _USDC[exports.ChainId.BITGERT] = /*#__PURE__*/new Token(exports.ChainId.BITGERT, USDC_ADDRESS[exports.ChainId.BITGERT], 6, 'USDC', 'USD Coin'), _USDC[exports.ChainId.MATIC] = /*#__PURE__*/new Token(exports.ChainId.MATIC, USDC_ADDRESS[exports.ChainId.MATIC], 6, 'USDC', 'USD Coin'), _USDC[exports.ChainId.MATIC_TESTNET] = /*#__PURE__*/new Token(exports.ChainId.MATIC_TESTNET, USDC_ADDRESS[exports.ChainId.MATIC_TESTNET], 6, 'USDC', 'USD Coin'), _USDC[exports.ChainId.BSC] = /*#__PURE__*/new Token(exports.ChainId.BSC, USDC_ADDRESS[exports.ChainId.BSC], 18, 'USDC', 'USD Coin'), _USDC);
var USD = /*#__PURE__*/_extends({}, USDC, (_extends2 = {}, _extends2[exports.ChainId.BITGERT] = /*#__PURE__*/new Token(exports.ChainId.BITGERT, USDC_ADDRESS[exports.ChainId.BITGERT], 6, 'USDC', 'USD Coin'), _extends2));
var WNATIVE = (_WNATIVE = {}, _WNATIVE[exports.ChainId.ETHEREUM] = /*#__PURE__*/new Token(exports.ChainId.ETHEREUM, WNATIVE_ADDRESS[exports.ChainId.ETHEREUM], 18, 'WETH', 'Wrapped Ethereum'), _WNATIVE[exports.ChainId.BITGERT] = /*#__PURE__*/new Token(exports.ChainId.BITGERT, WNATIVE_ADDRESS[exports.ChainId.BITGERT], 18, 'WBRISE', 'Wrapped Brise'), _WNATIVE[exports.ChainId.MATIC] = /*#__PURE__*/new Token(exports.ChainId.MATIC, WNATIVE_ADDRESS[exports.ChainId.MATIC], 18, 'WMATIC', 'Wrapped Matic'), _WNATIVE[exports.ChainId.MATIC_TESTNET] = /*#__PURE__*/new Token(exports.ChainId.MATIC_TESTNET, WNATIVE_ADDRESS[exports.ChainId.MATIC_TESTNET], 18, 'WMATIC', 'Wrapped Matic'), _WNATIVE[exports.ChainId.BSC] = /*#__PURE__*/new Token(exports.ChainId.BSC, WNATIVE_ADDRESS[exports.ChainId.BSC], 18, 'WBNB', 'Wrapped BNB'), _WNATIVE[exports.ChainId.BSC_TESTNET] = /*#__PURE__*/new Token(exports.ChainId.BSC_TESTNET, WNATIVE_ADDRESS[exports.ChainId.BSC_TESTNET], 18, 'WBNB', 'Wrapped BNB'), _WNATIVE);
var RICE = (_RICE = {}, _RICE[exports.ChainId.ETHEREUM] = /*#__PURE__*/new Token(exports.ChainId.ETHEREUM, SUSHI_ADDRESS[exports.ChainId.ETHEREUM], 18, 'SUSHI', 'SushiToken'), _RICE[exports.ChainId.BITGERT] = /*#__PURE__*/new Token(exports.ChainId.BITGERT, RICE_ADDRESS[exports.ChainId.BITGERT], 18, 'RICE', 'RiceToken'), _RICE[exports.ChainId.MATIC] = /*#__PURE__*/new Token(exports.ChainId.MATIC, SUSHI_ADDRESS[exports.ChainId.MATIC], 18, 'SUSHI', 'SushiToken'), _RICE[exports.ChainId.BSC] = /*#__PURE__*/new Token(exports.ChainId.BSC, SUSHI_ADDRESS[exports.ChainId.BSC], 18, 'SUSHI', 'SushiToken'), _RICE);

var Bitgert = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Bitgert, _NativeCurrency);

  function Bitgert(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'BRISE', 'Brise Coin') || this;
  }

  Bitgert.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Bitgert(chainId);
  };

  var _proto = Bitgert.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Bitgert, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ?  invariant(false, 'WRAPPED')  : void 0;
      return wnative;
    }
  }]);

  return Bitgert;
}(NativeCurrency);
Bitgert._cache = {};

var Binance = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Binance, _NativeCurrency);

  function Binance(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'BNB', 'Binance Coin') || this;
  }

  Binance.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Binance(chainId);
  };

  var _proto = Binance.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Binance, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ?  invariant(false, 'WRAPPED')  : void 0;
      return wnative;
    }
  }]);

  return Binance;
}(NativeCurrency);
Binance._cache = {};

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */

var Ether = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Ether, _NativeCurrency);

  function Ether(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ETH', 'Ether') || this;
  }

  Ether.onChain = function onChain(chainId) {
    var _this$_etherCache$cha;

    return (_this$_etherCache$cha = this._etherCache[chainId]) != null ? _this$_etherCache$cha : this._etherCache[chainId] = new Ether(chainId);
  };

  var _proto = Ether.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Ether, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ?  invariant(false, 'WRAPPED')  : void 0;
      return wnative;
    }
  }]);

  return Ether;
}(NativeCurrency);
Ether._etherCache = {};

var Matic = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Matic, _NativeCurrency);

  function Matic(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'MATIC', 'Matic') || this;
  }

  Matic.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Matic(chainId);
  };

  var _proto = Matic.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Matic, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ?  invariant(false, 'WRAPPED')  : void 0;
      return wnative;
    }
  }]);

  return Matic;
}(NativeCurrency);
Matic._cache = {};

var _NATIVE;
var NATIVE = (_NATIVE = {}, _NATIVE[exports.ChainId.ETHEREUM] = /*#__PURE__*/Ether.onChain(exports.ChainId.ETHEREUM), _NATIVE[exports.ChainId.BITGERT] = /*#__PURE__*/Bitgert.onChain(exports.ChainId.BITGERT), _NATIVE[exports.ChainId.MATIC] = /*#__PURE__*/Matic.onChain(exports.ChainId.MATIC), _NATIVE[exports.ChainId.MATIC_TESTNET] = /*#__PURE__*/Matic.onChain(exports.ChainId.MATIC_TESTNET), _NATIVE[exports.ChainId.BSC] = /*#__PURE__*/Binance.onChain(exports.ChainId.BSC), _NATIVE[exports.ChainId.BSC_TESTNET] = /*#__PURE__*/Binance.onChain(exports.ChainId.BSC_TESTNET), _NATIVE);

var MaxUint256 = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'); // exports for internal consumption

var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
var THREE = /*#__PURE__*/JSBI.BigInt(3);
var FIVE = /*#__PURE__*/JSBI.BigInt(5);
var TEN = /*#__PURE__*/JSBI.BigInt(10);
var _100 = /*#__PURE__*/JSBI.BigInt(100);
var _997 = /*#__PURE__*/JSBI.BigInt(997);
var _1000 = /*#__PURE__*/JSBI.BigInt(1000);
var MINIMUM_LIQUIDITY = /*#__PURE__*/JSBI.BigInt(1000);

var _SOLIDITY_TYPE_MAXIMA;
var SOLIDITY_TYPE_MAXIMA = (_SOLIDITY_TYPE_MAXIMA = {}, _SOLIDITY_TYPE_MAXIMA[exports.SolidityType.uint8] = /*#__PURE__*/JSBI.BigInt('0xff'), _SOLIDITY_TYPE_MAXIMA[exports.SolidityType.uint256] = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'), _SOLIDITY_TYPE_MAXIMA);

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = ('setPrototypeOf' in Object);
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */

var InsufficientReservesError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error);

  function InsufficientReservesError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.isInsufficientReservesError = true;
    _this.name = _this.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype);
    return _this;
  }

  return InsufficientReservesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */

var InsufficientInputAmountError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2);

  function InsufficientInputAmountError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.isInsufficientInputAmountError = true;
    _this2.name = _this2.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this2), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype);
    return _this2;
  }

  return InsufficientInputAmountError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
Big.strict = true;
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[exports.Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[exports.Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[exports.Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[exports.Rounding.ROUND_DOWN] = 0, _toFixedRounding[exports.Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[exports.Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = JSBI.BigInt(1);
    }

    this.numerator = JSBI.BigInt(numerator);
    this.denominator = JSBI.BigInt(denominator);
  }

  Fraction.tryParseFraction = function tryParseFraction(fractionish) {
    if (fractionish instanceof JSBI || typeof fractionish === 'number' || typeof fractionish === 'string') return new Fraction(fractionish);
    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish;
    throw new Error('Could not parse fraction');
  } // performs floor division
  ;

  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ?  invariant(false, significantDigits + " is not an integer.")  : void 0;
    !(significantDigits > 0) ?  invariant(false, significantDigits + " is not positive.")  : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ?  invariant(false, decimalPlaces + " is not an integer.")  : void 0;
    !(decimalPlaces >= 0) ?  invariant(false, decimalPlaces + " is negative.")  : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  /**
   * Helper method for converting any super class back to a fraction
   */
  ;

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }, {
    key: "asFraction",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
Big$1.strict = true;
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  function CurrencyAmount(currency, numerator, denominator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    !JSBI.lessThanOrEqual(_this.quotient, MaxUint256) ?  invariant(false, 'AMOUNT')  : void 0;
    _this.currency = currency;
    _this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currency.decimals));
    return _this;
  }
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */


  CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  ;

  CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !this.currency.equals(other.currency) ?  invariant(false, 'CURRENCY')  : void 0;

    var added = _Fraction.prototype.add.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  };

  _proto.subtract = function subtract(other) {
    !this.currency.equals(other.currency) ?  invariant(false, 'CURRENCY')  : void 0;

    var subtracted = _Fraction.prototype.subtract.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  };

  _proto.multiply = function multiply(other) {
    var multiplied = _Fraction.prototype.multiply.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  };

  _proto.divide = function divide(other) {
    var divided = _Fraction.prototype.divide.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.divide.call(this, this.decimalScale).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ?  invariant(false, 'DECIMALS')  : void 0;
    return _Fraction.prototype.divide.call(this, this.decimalScale).toFixed(decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  };

  /**
   * Returns a string representation of the address and currency amount.
   * Useful in cases where a dependency is needed to detect changes (e.g. useEffect).
   * @return string [0x6B3595068778DD592e39A122f4f5a5cF09C90fE2 - 1323.94]
   */
  _proto.serialize = function serialize() {
    return "[" + this.currency.wrapped.address + " - " + this.toExact() + "]";
  };

  _createClass(CurrencyAmount, [{
    key: "wrapped",
    get: function get() {
      if (this.currency.isToken) return this;
      return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  function Price() {
    var _this;

    var baseCurrency, quoteCurrency, denominator, numerator;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 4) {
      baseCurrency = args[0];
      quoteCurrency = args[1];
      denominator = args[2];
      numerator = args[3];
    } else {
      var result = args[0].quoteAmount.divide(args[0].baseAmount);
      var _ref = [args[0].baseAmount.currency, args[0].quoteAmount.currency, result.denominator, result.numerator];
      baseCurrency = _ref[0];
      quoteCurrency = _ref[1];
      denominator = _ref[2];
      numerator = _ref[3];
    }

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }
  /**
   * Flip the price, switching the base and quote currency
   */


  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */
  ;

  _proto.multiply = function multiply(other) {
    !this.quoteCurrency.equals(other.baseCurrency) ?  invariant(false, 'TOKEN')  : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyAmount.currency.equals(this.baseCurrency) ?  invariant(false, 'TOKEN')  : void 0;

    var result = _Fraction.prototype.multiply.call(this, currencyAmount);

    return CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */
  ;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "adjustedForDecimals",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

var computePairAddress = function computePairAddress(_ref) {
  var factoryAddress = _ref.factoryAddress,
      tokenA = _ref.tokenA,
      tokenB = _ref.tokenB;

  var _ref2 = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA],
      token0 = _ref2[0],
      token1 = _ref2[1]; // does safety checks


  return address.getCreate2Address(factoryAddress, solidity.keccak256(['bytes'], [solidity.pack(['address', 'address'], [token0.address, token1.address])]), INIT_CODE_HASH[token0.chainId]);
};

var MAX_SAFE_INTEGER = /*#__PURE__*/JSBI.BigInt(Number.MAX_SAFE_INTEGER);
/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */

function sqrt(value) {
  !JSBI.greaterThanOrEqual(value, ZERO) ?  invariant(false, 'NEGATIVE')  : void 0; // rely on built in sqrt if possible

  if (JSBI.lessThan(value, MAX_SAFE_INTEGER)) {
    return JSBI.BigInt(Math.floor(Math.sqrt(JSBI.toNumber(value))));
  }

  var z;
  var x;
  z = value;
  x = JSBI.add(JSBI.divide(value, TWO), ONE);

  while (JSBI.lessThan(x, z)) {
    z = x;
    x = JSBI.divide(JSBI.add(JSBI.divide(value, x), x), TWO);
  }

  return z;
}
/**
 * Returns the smallest member of the array
 * @param values the values from which the smallest gets returned
 * @returns the smallest memmber of the array
 */

function minimum() {
  var lowest = arguments.length <= 0 ? undefined : arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var value = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (JSBI.LT(value, lowest)) {
      lowest = value;
    }
  }

  return lowest;
}
/**
 * Returns the biggest member of the array
 * @param values the values from which the biggest gets returned
 * @returns the biggest memmber of the array
 */

function maximum() {
  var highest = arguments.length <= 0 ? undefined : arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var value = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (JSBI.GT(value, highest)) {
      highest = value;
    }
  }

  return highest;
}
function difference(a, b) {
  if (JSBI.greaterThan(a, b)) {
    return JSBI.subtract(a, b);
  }

  return JSBI.subtract(b, a);
}

var Pair = /*#__PURE__*/function () {
  function Pair(currencyAmountA, currencyAmountB) {
    var currencyAmounts = currencyAmountA.currency.sortsBefore(currencyAmountB.currency) // does safety checks
    ? [currencyAmountA, currencyAmountB] : [currencyAmountB, currencyAmountA];
    this.liquidityToken = new Token(currencyAmounts[0].currency.chainId, Pair.getAddress(currencyAmounts[0].currency, currencyAmounts[1].currency), 18, 'RICE-V2', 'Riceswap V2');
    this.tokenAmounts = currencyAmounts;
  }

  Pair.getAddress = function getAddress(tokenA, tokenB) {
    return computePairAddress({
      factoryAddress: FACTORY_ADDRESS[tokenA.chainId],
      tokenA: tokenA,
      tokenB: tokenB
    });
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  ;

  var _proto = Pair.prototype;

  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  ;

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ?  invariant(false, 'TOKEN')  : void 0;
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  ;

  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ?  invariant(false, 'TOKEN')  : void 0;
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  };

  _proto.getOutputAmount = function getOutputAmount(inputAmount) {
    !this.involvesToken(inputAmount.currency) ?  invariant(false, 'TOKEN')  : void 0;

    if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO)) {
      throw new InsufficientReservesError();
    }

    var inputReserve = this.reserveOf(inputAmount.currency);
    var outputReserve = this.reserveOf(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    var inputAmountWithFee = JSBI.multiply(inputAmount.quotient, _997);
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.quotient);
    var denominator = JSBI.add(JSBI.multiply(inputReserve.quotient, _1000), inputAmountWithFee);
    var outputAmount = CurrencyAmount.fromRawAmount(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));

    if (JSBI.equal(outputAmount.quotient, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getInputAmount = function getInputAmount(outputAmount) {
    !this.involvesToken(outputAmount.currency) ?  invariant(false, 'TOKEN')  : void 0;

    if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO) || JSBI.greaterThanOrEqual(outputAmount.quotient, this.reserveOf(outputAmount.currency).quotient)) {
      throw new InsufficientReservesError();
    }

    var outputReserve = this.reserveOf(outputAmount.currency);
    var inputReserve = this.reserveOf(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    var numerator = JSBI.multiply(JSBI.multiply(inputReserve.quotient, outputAmount.quotient), _1000);
    var denominator = JSBI.multiply(JSBI.subtract(outputReserve.quotient, outputAmount.quotient), _997);
    var inputAmount = CurrencyAmount.fromRawAmount(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE));
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    !totalSupply.currency.equals(this.liquidityToken) ?  invariant(false, 'LIQUIDITY')  : void 0;
    var tokenAmounts = tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    !(tokenAmounts[0].currency.equals(this.token0) && tokenAmounts[1].currency.equals(this.token1)) ?  invariant(false, 'TOKEN')  : void 0;
    var liquidity;

    if (JSBI.equal(totalSupply.quotient, ZERO)) {
      liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].quotient, tokenAmounts[1].quotient)), MINIMUM_LIQUIDITY);
    } else {
      var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].quotient, totalSupply.quotient), this.reserve0.quotient);
      var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].quotient, totalSupply.quotient), this.reserve1.quotient);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
      console.log({
        amount0: amount0.toString(),
        amount1: amount1.toString(),
        liquidity: liquidity.toString(),
        totalSupply: totalSupply.quotient.toString(),
        kLast: sqrt(JSBI.multiply(this.tokenAmounts[0].quotient, this.tokenAmounts[1].quotient))
      });
    }

    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return CurrencyAmount.fromRawAmount(this.liquidityToken, liquidity);
  };

  _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity, feeOn, kLast) {
    if (feeOn === void 0) {
      feeOn = false;
    }

    !this.involvesToken(token) ?  invariant(false, 'TOKEN')  : void 0;
    !totalSupply.currency.equals(this.liquidityToken) ?  invariant(false, 'TOTAL_SUPPLY')  : void 0;
    !liquidity.currency.equals(this.liquidityToken) ?  invariant(false, 'LIQUIDITY')  : void 0;
    !JSBI.lessThanOrEqual(liquidity.quotient, totalSupply.quotient) ?  invariant(false, 'LIQUIDITY')  : void 0;
    var totalSupplyAdjusted;

    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      !!!kLast ?  invariant(false, 'K_LAST')  : void 0;
      var kLastParsed = JSBI.BigInt(kLast);

      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(JSBI.multiply(this.reserve0.quotient, this.reserve1.quotient));
        var rootKLast = sqrt(kLastParsed);

        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(totalSupply.quotient, JSBI.subtract(rootK, rootKLast));
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          var feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(CurrencyAmount.fromRawAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }

    return CurrencyAmount.fromRawAmount(token, JSBI.divide(JSBI.multiply(liquidity.quotient, this.reserveOf(token).quotient), totalSupplyAdjusted.quotient));
  };

  _createClass(Pair, [{
    key: "token0Price",
    get: function get() {
      var result = this.tokenAmounts[1].divide(this.tokenAmounts[0]);
      return new Price(this.token0, this.token1, result.denominator, result.numerator);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */

  }, {
    key: "token1Price",
    get: function get() {
      var result = this.tokenAmounts[0].divide(this.tokenAmounts[1]);
      return new Price(this.token1, this.token0, result.denominator, result.numerator);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.token0.chainId;
    }
  }, {
    key: "token0",
    get: function get() {
      return this.tokenAmounts[0].currency;
    }
  }, {
    key: "token1",
    get: function get() {
      return this.tokenAmounts[1].currency;
    }
  }, {
    key: "reserve0",
    get: function get() {
      return this.tokenAmounts[0];
    }
  }, {
    key: "reserve1",
    get: function get() {
      return this.tokenAmounts[1];
    }
  }]);

  return Pair;
}();

var ONE_HUNDRED = /*#__PURE__*/new Fraction( /*#__PURE__*/JSBI.BigInt(100));
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */

function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    var _this;

    _this = _Fraction.apply(this, arguments) || this;
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */

    _this.isPercent = true;
    return _this;
  }

  var _proto = Percent.prototype;

  _proto.add = function add(other) {
    return toPercent(_Fraction.prototype.add.call(this, other));
  };

  _proto.subtract = function subtract(other) {
    return toPercent(_Fraction.prototype.subtract.call(this, other));
  };

  _proto.multiply = function multiply(other) {
    return toPercent(_Fraction.prototype.multiply.call(this, other));
  };

  _proto.divide = function divide(other) {
    return toPercent(_Fraction.prototype.divide.call(this, other));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

var Route = /*#__PURE__*/function () {
  function Route(pairs, input, output) {
    this._midPrice = null;
    !(pairs.length > 0) ?  invariant(false, 'PAIRS')  : void 0;
    var chainId = pairs[0].chainId;
    !pairs.every(function (pair) {
      return pair.chainId === chainId;
    }) ?  invariant(false, 'CHAIN_IDS')  : void 0;
    var wrappedInput = input.wrapped;
    !pairs[0].involvesToken(wrappedInput) ?  invariant(false, 'INPUT')  : void 0;
    !(typeof output === 'undefined' || pairs[pairs.length - 1].involvesToken(output.wrapped)) ?  invariant(false, 'OUTPUT')  : void 0;
    var path = [wrappedInput];

    for (var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      var currentInput = path[i];
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1)) ?  invariant(false, 'PATH')  : void 0;

      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;

      path.push(_output);
    }

    this.pairs = pairs;
    this.path = path;
    this.input = input;
    this.output = output;
  }

  _createClass(Route, [{
    key: "midPrice",
    get: function get() {
      if (this._midPrice !== null) return this._midPrice;
      var prices = [];

      for (var _iterator2 = _createForOfIteratorHelperLoose(this.pairs.entries()), _step2; !(_step2 = _iterator2()).done;) {
        var _step2$value = _step2.value,
            i = _step2$value[0],
            pair = _step2$value[1];
        prices.push(this.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.quotient, pair.reserve1.quotient) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.quotient, pair.reserve0.quotient));
      }

      var reduced = prices.slice(1).reduce(function (accumulator, currentValue) {
        return accumulator.multiply(currentValue);
      }, prices[0]);
      return this._midPrice = new Price(this.input, this.output, reduced.denominator, reduced.numerator);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.pairs[0].chainId;
    }
  }]);

  return Route;
}();

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var quotedOutputAmount = midPrice.quote(inputAmount); // calculate price impact := (exactQuote - outputAmount) / exactQuote

  var priceImpact = quotedOutputAmount.subtract(outputAmount).divide(quotedOutputAmount);
  return new Percent(priceImpact.numerator, priceImpact.denominator);
}

// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ?  invariant(false, 'MAX_SIZE_ZERO')  : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ?  invariant(false, 'ITEMS_SIZE')  : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first

function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !a.inputAmount.currency.equals(b.inputAmount.currency) ?  invariant(false, 'INPUT_CURRENCY')  : void 0;
  !a.outputAmount.currency.equals(b.outputAmount.currency) ?  invariant(false, 'OUTPUT_CURRENCY')  : void 0;

  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    } // trade A requires less input than trade B, so A should come first


    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
} // extension of the input output comparator that also considers other dimensions of the trade in ranking them

function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b);

  if (ioComp !== 0) {
    return ioComp;
  } // consider lowest slippage next, since these are less likely to fail


  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  } // finally consider the number of hops since each hop costs gas


  return a.route.path.length - b.route.path.length;
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */

var Trade = /*#__PURE__*/function () {
  function Trade(route, amount, tradeType) {
    this.route = route;
    this.tradeType = tradeType;
    var tokenAmounts = new Array(route.path.length);

    if (tradeType === exports.TradeType.EXACT_INPUT) {
      !amount.currency.equals(route.input) ?  invariant(false, 'INPUT')  : void 0;
      tokenAmounts[0] = amount.wrapped;

      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i];

        var _pair$getOutputAmount = pair.getOutputAmount(tokenAmounts[i]),
            outputAmount = _pair$getOutputAmount[0];

        tokenAmounts[i + 1] = outputAmount;
      }

      this.inputAmount = CurrencyAmount.fromFractionalAmount(route.input, amount.numerator, amount.denominator);
      this.outputAmount = CurrencyAmount.fromFractionalAmount(route.output, tokenAmounts[tokenAmounts.length - 1].numerator, tokenAmounts[tokenAmounts.length - 1].denominator);
    } else {
      !amount.currency.equals(route.output) ?  invariant(false, 'OUTPUT')  : void 0;
      tokenAmounts[tokenAmounts.length - 1] = amount.wrapped;

      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1];

        var _pair$getInputAmount = _pair.getInputAmount(tokenAmounts[_i]),
            inputAmount = _pair$getInputAmount[0];

        tokenAmounts[_i - 1] = inputAmount;
      }

      this.inputAmount = CurrencyAmount.fromFractionalAmount(route.input, tokenAmounts[0].numerator, tokenAmounts[0].denominator);
      this.outputAmount = CurrencyAmount.fromFractionalAmount(route.output, amount.numerator, amount.denominator);
    }

    this.executionPrice = new Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.quotient, this.outputAmount.quotient);
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
  }
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */


  Trade.exactIn = function exactIn(route, amountIn) {
    return new Trade(route, amountIn, exports.TradeType.EXACT_INPUT);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  ;

  Trade.exactOut = function exactOut(route, amountOut) {
    return new Trade(route, amountOut, exports.TradeType.EXACT_OUTPUT);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  var _proto = Trade.prototype;

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ?  invariant(false, 'SLIPPAGE_TOLERANCE')  : void 0;

    if (this.tradeType === exports.TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.quotient).quotient;
      return CurrencyAmount.fromRawAmount(this.outputAmount.currency, slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ?  invariant(false, 'SLIPPAGE_TOLERANCE')  : void 0;

    if (this.tradeType === exports.TradeType.EXACT_INPUT) {
      return this.inputAmount;
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.quotient).quotient;
      return CurrencyAmount.fromRawAmount(this.inputAmount.currency, slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param nextAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactIn = function bestTradeExactIn(pairs, currencyAmountIn, currencyOut, _temp, // used in recursion.
  currentPairs, nextAmountIn, bestTrades) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$maxNumResults = _ref.maxNumResults,
        maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
        _ref$maxHops = _ref.maxHops,
        maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (nextAmountIn === void 0) {
      nextAmountIn = currencyAmountIn;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ?  invariant(false, 'PAIRS')  : void 0;
    !(maxHops > 0) ?  invariant(false, 'MAX_HOPS')  : void 0;
    !(currencyAmountIn === nextAmountIn || currentPairs.length > 0) ?  invariant(false, 'INVALID_RECURSION')  : void 0;
    var amountIn = nextAmountIn.wrapped;
    var tokenOut = currencyOut.wrapped;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountIn.currency) && !pair.token1.equals(amountIn.currency)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountOut = void 0;

      try {
        ;

        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn);

        amountOut = _pair$getOutputAmount2[0];
      } catch (error) {
        // input too low
        if (error.isInsufficientInputAmountError) {
          continue;
        }

        throw error;
      } // we have arrived at the output token, so this is the final trade of one of the paths


      if (amountOut.currency.equals(tokenOut)) {
        sortedInsert(bestTrades, new Trade(new Route([].concat(currentPairs, [pair]), currencyAmountIn.currency, currencyOut), currencyAmountIn, exports.TradeType.EXACT_INPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops

        Trade.bestTradeExactIn(pairsExcludingThisPair, currencyAmountIn, currencyOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [].concat(currentPairs, [pair]), amountOut, bestTrades);
      }
    }

    return bestTrades;
  }
  /**
   * Return the execution price after accounting for slippage tolerance
   * @param slippageTolerance the allowed tolerated slippage
   */
  ;

  _proto.worstExecutionPrice = function worstExecutionPrice(slippageTolerance) {
    return new Price(this.inputAmount.currency, this.outputAmount.currency, this.maximumAmountIn(slippageTolerance).quotient, this.minimumAmountOut(slippageTolerance).quotient);
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param nextAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactOut = function bestTradeExactOut(pairs, currencyIn, currencyAmountOut, _temp2, // used in recursion.
  currentPairs, nextAmountOut, bestTrades) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$maxNumResults = _ref2.maxNumResults,
        maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
        _ref2$maxHops = _ref2.maxHops,
        maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (nextAmountOut === void 0) {
      nextAmountOut = currencyAmountOut;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ?  invariant(false, 'PAIRS')  : void 0;
    !(maxHops > 0) ?  invariant(false, 'MAX_HOPS')  : void 0;
    !(currencyAmountOut === nextAmountOut || currentPairs.length > 0) ?  invariant(false, 'INVALID_RECURSION')  : void 0;
    var amountOut = nextAmountOut.wrapped;
    var tokenIn = currencyIn.wrapped;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountOut.currency) && !pair.token1.equals(amountOut.currency)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountIn = void 0;

      try {
        ;

        var _pair$getInputAmount2 = pair.getInputAmount(amountOut);

        amountIn = _pair$getInputAmount2[0];
      } catch (error) {
        // not enough liquidity in this pair
        if (error.isInsufficientReservesError) {
          continue;
        }

        throw error;
      } // we have arrived at the input token, so this is the first trade of one of the paths


      if (amountIn.currency.equals(tokenIn)) {
        sortedInsert(bestTrades, new Trade(new Route([pair].concat(currentPairs), currencyIn, currencyAmountOut.currency), currencyAmountOut, exports.TradeType.EXACT_OUTPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops

        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, currencyAmountOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [pair].concat(currentPairs), amountIn, bestTrades);
      }
    }

    return bestTrades;
  };

  return Trade;
}();

// account is not optional
function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
} // account is optional

function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

function rebase(value, from, to) {
  return from ? JSBI.divide(JSBI.multiply(value, to), from) : ZERO;
}
function toElastic(total, base, roundUp) {
  var elastic;

  if (JSBI.equal(total.base, ZERO)) {
    elastic = base;
  } else {
    elastic = JSBI.divide(JSBI.multiply(base, total.elastic), total.base);

    if (roundUp && JSBI.lessThan(JSBI.divide(JSBI.multiply(elastic, total.base), total.elastic), base)) {
      elastic = JSBI.add(elastic, ONE);
    }
  }

  return elastic;
}

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO) ?  invariant(false, value + " is not a " + solidityType + ".")  : void 0;
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]) ?  invariant(false, value + " is not a " + solidityType + ".")  : void 0;
}

function toHex(currencyAmount) {
  return "0x" + currencyAmount.quotient.toString(16);
}
var ZERO_HEX = '0x0';
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */

var Router = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */


  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency.isNative;
    var etherOut = trade.outputAmount.currency.isNative; // the router does not support both ether in and out

    !!(etherIn && etherOut) ?  invariant(false, 'ETHER_IN_OUT')  : void 0;
    !(!('ttl' in options) || options.ttl > 0) ?  invariant(false, 'TTL')  : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = 'ttl' in options ? "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16) : "0x" + options.deadline.toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;

    switch (trade.tradeType) {
      case exports.TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactETHForTokensSupportingFeeOnTransferTokens' : 'swapExactETHForTokens'; // (uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForETH'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }

        break;

      case exports.TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ?  invariant(false, 'EXACT_OUT_FOT')  : void 0;

        if (etherIn) {
          methodName = 'swapETHForExactTokens'; // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactETH'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = 'swapTokensForExactTokens'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }

        break;
    }

    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };

  return Router;
}();

exports.JSBI = JSBI;
exports.AbstractCurrency = AbstractCurrency;
exports.BALANCE_FETCHER_ADDRESS = BALANCE_FETCHER_ADDRESS;
exports.BAR_ADDRESS = BAR_ADDRESS;
exports.BENTOBOX_ADDRESS = BENTOBOX_ADDRESS;
exports.BORING_HELPER_ADDRESS = BORING_HELPER_ADDRESS;
exports.Binance = Binance;
exports.Bitgert = Bitgert;
exports.CHAINLINK_ORACLE_ADDRESS = CHAINLINK_ORACLE_ADDRESS;
exports.CHAIN_KEY = CHAIN_KEY;
exports.CurrencyAmount = CurrencyAmount;
exports.DAI_ADDRESS = DAI_ADDRESS;
exports.ENS_REGISTRAR_ADDRESS = ENS_REGISTRAR_ADDRESS;
exports.Ether = Ether;
exports.FACTORY_ADDRESS = FACTORY_ADDRESS;
exports.FIVE = FIVE;
exports.FRAX_ADDRESS = FRAX_ADDRESS;
exports.Fraction = Fraction;
exports.INIT_CODE_HASH = INIT_CODE_HASH;
exports.InsufficientInputAmountError = InsufficientInputAmountError;
exports.InsufficientReservesError = InsufficientReservesError;
exports.KASHI_ADDRESS = KASHI_ADDRESS;
exports.MAKER_ADDRESS = MAKER_ADDRESS;
exports.MASTERCHEF_ADDRESS = MASTERCHEF_ADDRESS;
exports.MASTERCHEF_V2_ADDRESS = MASTERCHEF_V2_ADDRESS;
exports.MAX_SAFE_INTEGER = MAX_SAFE_INTEGER;
exports.MERKLE_DISTRIBUTOR_ADDRESS = MERKLE_DISTRIBUTOR_ADDRESS;
exports.MIM_ADDRESS = MIM_ADDRESS;
exports.MINICHEF_ADDRESS = MINICHEF_ADDRESS;
exports.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY;
exports.MULTICALL2_ADDRESS = MULTICALL2_ADDRESS;
exports.MULTISIG_ADDRESS = MULTISIG_ADDRESS;
exports.Matic = Matic;
exports.MaxUint256 = MaxUint256;
exports.NATIVE = NATIVE;
exports.NativeCurrency = NativeCurrency;
exports.ONE = ONE;
exports.PEGGED_ORACLE_ADDRESS = PEGGED_ORACLE_ADDRESS;
exports.Pair = Pair;
exports.Percent = Percent;
exports.Price = Price;
exports.RICE = RICE;
exports.RICE_ADDRESS = RICE_ADDRESS;
exports.ROUTER_ADDRESS = ROUTER_ADDRESS;
exports.Route = Route;
exports.Router = Router;
exports.SOLIDITY_TYPE_MAXIMA = SOLIDITY_TYPE_MAXIMA;
exports.SUSHISWAP_MULTISWAPPER_ADDRESS = SUSHISWAP_MULTISWAPPER_ADDRESS;
exports.SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS = SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS;
exports.SUSHISWAP_SWAPPER_ADDRESS = SUSHISWAP_SWAPPER_ADDRESS;
exports.SUSHISWAP_TWAP_0_ORACLE_ADDRESS = SUSHISWAP_TWAP_0_ORACLE_ADDRESS;
exports.SUSHISWAP_TWAP_1_ORACLE_ADDRESS = SUSHISWAP_TWAP_1_ORACLE_ADDRESS;
exports.SUSHI_ADDRESS = SUSHI_ADDRESS;
exports.TEN = TEN;
exports.THREE = THREE;
exports.TIMELOCK_ADDRESS = TIMELOCK_ADDRESS;
exports.TWO = TWO;
exports.Token = Token;
exports.Trade = Trade;
exports.USD = USD;
exports.USDC = USDC;
exports.USDC_ADDRESS = USDC_ADDRESS;
exports.USDT_ADDRESS = USDT_ADDRESS;
exports.USD_ADDRESS = USD_ADDRESS;
exports.WETH9_ADDRESS = WETH9_ADDRESS;
exports.WNATIVE = WNATIVE;
exports.WNATIVE_ADDRESS = WNATIVE_ADDRESS;
exports.XRICE_ADDRESS = XRICE_ADDRESS;
exports.ZAPPER_ADDRESS = ZAPPER_ADDRESS;
exports.ZERO = ZERO;
exports._100 = _100;
exports._1000 = _1000;
exports._997 = _997;
exports.computePairAddress = computePairAddress;
exports.computePriceImpact = computePriceImpact;
exports.currencyEquals = currencyEquals;
exports.difference = difference;
exports.getProviderOrSigner = getProviderOrSigner;
exports.getSigner = getSigner;
exports.inputOutputComparator = inputOutputComparator;
exports.maximum = maximum;
exports.minimum = minimum;
exports.rebase = rebase;
exports.sortedInsert = sortedInsert;
exports.sqrt = sqrt;
exports.toElastic = toElastic;
exports.toHex = toHex;
exports.tradeComparator = tradeComparator;
exports.validateAndParseAddress = validateAndParseAddress;
exports.validateSolidityTypeInstance = validateSolidityTypeInstance;
//# sourceMappingURL=core-sdk.cjs.development.js.map
