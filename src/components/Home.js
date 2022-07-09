import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../store/appContext';

export const Home = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getCharacters()
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{background: 'white'}}>
      <h1>{ store.name } </h1>
      { store.characters.map(character => {
          return <div key={character.id} style={{ marginTop: '3rem'}}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
            <Link to={`/character/${character.id}`}>See profile</Link>
          </div>
        })
      }
    </div>
  )
}
