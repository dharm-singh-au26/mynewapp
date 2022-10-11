import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DataFetching from "./components/DataFetching";
import DocTitleOne from "./components/DocTitleOne";
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
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

        {/* <DataFetching/> */}
        {/* <UserContext.Provider value={'Dharm'}>
          <ChannelContext.Provider value={'Singh'}>

          <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* < CounterOne />  */}
        {/* <CounterTwo/> */}
        <DocTitleOne/>
      </>
    </div>
  );
}

export default App;
