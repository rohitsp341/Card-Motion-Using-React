import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import { motion } from "framer-motion"


const Card = ({data, reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} dragTransition={{bounceStiffness:100,bounceDamping:30}} className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-200/60 p-5 overflow-hidden m-4">
        <FaRegFileAlt/>
        <p className="text-[18] mt-5 font-semibold leading-tight">{data.desc}</p>
            <div className="footer absolute bottom-0  w-full  left-0">
                <div className="flex items-center justify-between mb-4 px-8">
                    <h5>{data.fileSize}</h5>
                    <span className="w-6 h-6 bg-sky-200 rounded-full flex items-center justify-center p-1">
                        {data.close ? <IoClose/> : <RiDownload2Fill size="8em" />}

                    </span>
                    

                </div> 
                {
                        data.tag.isOpen &&(
                            <div className={`w-full h-10 p-2 py-6 flex items-center justify-center text-[18px] ${data.tag.tagCoolor === "red" ? "bg-red-600" : "bg-green-600"} flex items-center justify-center`}>
                                <p className="text-white">{data.tag.TagTitle}</p>
                            </div> 
                        ) 
                    }
                
            </div>
        </motion.div>

        
    </>
  )
}

export default Card
