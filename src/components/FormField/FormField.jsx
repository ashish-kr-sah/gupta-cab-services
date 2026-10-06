export default function FormField({ label, full, children }) {
  return <div className={full ? "full" : ""}><label>{label}</label>{children}</div>;
}
