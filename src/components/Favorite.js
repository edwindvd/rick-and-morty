import React, { useContext} from 'react'
import { Context } from '../store/appContext';
import PropTypes from 'react'

const Favorite = (props) => {

    const { store, actions } = useContext(Context);

    const isFavorite = (id) => {
        let character = store.favorites.find( x => x.id == id)
        if(character) 
          return true
        return false
    }

    return (<>
        { props.char && <button
            onClick={ () => actions.addFavorite(props.char) }
            className={`material-icons btn-primary text-sm  
              ${
                ( isFavorite(props.char.id) )
                ? "text-teal-500 bg-white border-2 border-teal-500" : ""
              }`}
          >
            favorite
        </button>}
        </>
    )
}

Favorite.proptype = {
    char: PropTypes.object,
}

export default Favorite;