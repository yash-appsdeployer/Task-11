import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCart } from '../store/CartSlice'

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.cart)
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4">
        <div className="flex items-center flex-shrink-0 text-white ">
          <i className="font-bold text-2xl tracking-tight hover:text-green-400">Zap Store</i>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow ml-9">
            <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-green-400 mr-4">
              Home
            </Link>
            <Link to='/products' className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-green-400 mr-4">
              Shop
            </Link>
            <Link to='/about' className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-green-400 mr-4">
              About
            </Link>
          </div>
          <div>
            <Link to="/cart" className="inline-block px-4 py-2 "> <i className="fa-solid fa-cart-shopping text-2xl text-white hover:text-green-400">({cartItems.length})</i></Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;

