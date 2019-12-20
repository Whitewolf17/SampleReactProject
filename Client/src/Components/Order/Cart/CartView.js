import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  Button from '@material-ui/core/Button';

const styles = {
    root: {
        width: '500px',
        overflowX: 'auto',
        overflowY: 'auto',
        margin: "10px",
        padding: "10px"
      },
      table: {
        maxWidth:450,
        
      },
}

class CartView extends React.Component
{
    constructor(props)
    {
      super(props);        
    }
   
    render()
    {
        //console.log(this.state.item);
        const { classes } = this.props;
        let items = this.props.items;
        return (
            <div id = "CartDiv">
                 <Paper className={classes.root}>
                <Table id="cartTable" size="small" className= {classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type </TableCell> 
                            <TableCell>Item Name </TableCell>
                            <TableCell> Quantity </TableCell>
                            <TableCell> Cost </TableCell>
                            <TableCell> Option </TableCell>
                        </TableRow>
                    </TableHead>
                  {items.map((item)=>(
                      <TableBody>
                        <TableRow>
                        <TableCell>{item.itemType}</TableCell>
                        <TableCell>{item.itemDescription}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>${item.cost}</TableCell>
                        <TableCell><Button variant="outlined" color="primary" onClick={this.props.removeCartItem} value={item.itemId}>Remove</Button></TableCell>                      
                        </TableRow>
                      </TableBody>
                  ))}
                    
                </Table>
            <h3>Cart Total = ${this.props.cartTotal}</h3>
             </Paper>
            <Button variant="outlined" color="primary" onClick = {this.props.placeOrder}> Place Order </Button>
            </div>
        )
    }
}

export default withStyles(styles)(CartView);
