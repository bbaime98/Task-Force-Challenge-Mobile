import React from "react";
import { useFormikContext } from "formik";

import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name,label, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
     <AppText>{label}</AppText>
     <ErrorMessage error={errors[name]} visible={touched[name]} />
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
    </>
  );
}

export default AppFormField;
