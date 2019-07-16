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
                apiResult: state.apiResult.concat(state.apiResult.splice(0, 0, action.payload)) // ADDING NEW RESULT TO OUR STATE ARRAY IMMUTABLY(concat).
            };

        case 'CALCULATE_CHANGE':
            // 2. To calculate change whether +ve or -ve
            console.log(`[In Reducer]: CALCULATE DATA action called`);
            return {
                ...state,
                change: 99,
                isPositive: false
            };

        default:
            // console.log(state);
            return state;
    }
    // return state;
};

export default rootReducer;
