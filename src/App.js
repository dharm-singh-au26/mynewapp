import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HooksCounterThree from "./components/HooksCounterThree";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <>
        {/* <PostList /> */}
        {/* <PostForm/> */}
        {/* <ClassCounter/> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo /> */}
        <HooksCounterThree/>
      </>
    </div>
  );
}

export default App;
