import React, { useEffect, useState } from "react";

function useHover(ref) {
  const [isHovering, setHovering] = useState(false);
  const on = () => setHovering(true);
  const off = () => setHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener("mouseenter", on);
    node.removeEventListener("mousemove", on);
    node.addEventListener("mouseleave", off);
    return () => {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mousemove", on);
      node.removeEventListener("mouseleave", off);
    };
  }, []);
  return isHovering;
}
export default useHover;
