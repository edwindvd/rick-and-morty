import React from 'react'
import PropTypes from 'react'

const FloatingButtom = (props) => {
  return (
    <button onClick={ () => props.callback() } className="bg-amber-500 rounded-full flex w-12 h-12 text-center m-4 fixed bottom-0 right-0"> 
          <div className='flex flex-col w-full h-full text-white'>
            <span className="material-icons my-auto">
              favorite
            </span>
          </div>
    </button>
  )
}

FloatingButtom.proptype = {
    callback: PropTypes.function,
}

export default FloatingButtom;