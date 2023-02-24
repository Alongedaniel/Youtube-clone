import React, { createContext } from "react";


export const AppContext = createContext(null);

const StateContextProvider = ({ children }) => {
    

    return (
    
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
)
}

export default StateContextProvider;