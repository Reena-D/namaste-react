import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='p-2 m-2 font-semibold text-xl'>Contact Us Page</h1>
      <form>
        <input type="text" className='p-2 m-2 border border-black' placeholder='name'/>
        <input type="text" className='p-2 m-2 border border-black' placeholder='message'/>
        <button className='p-2 m-2 border border-black bg-gray-100 rounded-lg'>Submit</button>

      </form>
    </div>
  )
}

export default Contact
