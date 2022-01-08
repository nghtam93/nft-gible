//Action Types
export const OPEN_WALLET = "OPEN_WALLET";
export const CLOSE_WALLET = "CLOSE_WALLET";
export const CONNECT_WALLET = "CONNECT_WALLET";
export const DIS_WALLET = "DIS_WALLET";


//Action Creator
export const openWallet = () => ({
   type: OPEN_WALLET
});

export const closeWallet = () => ({
  type: CLOSE_WALLET
});

export const connectWallet = () => ({
  type: CONNECT_WALLET
});

export const disconnectWallet = () => ({
  type: DIS_WALLET
});
