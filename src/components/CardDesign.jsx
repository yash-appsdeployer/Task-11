import React from "react";
import './Components.css'
import { add } from '../store/CartSlice';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ id, title, price, category, description, image }) => {
  const dispatch = useDispatch()

  const handleAdd = ({ id, title, price, category, description, image }) => {
    const product = { id, title, price, category, description, image }
    dispatch(add(product))
  }
  return (
    <div>
        <div className="py-4 flex flex-wrap place-items-center flex-col text-center ">
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden  hover:bg-green-200">
            <div className="p-2  bg-cover" >
              <img className='rounded-lg ' src={image} alt={title} srcset="" />
            </div>
            <div className="w-2/3 p-2">
              <h1 className="text-gray-900 font-bold text-lg">{title}</h1>
              <p className="mt-2 text-gray-600 text-sm text-center italic uppercase">{category}</p>
              <div className="flex item-center justify-start mt-4">
                <h1 className="text-gray-700 font-bold text-start text-lg mr-6">₹{price}</h1>
                  <button className="m-1 px-3 py-2 bg-gray-800 text-white text-sm font-bold uppercase rounded hover:bg-green-500" onClick={() => handleAdd({ id, title, price, category, description, image })}>Add</button>
                <Link to=" ">
                  <p title="Add to Favorites" className="text-2xl text-gray-700 hover:text-red-500 duration-300">&hearts; </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card;
