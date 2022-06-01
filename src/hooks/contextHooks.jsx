import React, { useState, useEffect, useConext, useContext } from "react";

// useCheckContext 

// 
export const useCheckContext = (initcontext) => {
    const context = useContext(initcontext);
    if (!context) throw new Error('useCheckContext must be used within correct Provider Context')
    return context
};