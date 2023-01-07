import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';

// functional component is nothing but a function
const HeaderComponent = () => {
  return (
    <div className="">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
