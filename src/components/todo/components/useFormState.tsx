import { useState } from 'react';
import { UseFormStateProps, ValidateProps } from '../../../interfaces';

type elemNames = 'id' | 'title' | 'description' | 'isCompleted';
function useFormState({ initialValues, onSubmit }: UseFormStateProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ValidateProps>({});

  const validate = (values: ValidateProps): ValidateProps => {
    let validationErrors: ValidateProps = {};
    Object.keys(values).forEach((key) => {
      if (!values[key as elemNames])
        validationErrors[
          key as elemNames
        ] = 'This field is required.';
    });
    delete validationErrors["id"];
    return validationErrors;
  };

  const validateSingleField = (newValues: ValidateProps, key: elemNames): ValidateProps => {
    if (newValues[key]) {
      return {
        ...errors,
        [key]: '',
      };
    }
    return {
      ...errors,
      [key]: 'This field is required.',
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    let newValues = {
      ...values,
    };
    if (e.target.type === "radio") {
      let inputElem: HTMLInputElement = e.target as HTMLInputElement;
      if (inputElem.checked === true) {
        newValues[e.target.name as elemNames] = e.target.value;
      }
    } else {
      newValues[e.target.name as elemNames]= e.target.value;
    }
    setValues(newValues);
    setErrors(validateSingleField(newValues, e.target.name as elemNames));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors = validate(values);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit, errors, setErrors, setValues };
}
export default useFormState;
