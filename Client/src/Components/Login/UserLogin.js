import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './UserLogin.css';

const styles = {
    root: {
        '& .MuiTextField-root': {
          margin: 10,
          width: 20,
        }
  }
}
  

 let UserLogin  = (props)=>{
    const { classes } = props;
    return(
        <div id="#outerDiv">
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <TextField id="standard-basic" 
                            label="User Name" 
                            name="userName"
                            value={props.value.userName}
                            onChange={props.onChange}
                            className={classes.root}  />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-password-input"
                                label="Password"
                                name="password"
                                value={props.value.password}
                                onChange={props.onChange} 
                                className={classes.root} />  
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick = {props.onLogin}>
                     Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(UserLogin);