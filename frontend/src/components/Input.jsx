import React from 'react'

const Input = ({...props}) => {
  console.log(props)
  return (
    <div>
    <input className='test' type="text" {...props} />
    </div>
  )
}

export default Input
