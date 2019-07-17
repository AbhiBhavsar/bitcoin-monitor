const initialState = {
    apiResult: [],
    usdRate: '',
    gbpRate: '',
    eurRate: '',
    change: 0,
    lastUpdated: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_DATA_IN_STORE': // 1. CHECK THE INCOMING ACTION WITH THE ACTION NAME AND MAKE STATE CHANGES
            return {
                // 1.ADDING NEW RESULT TO OUR STATE ARRAY IMMUTABLY(concat).
                ...state,
                apiResult: state.apiResult.splice(0, 0, action.payload),
                usdRate: state.apiResult[0].data.bpi.USD.rate_float,
                gbpRate: state.apiResult[0].data.bpi.GBP.rate_float,
                eurRate: state.apiResult[0].data.bpi.EUR.rate_float,

                // 2. Calculate the relative change %
                change: (((state.apiResult[0].data.bpi.USD.rate_float - state.apiResult[1].data.bpi.USD.rate_float) / state.apiResult[0].data.bpi.USD.rate_float) * 100),

                // 3. Getting Time of last update..
                lastUpdated: state.apiResult[0].data.time.updated
            };
        default:
            return state;
    }
};

export default rootReducer;
