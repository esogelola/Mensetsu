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
  const { setsuAI, setEmotion } = useContext<any>(GlobalContext);

  //   var VideoElement: React.RefObject<HTMLVideoElement> = useRef();
  const [currentEmotion, setCurrentEmotion] = useState<ExpressionData>({});
  const [videoElement, setVideoElement] = useState<any | null>(null);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const tempCanvasRef = useRef(null);
  const imageRef = useRef(null);

  //   const [interval, setInterval] = useState(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const FPS = 30;

  useEffect(() => {
    setVideoElement(document.getElementsByTagName("video")[0]);
  }, [webcamRef]);
  useEffect(() => {
    Promise.all<any | void>([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
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
            // console.log(mood);
            setCurrentEmotion(mood);
            setEmotion(mood);
          }
        }
      }, 1000);
      const faceBoxInterval = setInterval(async () => {
        //capture();
        const canvas = canvasRef.current as unknown as HTMLCanvasElement;
        const tempCanvas = tempCanvasRef.current;
        const image = imageRef.current;
        //const displaySize = { width: 1280, height: 720 }

        if (
          videoElement &&
          canvas &&
          tempCanvas &&
          image &&
          webcamRef.current
        ) {
          const detections = await faceapi.detectSingleFace(
            videoElement,
            new faceapi.TinyFaceDetectorOptions()
          );

          if (
            detections &&
            videoElement &&
            canvas &&
            tempCanvas &&
            image &&
            webcamRef.current
          ) {
            canvas
              .getContext("2d")
              ?.clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, detections);
          }
        }
        // Change this for time between screenshots (in milliseconds)
        return () => {
          clearInterval(expressionInterval);
          clearInterval(faceBoxInterval);
        };
      }, 1000 / FPS);
    });
  }, []);

  const capture = useCallback(async () => {}, [webcamRef]);

  return (
    <div className="ms-video-component">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored={true}
        videoConstraints={videoConstraints}
      />

      {/* <canvas ref={canvasRef} id="primary-canvas" />
      <canvas ref={tempCanvasRef} id="secondary-canvas" /> */}
      <img ref={imageRef} />
    </div>
  );
}

export default Video;
