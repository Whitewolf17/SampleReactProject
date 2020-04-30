import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
const styles = {
    root: {
        width: '99%',        
      },
      table: {
        maxWidth: '100%',
        align:"center"
      },
      root1: {
        minWidth: '50px', 
        height:"35px",
        width : "31%",
        margin: "3px"    
      },
}
let convertDate = (millisecs) =>{
    let d  = new Date(millisecs);
    let dd = d.getDate();
    let mm = d.getMonth()+1;
    let yr = d.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
      } 
      if (mm < 10) {
        mm = '0' + mm;
      }
      let date = dd + '/' + mm + '/' + yr;
      return date;
}
let InventoryTable = (props)=>{
    let data = props.collection;
    const { classes } = props;
    return(
        <div>
             <Paper className={classes.root}>
            <Table id="inventoryList" size="small" className= {classes.table}>           
                    <TableHead>
                        <TableRow>
                            <TableCell> Name &nbsp; </TableCell>
                            <TableCell> Quantity </TableCell>
                            <TableCell> Replenish Qty </TableCell>
                            <TableCell> Usage Qty </TableCell>
                            <TableCell> In-Stock Qty </TableCell>
                            <TableCell> UOM </TableCell>
                            <TableCell> Load Date </TableCell>
                            <TableCell> Expiry Date</TableCell>
                            <TableCell> Replenish Date</TableCell>
                            <TableCell align="center"> Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((item) => (
                            <TableRow>
                                <TableCell size="small">{item.itemName}</TableCell>
                                <TableCell size="small"> {item.quantity} </TableCell>
                                <TableCell size="small"> {item.minimumQuantity} </TableCell>
                                <TableCell size="small"> {0} </TableCell>
                                <TableCell size="small"> {0} </TableCell>                                
                                <TableCell size="small"> {item.uom} </TableCell>
                                <TableCell size="small"> {convertDate(item.shelfLoadedDate)} </TableCell>
                                <TableCell size="small"> {convertDate(item.shelfExpiryDate)} </TableCell>
                                <TableCell size="small"> {convertDate(item.shelfExpiryDate)} </TableCell>
                                <TableCell size="small"> 
                                    <Button variant="contained" className = {classes.root1} color="secondary">Replenish </Button>
                                    <Button variant="contained" className = {classes.root1} color="primary">Usage</Button>
                                    <Button variant="contained" className = {classes.root1}  color="Green">Remaining</Button>
                                </TableCell>                                
                            </TableRow>
                                ))}

                    </TableBody>
            </Table>
            </Paper>
        </div>
    )
}
export default withStyles(styles)(InventoryTable);