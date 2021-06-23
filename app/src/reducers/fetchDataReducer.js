import { FETCH_DATA_ERROR, FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions/fetchDataActions"

const initialState ={
    item: 'data items here',
    loading: false,
    error: 'Failed to Fetch'
}

export const fetchDataReducer = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_DATA_START:
            return{
                ...state,
                loading: true
            }
    case FETCH_DATA_SUCCESS:
        return{
            ...state,
            item: action.payload,
            loading: false
        }
    case FETCH_DATA_ERROR:
        return{
            ...state,
            item: action.payload,
            loading: false
        }
    default:
        return state
    }

}