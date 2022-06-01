import React, { useEffect } from "react";
// Hooks pour localStorage

// 1. setItem
export const useSetItem = (name, value) => {
    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(value))
    }, [value])
};

// 2. getItem
export const useGetItem = (name) => {
    return JSON.parse(localStorage.getItem(name))
};

// 3. useLocalStorage et useState
export const useLocalStorage = () => { };


function useLSAll(object) {

};
