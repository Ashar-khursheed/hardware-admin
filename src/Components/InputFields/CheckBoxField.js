// import { Field } from "formik";
// import React from "react";
// import { FormGroup } from "reactstrap";
// import InputWrapper from "../../Utils/HOC/InputWrapper";

// const CheckBoxField = ({ name, helpertext }) => {
//   return (
//     <FormGroup switch className="ps-0 form-switch custom-switch-flex form-check">
//       <label className="switch">
//         <Field type="checkbox" name={name}/>
//         <span className="switch-state"></span>
//       </label>
//       {helpertext && <p className="help-text">{helpertext}</p>}
//     </FormGroup>
//   );
// };

// export default InputWrapper(CheckBoxField);

import React from "react";
import { useField } from "formik";
import { FormGroup } from "reactstrap";
import InputWrapper from "../../Utils/HOC/InputWrapper";

const CheckBoxField = ({ name, helpertext }) => {
  const [field, , helpers] = useField({ name, type: 'checkbox' });

  return (
    <FormGroup switch className="ps-0 form-switch custom-switch-flex form-check">
      <label className="switch">
        <input
          type="checkbox"
          {...field}
          checked={field.value || false}
          onChange={(e) => helpers.setValue(e.target.checked)}
        />
        <span className="switch-state"></span>
      </label>
      {helpertext && <p className="help-text">{helpertext}</p>}
    </FormGroup>
  );
};

export default InputWrapper(CheckBoxField);
