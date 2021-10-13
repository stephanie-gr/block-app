import React, { useState, createContext } from "react";
import axios from "axios";

export const restrictionContext = createContext("");

export default function RestrictionStateProvider(props) {
  let randomRestrict = "";

  const [state, setState] = useState({
      restricts: {
        age: false,
        voice: false,
        length: false,
        genre: false,
        gender: false,
        misc: false
      }
  })
  
  const getRestrictKeys = () => {

    let restrictArr = Object.keys(state.restricts);
    randomRestrict = restrictArr[Math.floor(Math.random()*restrictArr.length)];
  };


  const getRandomRestriction = function() {

    getRestrictKeys();

    if (state.restricts[randomRestrict] !== false) {
      getRestrictKeys();
    };

    console.log(randomRestrict);
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