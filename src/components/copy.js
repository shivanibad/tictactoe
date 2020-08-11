import React, { Component } from 'react';
import Game from './Game';
import './Login.css';
import { Formik } from 'formik';

class Copy extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            value:'',
            isHidden:false
        };
        this.ocli =this.ocli.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ocli(){
   
      this.setState({
            showComponent: true,
            isHidden:true
          });
        }
        handleChange(event) {
          this.setState({showComponent: false});
          
          
        }
        
  render () {

    return (   
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
            {this.state.isHidden?null:
            <button type="submit" disabled={isSubmitting} onClick= {this.ocli} onChange={this.handleChange}>
              Submit
            </button> } {this.state.showComponent?<Game></Game>:null} 
          </form>
        )}
      </Formik>
  










        
        
        
        
          
        
        </div>
       
       
           );
  }
}

export default Copy;
