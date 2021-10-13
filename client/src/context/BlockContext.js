// import React, { useState, createContext } from "react";

// export const blockContext = createContext();

// export default function BlockStateProvider(props) {
//   const [state, setState] = useState({
//     block: {}
//   })
  
//   const roll = (event) => {
//     setState({block: event.target})
//   }
  
//   const providerData = {
//     state,
//     roll 
//   };

//   return (
//     <blockContext.Provider value={providerData}>
//       {props.children}
//     </blockContext.Provider>
//   );
// }