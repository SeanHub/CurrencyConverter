#Currency Converter

A currency converter application developed using the Cordova platform. The application will retrieve the latest currencies from an online endpoint and allow you to convert between them. The base currency can be altered. Frameworks used include Ionic and Angular. Bower and GruntJS have been added.  

##Prerequisites

- Install NodeJS then run the following in a terminal  
```
npm install -g grunt-cli
```   
```
npm install -g bower
```   
```
npm install -g cordova
```   

- The following command will create the node_modules folder and add all of the packages defined inside of package.json  
```
npm install
``` 

- The following command will create the folder referenced inside of .bowerrc and add the css/javascript dependencies.  
```
bower install
``` 

- The following task should be run to add the Bower dependencies to the applicable files.  
```
grunt wiredep
``` 

- Add the applicable plugins to the Cordova application.  
```
cordova plugin add org.apache.cordova.statusbar
``` 

- Add the desired platforms to the Cordova application.  
```
cordova platform add ios
``` 

##Building

- Build the Cordova application.  
```
cordova build
``` 