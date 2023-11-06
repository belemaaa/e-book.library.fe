import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className='flex flex-col items-center justify-center bg-black h-screen'>
        <div>
            <p className='text-green-700 text-3xl font-bold h-16'>Signup</p>
        </div>
        <form method='POST' className='flex flex-col'>
            <input
                type='text'
                placeholder='Username'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type='email'
                placeholder='Email'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='phone_number'
                placeholder='Phone number'
                className='border-2 bg-black rounded-lg p-3 text-white w-[350px] md:w-[450px] mb-4'
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
            />
            <div className='flex items-center justify-center'>
                <button type='submit' className='bg-white p-2 w-32 rounded-lg text-black mt-8 font-semibold hover:bg-green-700 duration-300'>Proceed</button>
            </div>
            
        </form>
    </div>
  )
}

export default Signup