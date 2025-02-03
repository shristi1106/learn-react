#namaste react

#parcel
-Dev Build
-Local server
-HMR(hot module replacement)
-file watching algo-writen in c++
-Caching- faster build
-Image optimization
-Minification of file
-Bundling
-Compress the file
-Consistance Hashing
-Code splitting
-Diffrential Bundling- to support older browser also
-Error handling
-Tree shaking- parcel remove unused code like there are 100 files, but u use 5 of them so it will remove other
-Provide https
It has different build for dev n production, more optimization at production build but less in dev

#Namaste Food

/**
 * Header
 -Logo
 -Nave Item
 * Body
 -Search
 -Reastaurant Container
   -res card
     -img
     -name of res, start rating, cuisine, delivery time 
 *Footer
 -copyright
 -links
 -contact
 -Address
 */

 TWO TYPE OF EXPORT/IMPORT

-default export/import
 export default <name of variable>or Component name
 import Component from "path"

 -named export/import(when we use multiple things)
 export const Component
 import {Component} from "path"

 # React Hooks- normal js utility function
 -useState()- use to generate superpowerfull variables or use to create state variables
 -useEffect()

# 2 types routing in web apps
-Client side routing = All the components already in our local, when we want route that component only load not fetch the data from server side    
-Server side routing =  you make a server call and page coming from that server 

#3 About Class based Component
-when its load on web page first constructor will be called then 'render' will call

# React-Redux /Redux toolkit
-install npm install @reduxjs/toolkit and react-redux
-Build our store
-connect our store to our app
-Slice (CartSlice)
-Selector

# testing
-unit testing =one specific type of component is testing inside it not whole app i.e header
-integration testing= We will test multiple component together
-end to end testing= how user will flow across the application like need selenium etc

i.e developer is responsible for solely unit testing and integration testing

# setting up testing in our app
-install react testing library
-install jest
-installed abable dependencies
-configure bable
-config parcel config file to disable default babel transpilation
-jest config (npx jest --init)
-Install jsdom library
-instll @bable/preset-react - to make json work in test cases
-include @bable/preset-react inside my bable config