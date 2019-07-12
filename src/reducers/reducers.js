
const initialState = {
    apiResult: [],
    change: '',
    lastRate: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            // 1. To Invoke function for API CALL
        break;

        case 'CALCULATE_CHANGE':
            // 2. To calculate change whether +ve or -ve
        break;

    default:
    // console.log(state);
    return state;
    }

    return state;
};

export default rootReducer;
