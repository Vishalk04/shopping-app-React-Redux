import axios from 'axios';

export const ADD_ORDER = 'ADD_ORDER';
export const FETCH_ALL_ORDERS =  'FETCH_ALL_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER';
export const SEARCH_ORDERS = 'SEARCH_ORDERS';
export const UPDATE_ORDER = 'UPDATE_ORDER';

const URL = "http://localhost:7070/orders/";


export const updateOrder = ( order) => {
   alert('updateOrder actions:'+order.orderId)
  
  return (dispatch) => {
    return axios.put(URL,order)
      .then(response => {
        dispatch(fetchAllOrders())
      })
      .catch(error => {
        throw(error);
      });
  };
};



export const addOrder = (order) => {
  return (dispatch) => {
    return axios.post(URL, order)
      .then(response => {
        dispatch(addOrderSuccess(response.data))
      }).then(response => {
        dispatch(fetchAllOrders())
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const fetchAllOrders = ()=> {
    return (dispatch) => {
    return axios.get(URL)
      .then(response => {
        alert(response.data);
        dispatch(fetchAllOrdersSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };

}

export const deleteOrder = (orderId) => {
   
    alert('deleteOrder actions:'+orderId)
    alert('url'+URL+'/'+orderId);

  return (dispatch) => {
    return axios.delete(URL+'/'+orderId)
      .then(response => {
        dispatch(fetchAllOrders())
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const searchOrders = (orderDate, productId) => {

alert('from searchOrders actions: '+orderDate);

  return (dispatch) => {
    return axios.get(URL+productId+'/'+orderDate) 
    .then( response => {
      dispatch(fetchAllOrdersSuccess(response.data) )})
      .catch(error => {
        throw(error);
      });
}
};

export const fetchAllOrdersSuccess = (orders) => {
return {
    type: FETCH_ALL_ORDERS,
    orders
}
}


export const addOrderSuccess = (orders) => {
  return { type: ADD_ORDER, orders }
}