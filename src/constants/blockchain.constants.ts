type stringMappingType = { [key: string]: string }
type numberMappingType = { [key: number]: string }
type stringToNumberMappingType = { [key: string]: number }

export const rpcUrls: stringMappingType = {
  eth: "https://eth.public-rpc.com/",
  bsc: "https://bsc-dataseed.binance.org/",
  polygon: "https://polygon-rpc.com/",
};

export const explorerApiUrls: stringMappingType = {
  eth: "https://api.etherscan.io/api",
  bsc: "https://api.bscscan.com/api",
  polygon: "https://api.polygonscan.com/api",
};

export const blockchainNameFromChainId: numberMappingType = {
  1: "eth",
  56: "bsc",
  137: "polygon",
};

export enum ChainIds {
  ETH = 1,
  BSC = 56,
  POLYGON = 137,
}

export const CHAINS_NAMES: stringToNumberMappingType = {
  eth: 1,
  bsc: 56,
  polygon: 137
}

export const TRANSFER_TOPICS = {
  ERC20: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  ERC721: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  ERC1155SafeTransferFrom:
    '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
  ERC1155SafeBatchTransferFrom:
    '0x2eb2c2d4b4f9b5e8b2d1e9e4cdaa0e5b4e9d6d7b0b4e2b4e2b4e2b4e2b4e2b4e2'
}