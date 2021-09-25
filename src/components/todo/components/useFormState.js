import { useState } from 'react';

function useFormState({initialValues, onSubmit}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const validate = (values) => {
    let validationErrors = {};
    Object.keys(values).forEach(key => {
      if (!values[key]) validationErrors[key] = 'This field is required.'
    });
    return validationErrors;
  }

  const validateSingleField = (newValues, key) => {
    if (newValues[key]) {
      return({
        ...errors,
        [key]: ''
      });
    }
    return({
      ...errors,
      [key]: 'This field is required.'
    });
  }

  const handleChange = (e) => {
    let newValues = {
      ...values,
      [e.target.name]: e.target.value,
    }
    setValues(newValues);
    setErrors(validateSingleField(newValues, e.target.name));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = validate(values);
    if (Object.keys(validationErrors).length){
      setErrors(validationErrors);
      return;
    }
    onSubmit(values);
  }

  return({values, handleChange, handleSubmit, errors, setErrors, setValues});
}
export default useFormState;
