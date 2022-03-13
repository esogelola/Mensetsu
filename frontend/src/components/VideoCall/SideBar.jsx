import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
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
    backgroundColor: "#FFFFFF",
  },
  container: {
  
    margin: '0 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 10,
  },
  padding: {
    padding: 20,
  },

}));

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={0} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={4} md={4} className={classes.padding}>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              
            </Grid>
            <Grid item xs={2} md={2} className={classes.padding}>
            <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" className={classes.button} color="primary" fullWidth style={{
                  borderRadius: 10,
                  backgroundColor: "#450016", 
                  fontFamily: "Fredoka One", 
                  color: "#FFFFFF",
              }}>
                  Copy My ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={4} md={4} className={classes.padding}>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={2} md={2} className={classes.padding}>
              {callAccepted && !callEnded ? (
                <Button variant="contained"  style={{
                  borderRadius: 10,
                  backgroundColor: "#FD5D80",
                  fontFamily: "Fredoka One", 
                  color: "#FFFFFF",
              }} fullWidth onClick={leaveCall} className={classes.margin}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary"  style={{
                  borderRadius: 10,
                  backgroundColor: "#450016", 
                  fontFamily: "Fredoka One", 
                  color: "#FFFFFF",
              }} startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Sidebar;