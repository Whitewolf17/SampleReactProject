import React from 'react';
import ReactDOM from 'react-dom';
/*React Concept - Used Composition */
let ProductTable = (props)=>{
    let data = props.collection;
    return(
        <div>
            <table id="productList">
                    <thead>
                        <tr>
                            <th> Modify </th>
                            <th> Name </th>
                            <th> Cost </th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                            <tr>
                                <td> <input type="radio" name="modifyProduct" value={item.id} onChange = {props.onSelect} /> </td>
                                <td> {item.name} </td>
                                <td> ${item.price} </td>
                            </tr>
                                ))}

                    </tbody>
            </table>
        </div>
    )
}

export default ProductTable;