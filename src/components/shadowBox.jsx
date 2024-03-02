






const ShadowBox = (
    {boxWidth,
    content,   
    boxHeight, 
    shadowTop, 
    shadowLeft,
    ml,
    boxColor,
    shadowColor
}) => {  
  return (
    <>
      {/* <section className={`${boxHeight} h-20 relative bg-red-500 `}> */}
        <div className={`relative ${boxWidth} ${boxHeight} ${shadowColor} ${ml}`}>     
            <div className={`absolute bottom-3 right-3 ${boxWidth} ${boxHeight} ${boxColor} `}>
            {content}    
            </div>
        </div>
      {/* </section> */}
      
    </>
  )
}

export default ShadowBox
