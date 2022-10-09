import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <>
    {/* <PostList /> */}
    {/* <PostForm/> */}
    {/* <ClassCounter/> */}
    <HookCounter/>
      </>
    </div>
  );
}

export default App;
