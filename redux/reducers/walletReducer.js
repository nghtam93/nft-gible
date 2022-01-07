import { CONNECT_WALLET, CLOSE_WALLET, OPEN_WALLET, DIS_WALLET } from '../actions/walletActions';

const walletReducer = (state = { value: 0, is_connect: false }, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
        return { ...state, is_connect: true };
    case OPEN_WALLET:
        return { ...state, value: 1 };
    case CLOSE_WALLET:
        return { ...state, value: 0 };
    case DIS_WALLET:
        return { ...state, is_connect: false };
    default:
        return { ...state };
  }
};

export default walletReducer;
