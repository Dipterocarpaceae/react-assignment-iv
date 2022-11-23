import React, { createContext, useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Alert from "@mui/material/Alert";
import User from "./User";
import Post from "./Post";
export const RootContext = createContext();
function App() {
  const [userURL, setUserURL] = useState("users");
  const [postURL, setPostURL] = useState("posts");

  // HOOK CONTEXT
  const [alert, setAlert] = useState(<Alert sx={{ marginY: "15px" }} severity="info">Initial Alert</Alert>);
  const value = useMemo(() => ({ alert, setAlert }), [alert]);

  const [toggle, setToggle] = useState(false);
  
  console.log("App called");
  console.log("Toggle:", toggle)

  useEffect(() => {
    console.log("APP MOUNTED");
    return () => {
      console.log("APP UNMOUNTED");
    };
  }, []);

  const handleUserRequest = (event) => {
    event.preventDefault();
    console.log("Toggle Clicked");
    setToggle(prev => !prev);
  };

  return (
    <Router>
      <ResponsiveAppBar />
      <RootContext.Provider value={value}>
        <Routes>
          <Route path="/" exact element={<User urlEnd={userURL} />} />
          <Route path="/users" element={<User urlEnd={userURL} />} />
          <Route path="/posts" element={<Post urlEnd={postURL} />} />
        </Routes>
      </RootContext.Provider>
      <div>
        <button onClick={handleUserRequest}>Toggle</button>
      </div>
    </Router>
  );
}

export default App;
