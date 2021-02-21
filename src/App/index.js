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
    <h1>{project_name}</h1>
  )
}

// https://www.youtube.com/watch?v=uTdUUpfA83s
// https://github.com/nicknochnack/RealTimeObjectDetectionTFJSReact