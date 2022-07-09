import React, { useEffect, useContext } from 'react'

import { Context } from '../store/appContext';
import Card from './Card.js';

export const Home = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getCharacters()
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{ background: 'white' }} className="w-full h-full flex flex-col text-center">
      <h1 className='text-6xl my-8'>{store.name} </h1>
      <div className='flex flex-wrap '>

        {store.characters.map(character => {
          return <Card key={character.id} character={character} />
        })
        }
      </div>
    </div>
  )
}
