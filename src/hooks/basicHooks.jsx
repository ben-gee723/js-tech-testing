import React, { useState, useEffect, createContext } from "react";
// Un hook commence avec le mot "use"

// complet - useCL --> use console.log()
export const useCL = (item) => {
    useEffect(() => {
        console.log(`${item}`, item)
    }, [item])
}

// - use fetch.then api
export const useFetchAPI = (url, initialState = null) => {
    const [state, setState] = useState(initialState);

    fetch(url)
        .then(response => response.json())
        .then(data => setState(data))
        .catch(err => console.log(err));

    return [state, setState];
};

// complet - use fetch async api
export const useFetchAsyncApi = (url, initialState = null) => {
    const [state, setState] = useState(initialState);
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json()
        setState(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return [state, setState];
};

// function incomplete
export const useFetchDB = (url, method, body) => {
    return fetch(url, {
        method: `${method}`,
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .catch(err => console.log(err));
};

