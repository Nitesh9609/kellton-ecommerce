// import SHOP_DATA from "./shop.data";
import { CONTROLLER_ACTION_TYPE } from "./collection.type"

const INTIAL_STATE = {
    collections: []
}

const collectionReducer = (state =INTIAL_STATE,action) => {
    switch (action.type) {


        case CONTROLLER_ACTION_TYPE.GET_PRODUCTS:
            return{

                ...state,
                collections : action.payload
            }
        default:
            return state
    }
}

export default collectionReducer