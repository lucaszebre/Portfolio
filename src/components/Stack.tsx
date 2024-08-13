import React from 'react'

const Stack = (props:{name?:string}) => {
  return (
    <div className="   flex flex-col justify-center md:ml-[2rem] ml-4 lg:ml-[4rem]">
    
 {props.name && <h5 className=" lg:text-4xl md:text-2xl font-bold tracking-tight text-center  text-white">{props.name}</h5> }

</div> 
  )
}

export default Stack
