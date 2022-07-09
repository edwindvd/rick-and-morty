import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'react'

export default function Card(props) {

  const [isFavorite, setFavorite] = useState(false)

  return (
    <>
        <div key={props.character.id} className="w-full md:w-1/3 text-center my-8 p-4">
            <img src={props.character.image} alt={props.character.name} className="rounded-3xl mx-auto" />
            <h2 className="text-md">{props.character.name}</h2>
            <p className='my-2'>{props.character.gender}</p>
            <div className='flex flex-row justify-center'>
              <Link to={`/character/${props.character.id}`} className="btn-primary">Details</Link>
              <button onClick={()=> setFavorite(true)}
                className={`material-icons btn-primary text-sm  
                ${(isFavorite) ? 'text-teal-500 bg-white border-2 border-teal-500' : '' }`
                }
                >favorite
              </button>
            </div>
        </div>
    </>
  )
}

Card.proptype = {
    character: PropTypes.Object,
}