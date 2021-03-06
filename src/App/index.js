import React, { useRef, useState, useEffect } from "react";

// access to webcam
import Webcam from "react-webcam";

// for running object detection
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";

// drawing bound-boxes on detected objects
import { drawRect } from "../utils"


export default  function App({project_name = "Tensorflow.js React Object Detect"}) {
  const webCamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // checking data is streaming
    if (
      typeof webcamRef.current !== "undefined" && 
      webcamRef.current !== null && 
      webcamRef.current.video.readyState === 4 
    ) {
      // Get Video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      
      // Set Video Width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set Canvas Width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const objEstimate = await net.detect(video);
      console.log(objEstimate);

      // Get Canvas context for drawing
      const ctx = canvasRef.current.getContext('2d');

      // Update Drawing Utility
      drawRect(obj, ctx);
    }
  }

  // will runCoco on every component update
  useEffect(() => {runCoco()}, []);

  return (  
    <div clasName="App">
      <h1>{project_name}</h1>
      <header>
        {/* where one intakes data for tfjs  */}
        <Webcam ref={webcamRef} className="react-webcam" />

        {/* where one draws the segmentation layer */}
        <Canvas ref={canvasRef} className="react-canvas" />
      </header>
    </div>
  )
}

// video: https://youtu.be/uTdUUpfA83s?t=351
// code: https://github.com/nicknochnack/RealTimeObjectDetectionTFJSReact