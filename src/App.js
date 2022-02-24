import React from "react";
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!ValidateEmail(values.emailField))
      errors.emailError = 'Username should be an email';
      if(!values.emailField) 
      {
      errors.emailError = 'Field required'
      };
      if(!values.pswField) 
      {
      errors.pswError = 'Field required'
      };
      return errors;
    }
  });

  return (
    <div>
     <form onSubmit={formik.handleSubmit}>
         <div>Email</div>
         <input id="emailField" type="text" onChange={formik.handleChange}
       value={formik.values.emailField}/>
       {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div>: null}
           <div>Password</div>
           <input id="pswField" type="text" onChange={formik.handleChange}
       value={formik.values.pswField}/>
       {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div>: null}
             <button id="submitBtn" type="submit">Submit</button>
    </form> 
    </div>
  );
}

// https://www.w3resource.com/javascript/form/email-validation.php
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)}

    return (false)
}

export default App;
