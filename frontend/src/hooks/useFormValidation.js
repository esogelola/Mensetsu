import React from "react";

function useFormValidation(initialState, validate, action) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        action();
        setValues(initialState);
        setSubmitting(false);
      } else {
        // Toast here
        // toast(Object.values(errors).join(" "));
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }
  return {
    handleSubmit,
    handleChange,
    values,
    setValues,
    isSubmitting,
  };
}

export default useFormValidation;
