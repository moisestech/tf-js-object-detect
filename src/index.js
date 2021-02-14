import "./styles.css";

import React, { useRef, useState, userEffect } from "react";
import ReactDOM from "react-dom";

// access to webcam
import Webcam from "react-webcam";

// for running object detection
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";

// drawing bound-boxes on detected objects
import { drawRect } from "./utilities"



let project_name = "Tensorflow.js React Object Detect";

console.log(project_name);

// https://www.youtube.com/watch?v=uTdUUpfA83s
// https://github.com/nicknochnack/RealTimeObjectDetectionTFJSReact