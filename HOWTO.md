# HOW-TO

1. Accessing the React.JS and Tensorflow.JS Computer Vision Template
2. Install Tensorflow.JS and setup the prebuilt models
3. Build a React.JS app that accesses your webcam
4. Make detections from your webcam in real time
5. Customise detection styling

## NPM

1. Run App `npm start`
2. Webpack is setup with Hot Reloading and ./dist directory bundling.
3. `src` directory react and tensorflow imports

### To Run

- **scripts**: `npm start` runs scripts: `{ "start": "webpack serve"}`,
  - store your webpack commmands in package.json#scripts
- alternatively run `npx webpack` or `node_modules/./bin/webpack`

## Package.JSON

## Packaging App

- **scripts**: `npm start` runs scripts: { "start": "webpack serve"},
- **main**: `webpack.config.js` is where webpack starts bundling from.

## WEBPACK

### Bundling App

- **Webpack**: Module bundler.
- **webpack-cli**: is the interface we use to communicate with webpack.

#### CopyWebpackPlugin

#### HtmlWebpackPlugin

#### CleanWebpackPlugin

#### UglifyPlugin

#### Babel Loader
