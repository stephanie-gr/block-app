import React, { useState, createContext } from "react";
import axios from "axios";

export const restrictionContext = createContext("");

export default function RestrictionStateProvider(props) {
  let randomRestrict = "";

  const [state, setState] = useState({
      blockOne: "",
      blockTwo: "",
      blockThree: ""
  })
  
  const getRestrictKeys = () => {
    const restricts = ["age", "voice", "length", "genre", "gender", "misc"];
    randomRestrict = restricts[Math.floor(Math.random()*restricts.length)];
  };


  const getRandomRestriction = function(blockId) {
    //check state of block this function was called from
    getRestrictKeys();
    
    if (state[blockId]) {
      //then you are re-rolling and have to allow roll to use that restrict
      setState((prev) => ({
        ...prev,
        [blockId]: ""
      }));

      if (randomRestrict === state.blockOne || randomRestrict === state.blockTwo || randomRestrict === state.blockThree) {
        console.log('caught ya');
        getRandomRestriction(blockId);
      };

      axios
      .get(`/api/${randomRestrict}_restrictions`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          [blockId]: res.data[0].text
        }));
      });

    };

    //logic for first roll on a block
    if (randomRestrict === state.blockOne || randomRestrict === state.blockTwo || randomRestrict === state.blockThree) {
      getRandomRestriction(blockId);
    };

    console.log('inside first roll', randomRestrict);
    setState((prev) => ({
      ...prev,
      [blockId]: randomRestrict
    }));

    return randomRestrict;

  }
  
  const providerData = {
    state,
    getRandomRestriction
  };

  return (
    <restrictionContext.Provider value={providerData}>
      {props.children}
    </restrictionContext.Provider>
  );
}