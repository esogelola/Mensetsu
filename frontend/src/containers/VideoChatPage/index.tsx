import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import EVENTS from "../../constants/events";
import "./index.scss";
import Video from "../../components/Video";


import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from '../../components/VideoCall/VideoPlayer';
import Sidebar from '../../components/VideoCall/SideBar';
import Notifications from '../../components/VideoCall/Notifications';

import { ContextProvider } from '../../contexts/SocketContext';



const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const VideoChatPage = () => {
  const classes = useStyles();
  return (
    <ContextProvider>
    <div className="ms-camera">
      <div className="ms-camera__section">
      <Typography variant="h2" align="center">Video Chat</Typography>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      </div>
    </div>
    </ContextProvider>
  );
};

export default VideoChatPage;
