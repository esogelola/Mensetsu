import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import EVENTS from "../../constants/events";
import "./index.scss";

type VideoChatPageProps = {};
const socketUrl = "/";

const VideoChatPage = ({}: VideoChatPageProps) => {
  const [socket, setSocket] = useState<Object | null>(null);
  const [users, setUsers] = useState(false);
  const initSocket = () => {
    let socket = io(socketUrl);
    setSocket({ socket });
    socket.on("connect", () => console.log("Connected"));
    // socket.on(EVENTS.LOGOUT, () => {
    //   setUsers(false);
    // });
    // socket.on(EVENTS.LOGOUT, () => {
    //   setUsers(false);
    // });
  };
  useEffect(() => {}, []);

  return (
    <div className="ms-camera">
      <div className="ms-camera__section">
        <h1>Video Chat Page</h1>
      </div>
    </div>
  );
};

export default VideoChatPage;
