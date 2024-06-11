import { useEffect } from "react";
import { useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);

  const mountedRef = useRef(false);

  useEffect(() => {
    inputRef?.current.focus();

    if (!mountedRef.current) {
      mountedRef.current = true
      console.log("Text Prop is mounted");
    }
  });

  return (
    <>
      <input type="text" ref={inputRef} />
      <p>Test Mounted prop</p>
    </>
  );
}
