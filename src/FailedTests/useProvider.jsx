import React, { useState, useEffect, createContext } from "react";
// Un hook commence avec le mot "use"

// useContext/Provider hook?
export const useProvider = (values) => {
    // 1. Create Object of values

    console.log("values", values)

    // 2. Create context
    const Context = createContext();
    console.log("Context", Context)

    // 3. Create Provider
    function ProviderComponent({ children }) {
        return (
            <Context.Provider values={values} >
                {children}
            </Context.Provider>
        )
    };

    // 4. Return required 
    return [Context, ProviderComponent];
};