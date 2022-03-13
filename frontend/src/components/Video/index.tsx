import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import Webcam from "react-webcam";
import { GlobalContext } from "../../contexts/GlobalContext";
import * as faceapi from "@vladmandic/face-api";
import { getForeheadCoords } from "../../utils/Camera";
import "./index.scss";

interface ExpressionData {
  expression?: String;
  probability?: Number;
}

function Video() {
  //   var VideoElement: React.RefObject<HTMLVideoElement> = useRef();
  const [currentEmotion, setCurrentEmotion] = useState<ExpressionData>({});
  const [videoElement, setVideoElement] = useState<any | null>(null);
  const webcamRef = useRef(null);
  const { setEmotion, setLoadingNet } = useContext<any>(GlobalContext);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  useEffect(() => {
    setVideoElement(document.getElementsByTagName("video")[0]);
  }, []);

  useEffect(() => {}, [currentEmotion]);
  useEffect(() => {
    Promise.all<any | void>([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      console.log("Loading net false");
      setLoadingNet(false);
      const expressionInterval = setInterval(async () => {
        if (videoElement) {
          const detection = await faceapi
            .detectSingleFace(
              videoElement,
              new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceExpressions();

          if (detection && detection.expressions) {
            var mood = detection.expressions.asSortedArray()[0];
            console.log(mood);
            setEmotion(mood.expression);
            setCurrentEmotion(mood);
          }
        }

        return () => {
          clearInterval(expressionInterval);
        };
      }, 1000);
    });
  }, [videoElement]);

  return (
    <div className="ms-video-component">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored={true}
        videoConstraints={videoConstraints}
        height={720}
        width={1280}
      />
    </div>
  );
}

export default Video;
