import { useState, useEffect } from 'react'

const useMediaQuery = ({ minOrMax, widthOrHeight, value }) => {

  if (!minOrMax) minOrMax = 'min';
  if (!widthOrHeight) widthOrHeight = 'width';

  const [matches, setMatches] = useState(
    window.matchMedia(`(${minOrMax}-${widthOrHeight}: ${value}px)`).matches
  )

  useEffect(() => {
    window
      .matchMedia(`(${minOrMax}-${widthOrHeight}: ${value}px)`)
      .addEventListener('change', e => setMatches(e.matches));
  }, [minOrMax, widthOrHeight, value]);

  return { matches }

}

export default useMediaQuery