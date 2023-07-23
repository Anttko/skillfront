import { useState, ChangeEvent } from "react";

type UseFieldType = {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export const useField = (type: string): UseFieldType => {
  const [value, setValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const reset = (): void => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};
