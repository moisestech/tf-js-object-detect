# HOW-TO

## **1.** Install dependencies

- Install Tensorflow Model Semantic segmentation and run segmentation in the browser (DeepLab).
- Full list of dependencies and devDependencies in [package.json]().

## **2.** Import dependencies

- App/index.js
  i. `import * as bodypix` and `import * as tf`.

  ii. `import {useRef} from 'react'`. [useRef link](https://reactjs.org/docs/hooks-reference.html#useref)

  - help us reference our onscreen in DOM elements that keep state during the component lifecycle.

## **3.** Setup webcam and canvas

  i. App/index.js in `<header />` DOM element returns components.

  ```javascript
  // App () comp return function
  return (
    <Webcam className="react-webcam"/>
    <Canvas className="react-canvas" />
  )
  ```

## **4.** Define references to those

  i. App/index.js in `App()` component body connect canvas and webcam components with `useRef`.

  ```javascript
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  ```

## **5.** Setup runCoco function

  i. async function **`runCoco`** will perform object detection using the **`webcamRef`**.

  ii. Inside the function **`net`** stores the result of the **`cocossd.load()`**.
  
  iii. In another step the function **`detect`** with the parameter **`net`** gets called insite the **`runCoco`** function.

  ```javascript
  const runCoco = async () => {
    const net = await cocossd.load();


  }
  ```
## **5.** Accessing the React.JS and Tensorflow.JS Computer Vision Template

## **6.** Install Tensorflow.JS and setup the prebuilt models

## **7.** Build a React.JS app that accesses your webcam

## **8.** Make detections from your webcam in real time

## **9.** Customise detection styling

---

## NPM

1. **Run App** `npm start`
2. Webpack Hot Reloading and ./dist directory bundling.

### npm start

- **scripts**: `npm start` runs scripts: `{ "start": "webpack serve"}`,
  - webpack commmands are stored in package.json#scripts
  - alternatively run `npx webpack` or `node_modules/./bin/webpack`

---

## Package.JSON

### Packaging App

- **scripts**: `npm start` runs scripts: { "start": "webpack serve"},
- **main**: `webpack.config.js` is where webpack starts bundling from.

---

## WEBPACK HOW-TO

- **Webpack**: Module bundler.
- **webpack-cli**: is the interface we use to communicate with webpack.
- **webpack-dev-server**: info coming soon.

### Plugins

- **CopyWebpackPlugin**: info coming soon.
- **HtmlWebpackPlugin**: info coming soon.
- **CleanWebpackPlugin**: info coming soon.
- **UglifyPlugin**: info coming soon.

---

## BABEL HOW-TO

### Babel Loader

### Babel Presets

- **@babel/preset-env**: info coming soon.
- **@babel/preset-react**: info coming soon.

### Babel Plugins

- **@babel/plugin-transform-runtime**: info coming soon.
- **@babel/plugin-proposal-pipeline-operator**: info coming soon.
- **@babel/plugin-syntax-dynamic-import**: info coming soon.

---

## TREE

- Install Tree with Homebrew using `brew install tree`
- To create dir structure `tree -I 'node_modules|package-lock.json|dist'`
