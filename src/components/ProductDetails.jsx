import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getState, remove } from '../store/CartSlice'
import { getCart } from '../store/CartSlice'
import { Link, useParams } from 'react-router-dom'


const ProductDetails = () => {

  const { productID } = useParams;
  const [productsDetail, setProductsDetail] = useState([""])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/:${productID}`);
      const data = await response.json();
      console.log("data Aaaya", JSON.parse(data))
      setProductsDetail(data)
    };
    fetchProducts()
  }, [productID])

  const cartItems = useSelector(getCart)
  const state = useSelector(getState)

  return (
    <div>
      <div className='mt-10 text-center text-3xl text-green-600 italic'>
        <h2> Product Details </h2>
      </div>


      {productsDetail.map(({ id, title, price, category, description, image }) => (
        <div>
          <div className="max-w-sm w-full lg:max-w-full lg:flex p-9">
            <div className="lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-5 text-center overflow-hidden">
              <img src={image} alt={title} />
            </div>

            <div className="border-r border-b  border-gray-800 bg-green-100 shadow-lg  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
              <div className="mb-4">
                <div className="text-gray-900 font-bold text-3xl mb-2 mt-4">{title}</div>
                <p className="text-gray-800 text-base italic ">{description}</p>
              </div>

              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none text-xl text-start">Price</p>
                  <h1 className="text-gray-700 font-bold text-2xl">₹{price}/-</h1>
                </div>
              </div>

              <div className="flex items-center mt-6">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none text-xl text-start">Category</p>
                  <h1 className="text-gray-700 font-bold text-2xl">{category}</h1>
                </div>
              </div>

              <div className="flex item-center justify-end mt-3">
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded mr-5 hover:bg-green-500" >Add to Card</button>
                <Link to="/products"> <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-green-500">Go Back</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* {cartItems.map((elem) => (
        <div className="max-w-sm w-full lg:max-w-full lg:flex p-9">
          <div className="lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-5 text-center overflow-hidden">
            <img src={elem.image} alt={elem.title} />
          </div>

          <div className="border-r border-b  border-gray-800 bg-green-100 shadow-lg  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
            <div className="mb-4">
              <div className="text-gray-900 font-bold text-3xl mb-2 mt-4">{elem.title}</div>
              <p className="text-gray-800 text-base italic ">{elem.description}</p>
            </div>

            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xl text-start">Price</p>
                <h1 className="text-gray-700 font-bold text-2xl">₹{elem.price}/-</h1>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xl text-start">Category</p>
                <h1 className="text-gray-700 font-bold text-2xl">{elem.category}</h1>
              </div>
            </div>

            <div className="flex item-center justify-end mt-3">
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded mr-5 hover:bg-green-500" >Add to Card</button>
              <Link to="/product"> <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-green-500">Go Back</button></Link>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default ProductDetails