import React from 'react'

const Seperator = ({margin}) => {
  return (
    <div className={margin==false?'bg-secondaryGreen h-3 w-full':'mt-20 bg-secondaryGreen h-3 w-full'}></div>
  )
}

export default Seperator