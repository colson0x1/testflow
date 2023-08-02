# TestFlow - React and Redux App

TestFlow is a feature-rich React and Redux application with custom middleware, higher-order components, and testing suites. This README provides an overview of the project and instructions to set it up and run various commands.

![testflow](https://i.imgur.com/srM21zn.png)

## Table of Contents
- [TestFlow - React and Redux App](#testflow---react-and-redux-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Application Architecture](#application-architecture)
  - [React Version](#react-version)
  - [Important Note about Enzyme](#important-note-about-enzyme)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Custom Middleware](#custom-middleware)
  - [Higher-Order Component](#higher-order-component)
  - [Screenshots](#screenshots)
    - [testflow - unit and integration tests](#testflow---unit-and-integration-tests)
    - [testflow - home](#testflow---home)
    - [testflow - sign in](#testflow---sign-in)
    - [testflow - render posted comments](#testflow---render-posted-comments)
    - [testflow - fetch comments](#testflow---fetch-comments)
    - [testflow - resolved response: async middleware debugging](#testflow---resolved-response-async-middleware-debugging)
    - [testflow - action with response as payload: async middlware debugging](#testflow---action-with-response-as-payload-async-middlware-debugging)

## Introduction
TestFlow is a full-stack application built with React and Redux. It allows users to interact with comments, post new comments, and fetch comments from a JSON API. The project includes custom middleware for handling asynchronous actions and validating the state in Redux. Additionally, there is a higher-order component called `requireAuth` to restrict access to certain routes for authenticated users.

## Application Architecture

```
|-- testflow
    |-- public
    |   |-- index.html
    |-- src
    |   |-- actions
    |   |   |-- index.js
    |   |   |-- types.js
    |   |-- components
    |   |   |-- App.js
    |   |   |-- CommentBox.js
    |   |   |-- CommentList.js
    |   |   |-- requireAuth.js
    |   |-- middlewares
    |   |   |-- async.js
    |   |   |-- stateSchema.js
    |   |   |-- stateValidator.js
    |   |-- reducers
    |   |   |-- comments.js
    |   |   |-- auth.js
    |   |   |-- index.js
    |   |-- setupTests.js
    |   |-- __tests__
    |       |-- App.test.js
    |       |-- CommentBox.test.js
    |       |-- CommentList.test.js
    |       |-- integrations.test.js
    |       |-- index.test.js
    |       |-- comments.test.js
    |-- .env
    |-- .gitignore
    |-- jsconfig.json
    |-- package.json
    |-- README.md
```

In this architecture:

- The project root contains the `public` folder for static assets, with `index.html` serving as the entry point for the application.
- The `src` folder is the main source code directory that contains the application's core logic.
- The `actions` folder holds action creators and action type constants.
- The `components` folder contains the React components that form the UI of the application.
- The `middlewares` directory includes custom middleware responsible for handling asynchronous actions and state validation.
- The `reducers` folder contains Redux reducers to manage the state of the application.
- The `setupTests.js` file configures the testing environment.
- The `__tests__` folder holds all the test files for unit and integration testing.
- The root directory contains necessary configuration files like `.env`, `.gitignore`, `jsconfig.json`, `package.json`, and `README.md`.

This architecture promotes a modular and organized structure, making it easier for developers to understand, maintain, and scale the application effectively.

## React Version

The project is built using React version 16.

## Important Note about Enzyme

Please note that AirBnB stopped working on Enzyme after the Enzyme Adapter 16 for React 16. If you are using React version 16 or later, you may encounter issues with Enzyme. The provided setup uses Enzyme Adapter for React 16, which is suitable for this project.

## Installation
To install TestFlow, follow these steps:

1. Clone the repository: `git clone https://github.com/colson0x1/testflow.git`
2. Navigate to the project directory: `cd testflow`
3. Install dependencies with the `--legacy-peer-deps` flag: `npm install --legacy-peer-deps`

NOTE: The Enzyme adapter used is 16:
```
yarn add enzyme enzyme-adapter-react-16 --legacy-peer-deps
```

## Usage
To run TestFlow, use the following command:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Testing
TestFlow has both unit and integration tests in place. To run the tests, execute the following command:

```
npm test
```

The test suite uses Jest and Enzyme to ensure the correctness of the application.

## Custom Middleware
The TestFlow app features a custom asynchronous middleware (`async.js`) that handles actions with promises in their payload. The middleware waits for the promise to resolve and then dispatches a new action with the data received. There's also another middleware called `stateValidator.js` which validates the structure of the state in the redux using JSON Schema.

## Higher-Order Component
TestFlow includes a higher-order component (`requireAuth.js`) that wraps other components to restrict access to authenticated users. If a user is not authenticated, they will be redirected to the homepage.

## Screenshots

### testflow - unit and integration tests
![testflow - unit and integration tests](https://i.imgur.com/4Bg8MBg.png)

### testflow - home
![testflow - home](https://i.imgur.com/waNxSgN.png)

### testflow - sign in
![testflow - sign in ](https://i.imgur.com/zSBTm2I.png)

### testflow - render posted comments
![testflow - render posted comments](https://i.imgur.com/MAxkQIX.png)

### testflow - fetch comments
![testflow - fetch comments](https://i.imgur.com/srM21zn.png)

### testflow - resolved response: async middleware debugging 
![testflow - resolved response: async middleware debugging](https://i.imgur.com/7OV9ipA.png)

### testflow - action with response as payload: async middlware debugging
![testflow - action with response as payload: async middleware debugging](https://i.imgur.com/PuAlHON.png)
