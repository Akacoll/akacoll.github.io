import { ADD_PRODUCT } from 'actions/actionTypes';

export const addButton = newProduct => ({
    type: ADD_PRODUCT,
    product: newProduct
});