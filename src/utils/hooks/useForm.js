import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting && isSent) {
      callback(); // Can't use callback() as dependency in this usseEffect because it's gonna cause infinite recursion
    }
  }, [errors, isSubmitting, isSent]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    setIsSent(true);
  };

  const handleChange = (event) => {
    event.persist && event.persist();
    setIsSubmitting(false);

    const newValues = { ...values, [event.target.name]: event.target.value };
    isSent && setErrors(validate(newValues));

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleReset = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    handleReset,
    values,
    errors,
  };
};

export default useForm;
