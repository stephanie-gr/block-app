import './App.scss';
import { useEffect, useState /*useContext*/ } from 'react';
// import { blockContext } from './context/BlockContext.js';
import axios from 'axios';
import Navbar from './components/Navbar';
import BlockOne from './components/BlockOne';
import BlockTwo from './components/BlockTwo';
import BlockThree from './components/BlockThree';

function App() {

  const rollOne = () => {
    let block = document.getElementById("block-one");

    if (block.getAttribute("class") !== "block_roll") {
      return block.setAttribute("class", "block_roll")
    }

    return block.setAttribute("class", "block");
  }

  const rollTwo = () => {
    let block = document.getElementById("block-two");

    if (block.getAttribute("class") !== "block_roll") {
      return block.setAttribute("class", "block_roll")
    }

    return block.setAttribute("class", "block");
  }

  const rollThree = () => {
    let block = document.getElementById("block-three");

    if (block.getAttribute("class") !== "block_roll") {
      return block.setAttribute("class", "block_roll")
    }

    return block.setAttribute("class", "block");
  }

  

  return (
    <div className="App">

      <header className="App-header">
        <Navbar />
      </header>

      <main className="App-main">
        <div className="dice">
          <BlockOne onClick={rollOne}/>
          <BlockTwo onClick={rollTwo}/>
          <BlockThree onClick={rollThree}/>
        </div>
      </main>

    </div>
  );
}

export default App;

