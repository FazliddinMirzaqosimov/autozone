import { useState } from "react";

function useDebouncer() {
  const [timer, setTimer] = useState();

  const debouncer = (func, waitTime) => {
    clearTimeout(timer);
    const newTimeOut = setTimeout(func, waitTime);
    setTimer(newTimeOut);
  };

  return debouncer;
}

export default useDebouncer;
