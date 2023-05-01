import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app);


const Register = () => {

    const [regError , setRegError] = useState('')
    const [regSuccess , setRegSuccess] = useState('')

    const handleSubmit = (event) => {
        const email = event.target.email.value;
        console.log(email)
        const password = event.target.password.value;
        console.log(password)
        event.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setRegError('')
            setRegSuccess('login successfully')
        })
        .catch(error => {
            console.log(error)
            console.log(error.massage)
            const errorMassage = error.code;
            setRegError(errorMassage)
            setRegSuccess('')
        })


    }


    return (
        
        <div className="w-50 mx-auto border p-5 mt-5 rounded ">
            <h3 className='mb-5'>This is register page</h3>

            <form onSubmit={handleSubmit}>
                <input className='mb-4 rounded w-50' type="email" name='email' placeholder='Enter your email' required />
                <br />
                <input className='mb-4 rounded w-50' type="password" name="password" placeholder='Enter your password' id="" required/>
                <br />

                <input className='btn btn-primary' type="submit" value="submit" />
            </form>
            <p className='text-danger'>{regError}</p>
            <p className='text-success'>{regSuccess}</p>
        </div>
    );
};

export default Register;