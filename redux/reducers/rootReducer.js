import walletReducer from './walletReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    wallet: walletReducer
});

// export default rootReducer;
