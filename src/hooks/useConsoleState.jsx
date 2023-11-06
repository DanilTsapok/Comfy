import React, { useEffect, useState } from "react";

export default function useConsoleState(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log(value);
  }, [value]);
  return [value, setValue];
}
