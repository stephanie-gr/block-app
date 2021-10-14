import React, { useState, createContext } from "react";
import axios from "axios";

export const restrictionContext = createContext("");

export default function RestrictionStateProvider(props) {
  let randomRestrict = "";

  const [state, setState] = useState({
      blockOneText: "",
      blockTwoText: "",
      blockThreeText: "",
      blockOneUsing: "",
      blockTwoUsing: "",
      blockThreeUsing: ""
  })
  
  const getRestrictKeys = () => {
    const restricts = ["age", "voice", "length", "genre", "gender", "misc"];
    randomRestrict = restricts[Math.floor(Math.random()*restricts.length)];
  };


  const getRandomRestriction = function(blockText, blockUsing) {
    //check state of block this function was called from
    getRestrictKeys();
    
    if (state[blockText]) {
      //then you are re-rolling and have to allow roll to use that restrict
      setState((prev) => ({
        ...prev,
        [blockUsing]: ""
      }));
      
      
      if (randomRestrict === state.blockOneUsing || randomRestrict === state.blockTwoUsing || randomRestrict === state.blockThreeUsing) {
        console.log('hello');
        getRestrictKeys();
      };

      axios
      .get(`/api/${randomRestrict}_restrictions`)
      .then((res) => {
        console.log(res.data[0].text)

        setState((prev) => ({
          ...prev,
          [blockText]: res.data[0].text,
          [blockUsing]: randomRestrict
        }));
      });

    };

    getRestrictKeys();

    //logic for first roll on a block
    if (randomRestrict === state.blockOneUsing || randomRestrict === state.blockTwoUsing || randomRestrict === state.blockThreeUsing) {
      getRestrictKeys();
    };

    axios
    .get(`/api/${randomRestrict}_restrictions`)
    .then((res) => {
      setState((prev) => ({
        ...prev,
        [blockText]: res.data[0].text,
        [blockUsing]: randomRestrict
      }));
    });

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