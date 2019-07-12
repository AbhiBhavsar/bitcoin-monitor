import { FETCH_DATA, CALCULATE_CHANGE } from './actionTypes';

 export const fetchData = () => {
    return {
        type: FETCH_DATA,
    };
};

export const calculateChange = () => {
    return {
        type: CALCULATE_CHANGE,
        payload: ''
    };
};
