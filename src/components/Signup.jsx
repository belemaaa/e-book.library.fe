import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error_message, setError_message] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            const response = await fetch('http://127.0.0.1/api/signup', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    phone_number: phone_number
                }),
            })
            if (response.status === 200){
                console.log('signup was successful')
                navigate('/')
            }
        }catch(error){
            console.error('errors: ', error)
            setError_message('An error occurred. Please try again later.')
        }
    }
  return (
    <div className='flex flex-col items-center justify-center bg-black h-screen'>
        <div>
            <p className='text-green-700 text-3xl font-bold h-16'>Signup</p>
        </div>
        <form method='POST' className='flex flex-col' onSubmit={handleSubmit}>
        {error_message && <p className='text-white text-center font-thin'>{error_message}</p>}
            <input
                type='text'
                placeholder='Username'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type='password'
                placeholder='Password'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type='email'
                placeholder='Email'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete='on'
            />
            <input
                type='phone_number'
                placeholder='Phone number'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                required
                autoComplete='on'
            />
            <div className='flex items-center justify-center'>
                <button type='submit' className='bg-white p-2 w-32 rounded-lg text-black mt-8 font-semibold hover:bg-green-700 duration-300'>Proceed</button>
            </div>
            
        </form>
    </div>
  )
}

export default Signup