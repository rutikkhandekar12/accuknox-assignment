import { useState } from 'react';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './pages/header/Header';

function App() {

  const [search, setSearch] = useState();
  const [keyDown, setKeyDown] = useState();

  return (
    <div className="App">
       <Header setSearch={setSearch} search={search} setKeyDown={setKeyDown}/>
       <Dashboard  setSearch={setSearch} search={search} keyDown={keyDown}/>
    </div>
  );
}

export default App;
