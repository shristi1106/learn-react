import React from 'react';
import ReactDOM from "react-dom/client";

// React.createElement => react element-js Object => HTMLElement(render)
//react element 
// const heading = React.createElement(
//     "h1",
//     {id:heading},
//     "Learn React"
// );

//JSX- is not html in js (its is html likes syntex)
//js (converted before it reaches the js) done by parcel-bable(js compiler/package)
const jsxHading = (
 <h1 className="head">
    Hello Shri
    </h1>
);

//functional component
const fntion =()=> (
    <h1 className="head">
       Hello Shri
       </h1>
   );

   //component composition- to render one component inside another component
   

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHading);