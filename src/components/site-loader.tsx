import { useEffect, useState } from "react";
import { SiteLogo } from "./site-logo";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    const finish = () => {
      const remaining = Math.max(0, 520 - (performance.now() - startedAt));
      window.setTimeout(() => setVisible(false), remaining);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const fallback = window.setTimeout(() => setVisible(false), 1800);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="site-loader" role="status" aria-label="Loading Rotimi Ogundele website">
      <SiteLogo className="site-loader-logo" />
      <span className="site-loader-line" aria-hidden="true" />
    </div>
  );
}
