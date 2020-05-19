import { useState, useEffect } from 'react';

function useValidation(validation = false, callback, ...names) {
  const [values, setValues] = useState(Object.assign(...names.map((name) => ({ [name]: '' }))));
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange({ target }) {
    const { name, value, type, checked } = target;

    setValues((oldValue) => {
      const newValue = type === 'checkbox' ? { [name]: checked } : { [name]: value };

      return { ...oldValue, ...newValue };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    validationForm();
    setIsSubmitting(true);
  }

  function validationForm() {
    setErrors(validation instanceof Object ? validation(values) : {});
  }

  function validationField({ target }) {
    const { name } = target;

    const errorField = validation(values)[name];

    setErrors((oldErrors) => ({ ...oldErrors, [name]: errorField }));
  }

  function sendFormIsValid() {
    if (Object.values(errors).filter((error) => error).length === 0 && isSubmitting) {
      callback(values);
    }
  }

  useEffect(sendFormIsValid, [errors]);

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    errors,
    setErrors,
    validationForm,
    validationField,
  };
}

export default useValidation;
