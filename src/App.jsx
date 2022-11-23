import React, { createContext, useEffect, useState, useMemo } from "react";
import User from "./User";
import Post from "./Post";
export const RootContext = createContext({
  countClick: 0,
  setCountClick: () => {},
});
function App() {
  const [userURL, setUserURL] = useState("users");
  const [postURL, setPostURL] = useState("posts");

  const [countClick, setCountClick] = useState(0);
  const value = useMemo(() => ({ countClick, setCountClick }), [countClick]);
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
    <RootContext.Provider value={value}>
      <div>
        <Post urlEnd={postURL} />
        <User urlEnd={userURL} />
        {/* <User urlEnd={userURL} key={Math.floor(Math.random() * 101)} /> */}
        <div>
          <button onClick={handleUserRequest}>Toggle</button>
        </div>
      </div>
    </RootContext.Provider>
  );
}

export default App;
