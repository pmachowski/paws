# Paws - cat catalog

Currently includes:

- TypeScript
- React Hooks
- React Native
- React Navigation [native]
- MobX State Tree [strongly typed state management]
- AsyncStorage [App state persistance]
- Axios + Apisause [api for possible server sync]
- Solidarity [environment checking]
- Prettier [code formatting]
- ESLint [code linting]
- Jest [unit tests]
- Detox [e2e tests]
- Custom fonts
- Custom icon icons
  and more...

## Quick Start

1. Download source from Github
2. Run `yarn` command
3. Run `npx react-native run-ios` or `npx react-native run-android`
4. Enjoy!

## Project structure:

```
Paws
├── app
│   ├── components
│   ├── utils
│   ├── models
│   ├── navigation
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── e2e
│   ├── config.json
│   ├── firstTest.spec.js
│   ├── init.js
│   ├── README.md
├── test
│   ├── __snapshots__
│   ├── mock-reactotron.ts
│   ├── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── index.js
├── ios
│   ├── Paws
│   ├── Paws-tvOS
│   ├── Paws-tvOSTests
│   ├── Paws.xcodeproj
│   └── PawsTests
├── .env
└── package.json

```

**components**
This is where React components live. Each component will have a directory containing the `.tsx` file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**models**
This is where app's models live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigation**
This is where `react-navigation` navigators live.

**screens**
This is where screen components live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the application theme, including spacing, colors, and typography.

**utils**
This is a place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here.

**app.tsx** This is the entry point to app. This is where you will find the main App component which renders the rest of the application.

### ./e2e directory

This directory hold Detox configs, mocks and README.md with instructions how to run end to end tests.

### ./test directory

This directory hold Jest configs and mocks.
