import { useEffect, createContext, useState } from "react";
import User from "./User";
import Post from "./Post";
import GlobalProvider from "./context";
export const RootContext = createContext();

function App() {
  const [userURL, setUserURL] = useState("users");
  const [postURL, setPostURL] = useState("posts");
  
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
      <div>
        <Post urlEnd={postURL} />
        <User urlEnd={userURL} />
        {/* <User urlEnd={userURL} key={Math.floor(Math.random() * 101)} /> */}
        <div>
          <button onClick={handleUserRequest}>Toggle</button>
        </div>
      </div>
  );
}

export default GlobalProvider(App);
