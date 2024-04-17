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