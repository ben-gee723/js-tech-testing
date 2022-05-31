import { useState, useEffect } from 'react'
import { Loader } from '../components/loaders/Loader';
// 

export function useSimpleLoader(picture, timeout) {
    // 1. react-loader-spinner
    const [isLoading, setIsLoading] = useState(true);

    // 2. Timeout
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            setLoading(false)
        }, 2500)
    })

    const Loader = <></>

    return [isLoading, setIsLoading, Loader]
}