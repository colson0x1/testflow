# TestFlow - React Redux Comment Post App with Testing

TestFlow is a simple comment post app built using React and Redux that allows users to add and display comments. The primary focus of this project is on unit testing and integration testing using Jest and Enzyme. The app utilizes the create-react-app boilerplate and follows best practices for testing React applications.

### TestFlow app view
![testflow - add and fetch comments](https://i.imgur.com/zi8RSai.png)

## TestFlow - running tests... success
![testflow](https://i.imgur.com/4Bg8MBg.png)

## React Version

The project is built using React version 16.

## Important Note about Enzyme

Please note that AirBnB stopped working on Enzyme after the Enzyme Adapter 16 for React 16. If you are using React version 16 or later, you may encounter issues with Enzyme. The provided setup uses Enzyme Adapter for React 16, which is suitable for this project.

## Installation

To install the TestFlow project, use the following commands with either npm or yarn:

Using npm:

```bash
npm install --legacy-peer-deps
```

Using yarn:

```bash
yarn --legacy-peer-deps
```

**NOTE**:
The Enzyme adapter used is 16:
```
yarn add enzyme enzyme-adapter-react-16 --legacy-peer-deps
```

## Project Structure

The TestFlow project follows a structured layout for better organization:

```
testflow/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── CommentBox.js
│   │   ├── CommentList.js
│   │   └── __tests__/
│   │       ├── App.test.js
│   │       ├── CommentBox.test.js
│   │       └── CommentList.test.js
│   ├── reducers/
│   │   ├── comments.js
│   │   ├── index.js
│   │   └── __tests__/
│   │       └── comments.test.js
│   └── __tests__/
│       └── integrations.test.js
├── .env
├── .gitignore
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
├── setupTest.js
└── yarn.lock
```

## Running the Tests

The TestFlow project includes unit tests and integration tests:

### Unit Tests

Unit tests can be found in the `src/components/__tests__` and `src/reducers/__tests__` directories.

### Integration Test

The integration test can be found in the `src/__tests__` directory.

To run the tests (Unit, Integrations), use the following command:

```bash
npm test
```

To run the integration test sequentially, use the following command:

```bash
npm test -- --runInBand src/__tests__/integrations.test.js
```

## How to Use the App

The TestFlow app allows users to add comments and view the list of comments. The main components are:

1. `CommentBox`: Users can enter a comment and post it. There is also a button to fetch comments from an external API.
2. `CommentList`: Displays the list of comments.

---

## Screenshots

### TestFlow main
![test flow main](https://i.imgur.com/PQIMxDq.png)

### TestFlow - add comments
![testflow add comments](https://i.imgur.com/n07oDK5.png)

### TestFlow - fetch comments
![testflow - fetch comments](https://i.imgur.com/zi8RSai.png)