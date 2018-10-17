  import {ADD_ORDER, FETCH_ALL_ORDERS,DELETE_ORDER, SEARCH_ORDERS} from '../actions'
 
 





export default function (state = [], action){
     
     switch (action.type){

        case ADD_ORDER :
         
                return [...state, Object.assign({}, action.order)];
            
         
        case FETCH_ALL_ORDERS:
         
                return   action.orders ;

        case DELETE_ORDER:
                return   action.orders ;
        
        case SEARCH_ORDERS:
                return action.orders;


        default: return state

     }
}
