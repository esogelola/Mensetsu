import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { SocketContext } from '../../contexts/SocketContext';
import "./index.scss";


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (
    <Grid container className="gridContainer">
            {/* <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>*/}
            <Grid item xs={6}>
            <video playsInline muted ref={myVideo} autoPlay className="video" />
            </Grid>
            {/*<Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography> */}
            <Grid item xs={6}> 
            <video playsInline ref={userVideo} autoPlay className="video" /> 
            </Grid>
            
    </Grid>
  );
};

export default VideoPlayer;