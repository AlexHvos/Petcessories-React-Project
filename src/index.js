import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./components/Login/signIn";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter>
    <SignIn />
  </BrowserRouter>);