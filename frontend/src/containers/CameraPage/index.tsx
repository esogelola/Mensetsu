import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "../../components/Video";
import "./index.scss";

type CameraPageProps = {};

const CameraPage = ({}: CameraPageProps) => {
  const [questionId, setQuestionId] = useState(1);
  const [timer, setTimer] = useState(0);
  const [started, setStarted] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState("hello");

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  }, [timer]);

  return (
    <div className="ms-camera">
      <div className="ms-camera__section">
        <h1>Camera Page</h1>
        <Video />
      </div>
    </div>
  );
};

export default CameraPage;
