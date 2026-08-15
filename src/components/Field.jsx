import { Children, cloneElement, isValidElement } from "react";

export default function Field({ label, htmlFor, error, children }) {
  const errorId = `${htmlFor}-error`;

  // Wires aria-describedby to the error message automatically so every
  // form doesn't have to repeat it on every input — the alternative is
  // silently forgetting it, which is what happened before this existed.
  const child = Children.only(children);
  const input = isValidElement(child)
    ? cloneElement(child, { "aria-describedby": error ? errorId : undefined })
    : child;

  return (
    <div className="field">
      <label htmlFor={htmlFor}>{label}</label>
      {input}
      {error && (
        <p className="field-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}
