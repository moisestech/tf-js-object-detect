import React, { useRef, useState, useEffect } from "react";

// access to webcam
import Webcam from "react-webcam";

// for running object detection
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";

// drawing bound-boxes on detected objects
import { drawRect } from "../utils"


export default  function App({project_name = "Tensorflow.js React Object Detect"}) {

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

// video: https://www.youtube.com/watch?v=uTdUUpfA83s
// code: https://github.com/nicknochnack/RealTimeObjectDetectionTFJSReact