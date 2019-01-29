# Pokemon

A simple RN app using Poke API

# What's needed

- [Node.js](http://nodejs.org)
- [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native)

## What's included

- [Redux](https://github.com/reactjs/redux)
- [Jest](https://jestjs.io/)

## Start

- Install node, watchman, and react-native-cli by following this [guide](https://facebook.github.io/react-native/docs/getting-started.html)

After downloading source code in project root directory install below command:

```
$ npm i
```

## Develop

##### iOS

Run command to open iOS simulator and run app:

```
$ npm run ios
```

##### Android (6.0+)

Run command to open Android emulator and run app:

```
$ npm run android
```

# For any issue/errors in simulator or emulator

run below command in your project root directory.

```
$ watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache
```

# Rebuild the Platform folders

delete the ios and android folders.

run the bewlo commands

```
react-native upgrade
react-native link
```
