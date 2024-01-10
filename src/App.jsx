import {useState} from 'react';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import './App.css'

function App() {
  const [globalName, setGlobalName] = useState();

  const clickGlobalNameChange = () => {
    setGlobalName('Global!!!');
  };

  return (
    <>
      <Header />

      <button onClick={clickGlobalNameChange}>CHANGE ALL NAMES</button>

      <Card globalName={globalName} />
      <Card globalName={globalName} />

      <Footer />
    </>
  )
}

export default App
