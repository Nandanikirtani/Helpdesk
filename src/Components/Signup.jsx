import React from 'react'

const Signup = () => {
  return (
    <div className='h-screen w-full bg-[#55D6C2] flex items-center justify-center'>
      <div className='bg-[#EFEDED80] p-8 rounded shadow-md text-center'>
        <h2 className='text-4xl font-bold text-black h-xl w-2xl mb-12'>Helpdesk System</h2>
        <h4 className='text-lg'>Sign Up here</h4>
        <form className=" flex flex-col w-96 mx-auto space-y-4 mt-4" action="">
          <input className='bg-white p-2 border border-black' type="text" placeholder='Username' />
          <input className='bg-white p-2 border border-black' type="password" placeholder='Password' />
           <input className='bg-white p-2 border border-black' type="email" placeholder='Email' />
          <button className='bg-[#296EF2] text-white rounded-xl w-40 mx-auto mt-4 py-3'>Sign up</button>
        </form>
        <div className='flex justify-between mt-10 w-96 mx-auto'>
          <button className='text-[#EA0000] cursor-pointer'>Forgot Password?</button>
          <button className='cursor-pointer'>Sign Up</button>
        </div>
        </div>
        
      </div>
  )
}

export default Signup
