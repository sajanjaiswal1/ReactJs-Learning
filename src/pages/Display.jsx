import React from 'react'


// const Display = (props) => {
//  let {name, address} = props



const Display = ({name='Name not available', address='Address not available'}) => {



// const Display = ({name,address}) => {
    

// const Display = (props) => {
//     let name= props.name
//     let address = props.address


  
  return (
    <div className='flex flex-col m-5 p-6 rounded-xl border-blue-600 border-solid border-2'>
        <h1>Name: {name}</h1>
        <h1>Address: {address}</h1>
    </div>
  )
}

export default Display