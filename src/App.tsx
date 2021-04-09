import React from 'react';
import './App.scss';
import {SearchBox} from "./components/search-box/SearchBox";
import {ReposWrap} from "./components/repos-wrap/ReposWrap";

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <h1>App that search repos in Github by name</h1>
      </header>
        <div className='content'>
            <SearchBox />
           <ReposWrap />
        </div>
    </div>
  );
}

export default App;
