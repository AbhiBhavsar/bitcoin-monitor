const initialState = {
    apiResult: [],
    change: 0,
    lastRate: 0,
    isPositive: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_DATA_IN_STORE':
            console.log(`[In Reducer]: PUT DATA action called`);
            return {
                ...state,
                apiResult: state.apiResult.concat(action.payload),
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
