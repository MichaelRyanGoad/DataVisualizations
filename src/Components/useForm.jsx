import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      if (
        (e.target.name === "stepDelay" && e.target.value < 0) ||
        e.target.value === ""
      ) {
        e.target.value = 0;
      }
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
