import React, { useEffect, useRef, useState } from "react";

export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
    //console.log(ref.current);
  });
  return ref.current;
}
