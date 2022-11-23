import React, { createContext, Component } from "react";
// PENERAPAN HIGH ORDER COMPONENT

// High Order Component untuk Provider
export const RootContext = createContext();

const GlobalProvider = (Children) => {
  const user = "Jesse Hall";
  return class ParentComp extends Component {
    render() {
      return (
        <RootContext.Provider value={user}>
          <Children {...this.props} />
        </RootContext.Provider>
      );
    }
  };
};

export default GlobalProvider;
