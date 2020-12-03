import { ActionTypes } from './actionTypes.js';

const defalutState = {
    current: {},
}

const auctionReducer = (state = defalutState, action) => {

    switch(action.type) {
        case ActionTypes.BM_AUCTIONS_CURRENT_SET:

            return {
                ...state,
                current: action.current,
            };
        default:
        return state;
    }
}

export default auctionReducer;