import React from 'react'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
export const MediaQuerys = (query) => {
    const [matches, setMatches] = useState(null);
    const mediaScreen = useMediaQuery({ query });
    useEffect(() => {
      mediaScreen ? setMatches(true) : setMatches(false);
    }, [mediaScreen]);
    return matches;
}
