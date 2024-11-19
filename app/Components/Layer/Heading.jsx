import React from 'react'
import { GoDash } from 'react-icons/go'

const Heading = ({ text, className }) => {
  return (
    <div>
      <h3 className={`bg-[#2CB0E1] text-nowrap text-sm md:text-lg lg:text-xl max-w-fit p-2 text-white font-bold flex items-center gap-2 ${className}`}>
        <GoDash className="text-white" />
        {text} <GoDash className="text-white" />
      </h3>
    </div>
  )
}

export default Heading;
