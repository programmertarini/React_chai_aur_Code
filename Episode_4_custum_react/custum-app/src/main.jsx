import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function Myapp() {
  return (
    <div>
      <h2>this is Chai Aur code</h2>
    </div>
  );
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };


//this is how we are creating an element in react and react understand element
const variable = "this is custum variable"
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  variable //this is how we are inject varible
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Myapp() // at the end this is a function so we can render the Myapp component like that but we do not.
  //<Myapp/>

  reactElement
);
