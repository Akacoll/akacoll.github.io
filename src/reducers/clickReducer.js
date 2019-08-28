import { CLICK_UPDATE_VALUE } from 'actions/actionTypes';

const initialState = {
    newValue: 'Change the input and click the button!'
};
export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};