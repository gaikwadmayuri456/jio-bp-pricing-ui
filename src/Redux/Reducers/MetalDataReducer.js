const initialState = () => {
    // Process data if any !!
    var state = {
        data: [],
    };
    return state;
};
const MetalDataReducer = (state = initialState(), action) => {
    switch (action.type) {
        case "SET_METALDATA":
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
};
export default MetalDataReducer;

