import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    
    console.log("parent constructor");
  }
 
  //it will call when component mount into dom
  //once the component will be completly mounted on the web page so this will call
  componentDidMount(){
    console.log("Parent component did mount");
   }
   
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>about</h1>
        <UserClass name={"first Class"} />
        <UserClass name={"second Class"} />
      </div>
    );
  }
}
/* order of console printed
parent constructor
 -parent render
   -first Classchild constructor
   -first Classchild render

   -second Classchild constructor
   -second Classchild render
  
   -first ClassChild component did mount
   -Second ClassChild component did mount
   
-Parent component did mount
 */

export default About;