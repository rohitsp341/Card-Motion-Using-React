import React ,{useState,useRef} from 'react'
import Card from './components/Card'

const Forground = () => {
  const ref=useRef(null);
const data=[

  {
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sint nostrum dicta, quaerat, numquam, impedit ipsa deleniti amet porro incidunt sed dolor.",
    fileSize:".9Mb",
    close:false,
    tag:{
      isOpen:true,TagTitle:"Download Now" , tagCoolor:"green" }
  },

  {
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sint nostrum dicta, quaerat, numquam, impedit ipsa deleniti amet porro incidunt sed dolor.",
    fileSize:".8Mb",
    close:true,
    tag:{
      isOpen:false,TagTitle:"Download Now" , tagCoolor:"green" }
  },
  {
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sint nostrum dicta, quaerat, numquam, impedit ipsa deleniti amet porro incidunt sed dolor.",
    fileSize:".8Mb",
    close:true,
    tag:{
      isOpen:true,TagTitle:"Delete" , tagCoolor:"red" }
  }

]

  return (
    <>
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex flex-wrap gap-8 p-5">
        {
          data.map((item,index)=>(
            <Card data={item} reference={ref}/>

          ))
        }
          
        </div>



    
    </>
  )
}

export default Forground
