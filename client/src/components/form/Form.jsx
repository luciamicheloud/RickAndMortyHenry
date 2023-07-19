import './form.css';
import React, { useEffect, useState } from 'react';
import validation from '../../funtions/validation';
export default function Form(props) {
    const [userData, setUserData] = React.useState({
        email: "",
        password: "",
    })
const [errors, setErrors] = React.useState({});

    const onSubmit = event => {
        event.preventDefault()
        props.login(userData)

}
    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }



    return(
        <div className='form-container'>
            <form onSubmit={onSubmit}>

                <label>Email: </label>
                <input
                    type='text'
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                />
                {(errors.email) && <p>{errors.email}</p>}

                <label>Pasword: </label>
                <input 
                     type='text'
                     name='password'
                     value={userData.password}
                     onChange={handleChange}
                     />
                    {(errors.password) && <p>{errors.password}</p>}

                <button type='submit'>Enviar</button>
            </form>

        </div>
    )
}