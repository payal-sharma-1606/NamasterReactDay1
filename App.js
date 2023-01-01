import React from "react";
import * as ReactDOM from 'react-dom/client';

const firstChildElement = React.createElement(
  "h1",
  {
    id: "Heading 1",
    key: "key1",
  },
  "This is heading 1"
);

const secondChildElement = React.createElement(
  "h2",
  {
    id: "Heading 2",
    key: "key2",
  },
  "This is heading 2"
);

const containerElement = React.createElement(
  "div",
  {
    id: "container",
  },
  [firstChildElement, secondChildElement]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(containerElement);