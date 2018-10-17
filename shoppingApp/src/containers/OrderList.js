import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addOrder, fetchAllOrders , searchOrders } from '../actions';
import ListComponent from '../components/ListComponent';

class OrderList extends Component {


    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createOrderList = this.createOrderList.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchAllOrders();
    }

handleSearchSubmit = (e) => {
    e.preventDefault();
      console.log('from handleSearchSubmit: ');
       
        const orderDate = this.getOrderDate.value;
        const productId = this.getProductId.value;

    alert('from  handleSearchSubmit: '+orderDate);

   this.props.searchOrders(orderDate, productId);
 
} 

    handleSubmit = (e) => {

        e.preventDefault();

        console.log('from handleSubmit: ')
        const customerId = this.getCustomerId.value;
        const productIds = this.getProductIds.value;

        var order = {
           
            orderId:'',
            customerId,
            amount:'',
            discount:'',
            orderDate:new Date(),
            deliveryDate:new Date(),
            deliveryStatus: 'order Received',
            productIds : [productIds]
        }

        console.log(order)

        this.props.addOrder(order);

    }


 createOrderList() {
     console.log('createOrderList',this.props.orders)
const recordData = this.props.orders;
console.log('recordData',recordData);

     recordData.map(function (record) {
          return (

            <li key={record.orderId}>{record.customerId}--{record.deliveryStatus}</li>
          )
        })

}

deleteOrder = () => {
    console.log('deleteOrder');
}





    render() {

        return (

            <div>
                <div>
                <h2>New Order</h2>
                <form onSubmit = {this.handleSubmit}  //  () =>  this.props.addOrder()
                >
                    Enter Customer Id: <input type="text" ref={(input) => this.getCustomerId = input} />
                    Enter product Id:  <input type="text" ref={(input) => this.getProductIds = input} />
                    <button type="submit" value="Add Order">Add</button>

                </form>
                </div>
                <div>
                    <h2>Search Order</h2>
                <form onSubmit = {this.handleSearchSubmit}  //  () =>  this.props.addOrder()
                >
                   Order Date: <input type="text" ref={(input) => this.getOrderDate = input} />
                   product Id:  <input type="text" ref={(input) => this.getProductId = input} />

                    <button type="submit" value="Add Order">Search</button>

                </form>

                </div>
                <hr />
                   <div>
                       
                   </div>
                <h2>Order List </h2>
                <div>
                <ul>
                        <ListComponent/>
                </ul>
                </div>

            </div>
        );
    }
}


function mapStateToProps(props) {
    return {
        orders: props.orders
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({ addOrder: addOrder, fetchAllOrders: fetchAllOrders,searchOrders:searchOrders}, dispatch)

}


export default connect(mapStateToProps, matchDispatchToProps)(OrderList);

//export default connect()(OrderList);

