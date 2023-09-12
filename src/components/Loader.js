'use client';

import { useState, useEffect } from 'react';

export const useLoader = (delayMs = 2000) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false)
        }, delayMs);

        return () => {
            clearTimeout(timeout)
        };

    }, [delayMs]);

    return loading;
};