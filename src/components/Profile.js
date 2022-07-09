import React, { useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext';


export const Profile = () => {

  const { store, actions } = useContext(Context);

  let navigate = useNavigate()
  
  let { id } = useParams()

  useEffect(()=>{
    actions.getCharacters()
    actions.getCharacterById(id)
  },[id, actions])

const handlerNext = () => (store.singleCharacter.id <= store.characters.length) ? navigate(`/character/${ parseInt(id)+1}`, {replace: true}) : undefined

const handlerPrev = () => (store.singleCharacter.id > 1) ? navigate(`/character/${ parseInt(id)-1}`, {replace: true}) : undefined

  return (
    <div style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignContent: 'center', height: '100vh'}}>
      {(!store.singleCharacter) ?  <h1>Cargando</h1> : ""}
      { store.singleCharacter && <>
        <div style={{ width: '100%' }}>
          <img src={store.singleCharacter.image} alt={store.singleCharacter.type} style={{ width: '300px', height: '300px', borderRadius: '30px' }}/>
        <h1>{store.singleCharacter.name }</h1>
        <h2>{store.singleCharacter.status}</h2>
          <div>
            <button onClick={handlerPrev}>prev</button>
            <button onClick={handlerNext}>next</button>
            <Link to="/"> volver </Link>
            <button onClick={()=> navigate(-1)}>Home</button>
          </div>
        </div>
      </>}
    </div>
  )
}
