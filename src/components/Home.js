import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../store/appContext';
import Card from './Card.js';
import FloatingButtom from './FloatingButtom.js';
import { Modal } from './Modal';

export const Home = () => {

  const [ open, setOpen ] = useState(true)
  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getCharacters()
    // eslint-disable-next-line
  }, [])
  

  const change = () => {
    setOpen(!open)
  }

  return (
    <div style={{ background: 'white' }} className="w-full h-full flex flex-col text-center">
      <h1 className='text-3xl md:text-6xl font-bold my-4 md:my-8'>{store.name} </h1>
      <div className='flex flex-wrap '>
        {store.characters.map(char=> {return <Card key={char.id} character={char} />})}
        <div className='flex flex-row w-full'>
          <button onClick={ () => { actions.getMoreCharacters(store.info.next) }} className='btn-primary bg-amber-400 mx-auto mb-32'>Load more</button>
        </div>
      </div>
      <FloatingButtom callback={() => setOpen(false)} />
      <Modal open={open} setter={() => change()} />
    </div>
  )
}
