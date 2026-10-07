import { useEffect, useState } from "react";

import "./Loader.css";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`loader ${show ? "" : "hide"}`}
      aria-hidden="true"
    >
      <img
        src="/images/logo.png"
        alt=""
        width="500"
        height="500"
        decoding="async"
      />
    </div>
  );
}