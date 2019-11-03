import React from 'react';
import './App.css';
import TopNav from './components/topnav'
import About from './components/about'
import SkillDiv from './components/skilldiv'
import BottomNav from './components/bottomnav'
//import Resume from './components/resume'

function App() {
  return (
    <div className="App">
      <TopNav/>
      <About/>
      <SkillDiv/>
      <BottomNav/>
    </div>
  );
}

export default App;
