import React from 'react';
import ReactDOM from 'react-dom';


class OrderView extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <h2>Enter Name of the Order: 
                <input type ="text" onChange = {this.props.onChange} /></h2>
            </div>
        )
    }
}

export default OrderView;