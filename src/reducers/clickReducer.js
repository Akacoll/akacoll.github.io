import { ADD_PRODUCT } from 'actions/actionTypes';

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return state.concat([action.product])
        default:
            return state;
    }
};