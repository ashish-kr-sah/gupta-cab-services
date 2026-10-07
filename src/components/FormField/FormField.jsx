export default function FormField({
  label,
  full,
  children,
}) {
  const inputId =
    children?.props?.name
      ? `field-${children.props.name}`
      : undefined;

  return (
    <div className={full ? "full" : ""}>
      <label htmlFor={inputId}>
        {label}
      </label>

      {children?.type
        ? {
            ...children,
            props: {
              ...children.props,
              id: children.props.id || inputId,
            },
          }
        : children}
    </div>
  );
}