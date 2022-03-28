import { useState } from "react";

function useInput(initilaValue = "") {
  const [value, setValue] = useState(initilaValue);
  const reset = () => {
    setValue(initilaValue);
  };
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, bind, reset];
}

export default useInput;
