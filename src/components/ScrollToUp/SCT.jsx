import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(search)
    const scrollTo = urlParams.get("scrollTo")

    if (!scrollTo) {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0);
    }
  }, [pathname, search])

  return null
}

export default ScrollToTop