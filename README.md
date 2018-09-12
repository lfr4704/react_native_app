# react_native_app
CRM react native application for IOS

# Installing Dependencies
brew install node
brew install watchman

# create project
react-native init crm

# run project
cd crm
react-native run-ios
or
Open ios/crm.xcodeproj in Xcode
Hit the Run button
To run your app on Android:
cd /Users/computer/projects/react_native_app/crm
Have an Android emulator running (quickest way to get started), or a device connected
react-native run-android

# run eject to include libraries that require require-native link
https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md#react-native-link
cd crm
add eject to package.json
"eject": "node node_modules/react-native/local-cli/cli.js eject"
delete android and ios folder from root directory
npm run eject
npm install --save react-native-material-kit
npm install --save react-native-vector-icons


# firebase setup (setup login and database)
npm install --save firebase

# if encountering errors after installation of dependencies
react-native run-ios
or
npm install

# alternate way to re-link dependencies
npm install rnpm -g
https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md
rnpm link react-native-material-kit
rnpm link react-native-vector-icons
