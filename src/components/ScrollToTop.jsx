import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on route change. Without this, React Router keeps the
 * previous page's scroll offset, so clicking a team member near the bottom of
 * Home lands you at the bottom of the (shorter) profile page.
 *
 * If the URL carries a `#hash`, we scroll that element into view instead of
 * jumping to the top, so in-page anchors like `/#equipo` still work.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
