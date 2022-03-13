import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import EVENTS from "../../constants/events";
import "./index.scss";
import Video from "../../components/Video";

import { Grid, Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem } from '@mui/material'
import VideoPlayer from "../../components/VideoCall/VideoPlayer";
import Sidebar from "../../components/VideoCall/SideBar";
import Notifications from "../../components/VideoCall/Notifications";

import { ContextProvider } from "../../contexts/SocketContext";
import Navigation from "../../components/Navigation";

const VideoChatPage = () => {
  return (
    <div className="ms-camera">
    <div className="ms-camera__section">
    <ContextProvider>

    <Grid container className="pageGrid">
    <Grid item xs={7}>
      <Grid container className="gridContainer2">
        <Grid item xs={12}>

          <VideoPlayer />
        </Grid> 
        <Grid item xs={12}>
        <Sidebar>
            
          </Sidebar>
        </Grid> 
        <Grid item xs={7}>

        <div className="ms-setsu__container containerWide ">
            <p className="containerHeading">Transcription</p>
            <p> 
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
        <div className="ms-setsu__container containerWide ">
        <Notifications />
        </div>
        </Grid>

        </Grid>
      
    </Grid>
    <Grid item xs={4}>
    <div className="ms-setsu__container containerCode ">
            <p className="containerHeading">Codeshare</p>
            <p> 
            </p>
          </div>
    </Grid>
    </Grid>
    </ContextProvider>
    </div>
      </div>
  );
};

export default VideoChatPage;
