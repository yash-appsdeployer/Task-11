import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getState, remove } from '../store/CartSlice'
import { getCart } from '../store/CartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart)
  const state = useSelector(getState)
  console.log(state.cart.cart)



  const handleRemove = (id) => {
    // console.log(id)
    dispatch(remove(id))
  }

  return (
    <>
      <h1 className='m-2'>Cart Items({`${cartItems.length}`})</h1>
      <div className="cart-wrapper m-4">
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-2xl uppercase w-2/3  ">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-2xl uppercase w-1/2 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 ml-12 text-2xl uppercase w-1/2 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-2xl uppercase w-1/2 text-center">Total</h3>
        </div>

        {cartItems.map((elem) => (
          <div class="container mx-auto mt-10 pr-2 pl-2 ">
            <div class="flex shadow-md my-10">
              <div class="w-3/4 bg-white px-10">
                <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div class="flex w-2/5">
                    <div class="w-20">
                      <img class="h-24" src={elem.image} alt={elem.title} />
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                      <span class="font-bold text-sm">{elem.title}</span>
                      <span class="text-green-600 text-lg uppercase">{elem.category}</span>
                      <Link to='/products' class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => handleRemove(elem.id)}>Remove</Link>
                    </div>
                  </div>
                  <div class="flex justify-center w-1/5">
                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input class="mx-2 border text-center w-8" type="text" value="1" />

                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span class="text-center w-1/5 font-semibold text-sm"></span>
                  <span class="text-center w-1/5 font-semibold text-sm">{elem.price}</span>
                </div>


                <Link  to='/products' class="flex font-semibold text-green-600 text-sm mt-6">
                  <svg class="fill-current mr-2 text-green-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                  Continue Shopping
                </Link>
              </div>

              <div id="summary" class="w-1/4 px-8 py-10 bg-green-200">
                <h1 class="font-semibold text-xl border-b ">Order Summary</h1>
                <div class="flex justify-between mt-2 ">
                </div>

                <div class="border-t ">
                  <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>{elem.price}</span>
                  </div>
                  <Link to='/products'><button class="bg-green-500 font-semibold hover:bg-green-800 py-3 text-sm text-white uppercase w-full">Checkout</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart