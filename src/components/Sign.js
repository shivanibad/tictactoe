import React from 'react';
 import { Formik } from 'formik';
 
 const Basic = () => (
   <div>
    
     <Formik
       initialValues={{ name1: '', name2: '' }}
       validate={values => {
         const errors = {};
         if (!values.name1) {
           errors.name1 = 'Required';
         } 
         return errors;
       }}
      
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name1"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name1}
           />
           {errors.name1 && touched.name1 && errors.name1}
           <input
             type="text"
             name="name2"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name2}
           />
           {errors.name2 && touched.name2 && errors.name2}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;
