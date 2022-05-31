# turbocalendar
This is an example created for showing how to create a turbomodule of our own for both android and ios platforms using react native 0.68.

# Installation instructions
Step 1 :- Clone the repository
```
git clone git@github.com:tarandeep-simform/turbocalendar.git
```
Step 2 :- Cd into the cloned directory and install dependencies using npm
```
cd turbocalendar
npm install
```
Step 3 :- Enable new architecture and install cocoapods in ios folder using this command
```
RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```
Step 4 :- Run project on Android
```
npx react-native run-android
```
Step 5 :- Run on iOS using xcode or 
```
npx react-native run-ios
```

This project aims to build an easy understanding of code on how to use turbomodule system in their React Native applications to have a blazing fast
performance from the native side. If you are using another version of react native then please refer to the migration guide for new architecture on 
official react native documentation.
