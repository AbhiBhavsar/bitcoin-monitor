import { PUT_DATA_IN_STORE, CALCULATE_CHANGE } from './actionTypes';

 export const putDataInStore = (payload) => {
    return {
        type: PUT_DATA_IN_STORE,
        payload
    };
};

export const calculateChange = (payload) => {
    return {
        type: CALCULATE_CHANGE,
        payload
    };
};
