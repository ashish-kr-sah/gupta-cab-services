import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1000); return () => clearTimeout(t); }, []);
  return <div className={`loader ${show ? "" : "hide"}`}><img src="/images/logo.png" alt="" /></div>;
}
