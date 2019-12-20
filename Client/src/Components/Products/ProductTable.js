import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = {
    root: {
        width: '350px',
        overflowX: 'auto',
        overflowY: 'scroll',
      },
      table: {
        maxWidth: 350,
      },
}
/*React Concept - Used Composition */
let ProductTable = (props)=>{
    let data = props.collection;
    const { classes } = props;
    return(
        <div>
             <Paper className={classes.root}>
            <Table id="productList" size="small" className= {classes.table}>           
                    <TableHead>
                        <TableRow>
                            <TableCell> Modify </TableCell>
                            <TableCell> Name &nbsp; </TableCell>
                            <TableCell> Cost </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((item) => (
                            <TableRow>
                                <TableCell size="small"> <input type="radio" name="modifyProduct" value={item.id} onChange = {props.onSelect} /> </TableCell>
                                <TableCell size="small"> {item.name} </TableCell>
                                <TableCell size="small"> ${item.price} </TableCell>
                            </TableRow>
                                ))}

                    </TableBody>
            </Table>
            </Paper>
        </div>
    )
}
export default withStyles(styles)(ProductTable);
//export default ProductTable;