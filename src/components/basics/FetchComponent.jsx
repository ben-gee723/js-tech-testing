import React, { useState, useEffect } from "react";
import { useFetchAPI, useFetchAsyncApi } from "../../hooks/basicHooks";

// fetch
// Version 1 
// fetch().then().then()

// Version 2
// async await

// Component zum Fetchen
const FetchComponent = () => {
    // const [name, setName] = useFetchAPI()

    const [characters, setCharacters] = useFetchAsyncApi("https://rickandmortyapi.com/api/character")

    console.log(characters)

    return (
        <>
            <h1>Hello Sven, FetchComponent</h1>
        </>
    )
}

export default FetchComponent;