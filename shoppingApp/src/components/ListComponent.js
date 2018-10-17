import React from 'react';
import { connect } from 'react-redux';
import { deleteOrder } from '../actions';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
       //  this.handleClick = this.handleClick.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }


handleUpdate(){
    alert('You clicked update')
}

    handleClick (orderId) {

        alert('this is:'+ orderId);

        const { dispatch } = this.props;
        dispatch(deleteOrder(orderId));

    }


    render() {

        console.log('createOrderList', this.props.orders)
        const recordData = this.props.orders;
        console.log('recordData', recordData);

var handleClick = this.handleClick.bind(this);
var handleUpdate = this.handleUpdate.bind(this);
        return (
            recordData.map(function (record) {

                return (
                    <li key={record.orderId}
                        onClick = {() => handleUpdate() }>
                        {record.orderId}--{record.deliveryStatus}
                        <button onClick={() => handleClick(record.orderId)}>Delete</button>
                    </li>
                );
            }
            )
        );
    }


}

function mapStateToProps(props) {
    return {
        orders: props.orders
    }
}

export default connect(mapStateToProps)(ListComponent);