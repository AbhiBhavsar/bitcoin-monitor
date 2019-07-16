import { PUT_DATA_IN_STORE, CALCULATE_CHANGE } from './actionTypes';

// 1. FOR EACH UNIQUE ACTION NAME below are associate ACTION CREATORs 
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
