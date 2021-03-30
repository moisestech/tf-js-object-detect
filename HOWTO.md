# HOW-TO

## **1.** Install dependencies

- Install Tensorflow Model Semantic segmentation and run segmentation in the browser (DeepLab).
- Full list of dependencies and devDependencies in [package.json]().

## **2.** Import dependencies

- App/index.js
  **i.** `import * as bodypix` and `import * as tf`.

  **ii.** `import {useRef} from 'react'`. [useRef link](https://reactjs.org/docs/hooks-reference.html#useref)

  - help us reference our onscreen in DOM elements that keep state during the component lifecycle.

## **3.** Setup webcam and canvas

**i.** App/index.js in `<header />` DOM element returns components.

```javascript
// App () comp return function
return (
  <Webcam className="react-webcam"/>
  <Canvas className="react-canvas" />
)
```

## **4.** Define references to those

**i.** App/index.js in `App()` component body connect canvas and webcam components with `useRef`.

```javascript
const webcamRef = useRef(null);
const canvasRef = useRef(null);
```

## **5.** Setup runCoco function

**i.** async function **`runCoco`** will perform object detection using the **`webcamRef`**.

**ii.** Inside the function **`net`** stores the result of the **`cocossd.load()`**.

**iii.** In another step the function **`detect`** with the parameter **`net`** gets called insite the **`runCoco`** function.

```javascript
const runCoco = async () => {
  const net = await cocossd.load();

  // run detect function
};
```

## **6.** Detect function

**i.** async function **`detect`** runs when the app starts, goes ahead and detects our model and our webcam.

**ii.** **`if`** statement will check the **`webcamRef`** is defined with a **`readState`** of 4.

**iii.** Once **`webcamRef`** is ready, the const **`video`**, **`videoWidth`**, and **`videoHeight`** are defined from **`webcamRef.current.video`**.

**iv.** Width const **`video, videoWidth, videoHeight`** the width and height of the **`webcamRef`** and **`canvasRef`** are set.

**v.** async **`net.detect(video)`** is stored in **`objEstimate`** const which returns an **array** of **objects**.

```javascript
// after runFacemesh async function
const detect = async (net) => {
  // checking data is streaming
  if (
    typeof webcamRef.current !== 'undefined' &&
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
    // drawRect(obj, ctx);
  }
};
```

## **6.** Inspect the **objEstimate**

**i.** Logging the **objEstimate** variable returns an **Array** with access to a **`bbox`** representing the bounding box of the model, **`class`**, and **`score`**.

**ii.** Each position in the **`bbox`** **array** represents the **coordinates** of the model.

## **7.** Setup Drawing Utility: **drawRect()**

**i.** **`drawRect`** intakes **`objEstimate`** data and draws object **bonding-boxes** in the canvas.

**ii.** **`drawRect`** loops through each **`detection`** parameter using **`forEach`** method.

**iii.** **`prediction['bbox']`** and **`prediction['class']`** are accessed to pull **coordinates** and detection **name**.

**iv.** Next **`ctx`** is set with **`strokeStyle`**, **`font`**, **`fillStyle`**.

**v.** Next, start drawing the rectangles with **`ctx.beginPath()`** and pass **`fillText`**, with the **`text `** from the **`prediction['class']`** as well as the **`x, y`** coordinates.

**vi.** Last, **`ctx.rect(x, y, width, height)`** and **`ctx.stroke()`** draws the square onto the canvas to be visible on the screen.

```javascript
export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    // Get prediction  results
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // Set styling
    const color = 'green';
    ctx.strokeStyle = color;
    ctx.font = '18px Arial';
    ctx.fillStyle = color;

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
```

## **8.** Draw bounding-boxes in party-mode

**i.** For party-mode **bouding-boxes** the **`ctx.strokeStyle = color;`** will be randomised using **`Math.floor()`** and **`Math.random()`**

```javascript
const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
```

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

- [**Webpack**](https://www.npmjs.com/package/webpack): a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- [**webpack-cli**](https://www.npmjs.com/package/webpack-cli): is the interface we use to communicate with webpack. webpack CLI provides a set of tools to improve the setup of custom webpack configuration.
- [**webpack-dev-server**](https://www.npmjs.com/package/webpack-dev-server): Use webpack with a development server that provides live reloading. This should be used for development only.
  - It uses [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) under the hood, which provides fast in-memory access to the webpack assets.

### Plugins

- [**CopyWebpackPlugin**](https://www.npmjs.com/package/copy-webpack-plugin): Copies individual files or entire directories, which already exist, to the build directory.
- [**HtmlWebpackPlugin**](https://www.npmjs.com/package/html-webpack-plugin): Plugin that simplifies creation of HTML files to serve your bundles.
- [**CleanWebpackPlugin**](https://www.npmjs.com/package/clean-webpack-plugin): A webpack plugin to remove/clean your build folder(s).
- [**UglifyPlugin**](https://www.npmjs.com/package/uglifyjs-webpack-plugin): This plugin uses [uglify-js](https://github.com/mishoo/UglifyJS) to minify your JavaScript.

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
