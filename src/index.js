import React from "react";
// ReactDOM is used to render React components into the DOM (Document Object Model).
import ReactDOM from "react-dom/client";
import App from "./App";
// The purpose for having a Context Provider wrap around children is to keep track of state and props, read on how state and props between parents and children affect each other.
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      {/*<React.StrictMode> is a wrapper component provided by React that activates
        additional checks and warnings during development
        to help us write better and safer code.
        It doesn't render any UI itself but affects the behavior of its descendants. */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
