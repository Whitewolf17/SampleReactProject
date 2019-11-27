import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export  let BasePopup = (props)=>{
  const [open, setOpen] = React.useState(false);

  const addBase = () => {
      props.addBase();
      setOpen(true);
  };

  const modifyBase = () => {
     props.modifyBase(); 
    setOpen(true);
};

  const handleClose = () => {    
    setOpen(false);
  };

  const handleSave = ()=>{
    props.saveBase();
    setOpen(false);
  }

  return (
    <div>
    <Button variant="outlined" color="primary" onClick={addBase}>
        Add Base
      </Button>
      <Button variant="outlined" color="primary" onClick={modifyBase}>
        Modify Base
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Base</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange = {props.onBaseNameChange}
            value = {props.value.base.name}
          />
          <TextField
            margin="dense"
            id="price"
            label="Price"
            type="text"
            fullWidth
            value = {props.value.base.price}
            onChange = {props.onBasePriceChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}