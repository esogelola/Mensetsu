import React, { useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../../contexts/SocketContext';
const useStyles = makeStyles((theme) => ({
  button: {
    alignItems: 'center',
    backgroundColor: '#7c2b2b',
    padding: 10
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    maxHeight: '100px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    justifycontent: 'center',
    aligncontent: 'center',
  },
  container: {
  
    margin: '0 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 0,
  },
  padding: {
    padding: 0,
  },

}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();
  return (
    <>
    <Grid container className={classes.gridContainer}>
      {call.isReceivingCall && !callAccepted && (
        <div >
          <Grid item xs={12} md={12} className={classes.padding}>
          <h2>{call.name} is calling:</h2>
          </Grid>
          <Grid item xs={12} md={12} className={classes.padding}>
          <Button variant="contained" color="primary" onClick={answerCall} style={{
                  borderRadius: 10,
                  backgroundColor: "#FE93AB", 
                  fontFamily: "Fredoka One", 
                  color: "#FFFFFF",
              }}>
            Answer
          </Button>
          </Grid>
        </div>

        
      )}
      </Grid>
    </>
  );
};

export default Notifications;