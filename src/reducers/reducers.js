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
                // 1.ADDING NEW RESULT TO OUR STATE ARRAY IMMUTABLY(concat).
                ...state,
                apiResult: state.apiResult.concat(state.apiResult.splice(0, 0, action.payload)), 

                // 2. Calculate the relative change %
                change: (((state.apiResult[0].data.USD.rate_float - state.apiResult[1].data.USD.rate_float) / state.apiResult[0].data.USD.rate_float) * 100).toFixed(4)
            };
        default:
            // console.log(state);
            return state;
    }
    // return state;
};

export default rootReducer;
