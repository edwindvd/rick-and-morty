import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "react";
import { Context } from "../store/appContext";
import Favorite from "./Favorite";

export default function Card(props) {
  const { store, actions } = useContext(Context);

  const isFavorite = (id) => {
    let character = store.favorites.find( x => x.id == id)
    if(character) 
      return true
    return false
  }

  return (
    <>
      <div
        key={props.character.id}
        className="w-full md:w-1/3 text-center my-8 p-4"
      >
        <img
          src={props.character.image}
          alt={props.character.name}
          className="rounded-3xl mx-auto"
        />
        <h2 className="text-lg my-2 font-bold">{props.character.name}</h2>
        <p className="my-2">{props.character.gender}</p>
        <div className="flex flex-row justify-center">
          <Link to={`/character/${props.character.id}`} className="btn-primary">
            Details
          </Link>
          {/* <button
            onClick={() => {
              actions.addFavorite(props.character);
            }}
            className={`material-icons btn-primary text-sm  
              ${
                ( isFavorite(props.character.id) )
                ? "text-teal-500 bg-white border-2 border-teal-500" : ""
              }`}
          >
            favorite
          </button> */}
          <Favorite char={props.character} />
        </div>
      </div>
    </>
  );
}

Card.proptype = {
  character: PropTypes.Object,
};
