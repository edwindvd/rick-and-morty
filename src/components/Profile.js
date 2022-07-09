import React, { useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext';


export const Profile = () => {

  const { store, actions } = useContext(Context);

  let navigate = useNavigate()

  let { id } = useParams()

  useEffect(() => {
    actions.getCharacters()
    actions.getCharacterById(id)
  }, [id, actions])

  const handlerNext = () => (store.singleCharacter.id <= store.characters.length) ? navigate(`/character/${parseInt(id) + 1}`, { replace: true }) : undefined

  const handlerPrev = () => (store.singleCharacter.id > 1) ? navigate(`/character/${parseInt(id) - 1}`, { replace: true }) : undefined

  return (
    <div className='w-full h-screen flex flex-col text-center'>
      {(!store.singleCharacter) ? <h1>Cargando</h1> : ""}
      {store.singleCharacter && <>
        <div className="mx-auto my-auto">
          <img className='rounded-3xl mx-auto my-4' src={store.singleCharacter.image} alt={store.singleCharacter.type} style={{ width: '300px', height: '300px' }} />
          <h1 className='text-3xl font-bold'>{store.singleCharacter.name}</h1>
          <h2 className='font-thin'>{store.singleCharacter.status}</h2>
          <h2 className='font'>{store.singleCharacter.gender}</h2>
          <div>
            {(parseInt(id) !== 1) && <button className="btn-primary" onClick={handlerPrev}>prev</button>}
            {(parseInt(id) <= store.characters.length - 1) && <button className="btn-primary" onClick={handlerNext}>next</button>}
            <Link to="/" className="btn-primary"> volver </Link>
            <button className="btn-primary my-auto" onClick={() => navigate(-1)}>Home</button>
            <button className="btn-primary align-center material-icons text-sm">favorite
            </button>
          </div>
        </div>
      </>
      }
    </div>
  )
}
