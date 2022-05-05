import { CONTROLLER_ACTION_TYPE } from "./collection.type";

export const getProducts=(allproducts) => {
    return(
        {
            type : CONTROLLER_ACTION_TYPE.GET_PRODUCTS,
            payload : allproducts
        
        }
    )
}