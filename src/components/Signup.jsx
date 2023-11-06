import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState('')
  return (
    <div className='items-center justify-center flex flex-col'>
        <div>
            <p>Signup</p>
        </div>
        <form method='POST'>
            <input
                type='text'
                placeholder='username'
                className=''
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Signup