import "./App.css";
import Nav from "./Nav";
import { useState,useContext } from "react";
import { Form, Field , Formik } from "formik";
import * as Yup from "yup";
import Dataget from "./Dataget";
import { Context } from "./Component/Context";

function Home(){
  
  let {user,setUser} =useContext(Context);
    const initialValues ={
        name :"",
        email:"",
        password:"",
        confirmpassword:"",
    }
    const validationSchema= Yup.object({
        name: Yup.string().min(4, 'At least 4 characters').max(10, 'Max!').required('Required!'),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmpassword: Yup.string().required().oneOf([Yup.ref('password')],'Passwords must match'),
    });
    const handleSubmit = (values)=>{
      setUser(values);
        console.log("==",user);
    }
  return (
    <>
      <Nav />
      <div className="row mt-5">
        <div className="col-lg-7 mb-5 fom">
          <h1>welcome to my form</h1>
          <p>Enter your details</p>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ errors, touched, isValidating }) => (
              <Form>
                <div className="input-block mt-5">
                  <label htmlFor="name" className="input-label">
                    Name:
                  </label>
                  <Field 
                   name="name"
                    placeholder="Name"
                  />
                  {errors.name && touched.name && <div className="error mt-3">{errors.name}</div>}
                </div>
                <div className="input-block mt-4">
                  <label htmlFor="email" className="input-label">
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email && <div className="error mt-3">{errors.email}</div>}
                </div>
                <div className="input-block mt-4">
                  <label htmlFor="password" className="input-label">
                    Password :
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password && <div className="error mt-3">{errors.password}</div>}
                </div>
                <div className="input-block mt-4">
                  <label htmlFor="confpassword" className="input-label">
                    Conform-password :
                  </label>
                  <Field
                    type="password"
                    name="confirmpassword"
                    placeholder="confirm-password"
                  />
                  {errors.confirmpassword && touched.confirmpassword && <div className="error mt-3">{errors.confirmpassword}</div>}
                </div>  
                <button type="submit" className="btn btn-primary btn-block mb-3">
                  Submit
                </button>
              </Form>
            )}
            </Formik>
        </div>
         {
             <Dataget data={user} />
         }
      </div>
    </>
  );
}
export default Home;
