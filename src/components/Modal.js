import React, { useContext } from 'react'
import PropTypes from 'react'
import { Context } from '../store/appContext'

export const Modal = (props) => {

  const {store, actions} = useContext(Context)
  return (
    <div className='absolute'>
        {/* <button onClick={()=>setOpen(false)} className={`block text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800`} type="button">
        Toggle modal
        </button> */}
        <div className={`${ (props.open) ? ' hidden ' : ''} fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
	        id="my-modal"></div>

        <div className={`${ (props.open) ? ' hidden ' : ''} overflow-y-auto overflow-x-hidden flex fixed top-0 mx-auto z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto my-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            List of Favorites
                        </h3>
                        <button onClick={()=>props.setter(true)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>  
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <ul>
                            { store.favorites.length == 0 && <h1>No records</h1> }
                            {store.favorites.map((fav) => 
                            (<li className="w-full flex flex-row" key={fav.id}>
                                <h3 className='font-bold mx-auto'>
                                    {fav.name}
                                </h3>
                                <button onClick={ ()=> actions.removeFavorite(fav)} className='mx-auto text-red-400'>
                                    <span className='material-icons'>delete</span>
                                </button>
                             </li>
                            )
                            )}
                        </ul>
                    </div>
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button onClick={()=>props.setter()} type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Clear</button>
                        <button onClick={()=>props.setter()} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

Modal.proptype = {
    open: PropTypes.bool,
    setter: PropTypes.function,
}