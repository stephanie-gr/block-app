import './App.scss';
import { useEffect, useState, useContext} from 'react';
import { restrictionContext } from './context/RestrictionContext';
import RestrictionStateProvider from './context/RestrictionContext';
import axios from 'axios';
import Navbar from './components/Navbar';
import BlockOne from './components/BlockOne';
import BlockTwo from './components/BlockTwo';
import BlockThree from './components/BlockThree';

function App() {
  const { state, getRandomRestriction } = useContext(restrictionContext);

  const rollOne = () => {
    let block = document.getElementById("block-one");

    if (block.getAttribute("class") !== "block_roll") {
      return block.setAttribute("class", "block_roll")
    }
    
    getRandomRestriction("blockOne");


    return block.setAttribute("class", "block");

  }

  const rollTwo = () => {
    let block = document.getElementById("block-two");

    if (block.getAttribute("class") !== "block_roll") {
      return block.setAttribute("class", "block_roll")
    };

    getRandomRestriction("blockTwo");

    return block.setAttribute("class", "block");
  }

  const rollThree = () => {
    let block = document.getElementById("block-three");

    if (block.getAttribute("class") !== "block_roll") {
      return block.setAttribute("class", "block_roll")
    };

    getRandomRestriction("blockThree");

    return block.setAttribute("class", "block");
  }

  

  return (
    <RestrictionStateProvider>

    <div className="App">

      <header className="App-header">
        <Navbar />
      </header>

      <main className="App-main">
        <div className="dice">
          <BlockOne onClick={rollOne} blockOne={state.blockOne}/>
          <BlockTwo onClick={rollTwo} blockTwo={state.blockTwo}/>
          <BlockThree onClick={rollThree} blockThree={state.blockThree}/>
        </div>
      </main>

    </div>
    </RestrictionStateProvider>

  );
}

export default App;

