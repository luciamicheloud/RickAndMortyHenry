import './form.css';
import React from 'react';

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        email: "",
        password: "",
    })
const [errors, setErrors] = React.useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    return(
        <div className='form-container'>
            <form>

                <label>Email: </label>
                <input
                    type='text'
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                />

                <label>Pasword: </label>
                <input 
                     type='text'
                     name='password'
                     value={userData.password}
                     //onChange={handleChange}
                     />

                <button type='submit'>Enviar</button>
            </form>

        </div>
    )
}