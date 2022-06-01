import { useState, useEffect } from 'react'
import { Loader } from '../components/loaders/Loader';
// 

export function useSimpleLoader(loader, timeout = 2500) {
    // 1. react-loader-spinner
    const [isLoading, setIsLoading] = useState(true);

    // 2. Timeout
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            setLoading(false)
        }, timeout)
    })

    const Loader = <></>

    return [isLoading, setIsLoading, Loader]
}