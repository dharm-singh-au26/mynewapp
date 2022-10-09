import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterArray from "./components/HookCounterArray";
import HookCounterTwo from "./components/HookCounterTwo";
import HookEffectsCounter from "./components/HookEffectsCounter";
import HooksCounterThree from "./components/HooksCounterThree";
import HooksMouse from "./components/HooksMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
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
        {/* <HooksCounterThree/> */}
        {/* <HookCounterArray/> */}
        {/* <HookEffectsCounter /> */}
        {/* <HooksMouse/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalClassCounter />
        <IntervalHookCounter/> */}

        <DataFetching/>
      </>
    </div>
  );
}

export default App;
