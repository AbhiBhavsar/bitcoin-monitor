const initialState = {
    apiResult: [],
    change: 0,
    lastRate: 0,
    isPositive: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_DATA_IN_STORE': // 1. CHECK THE INCOMING ACTION WITH THE ACTION NAME AND MAKE STATE CHANGES
           // console.log(`[In Reducer]: PUT DATA action called`);
            return {
                ...state,
                apiResult: state.apiResult.concat(action.payload) // ADDING NEW RESULT TO OUR STATE ARRAY IMMUTABLY(concat).
            };

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
