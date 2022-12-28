import React from 'react'
import { Link } from 'react-router-dom'
import Shop from './shop.png'

const Home = () => {
  return (
    <div>
      <div className="container flex flex-row mt-9">
        <div className="basis-1/2 p-5 mt-9">
          <span className='text-green-600 text-3xl font-bold ml-20'>Welcome to Zap Store</span>
          <br />
          <p className='text-xl text-ellipsis overflow-hidden p-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eaque at consequuntur quia, dicta nostrum tempora quam delectus repudiandae qui, pariatur repellendus ad, accusamus ipsam? Dolorum placeat fugiat eum, quod, voluptatum aliquam labore iusto Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quos dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, qui?.
          </p>

          <Link to="/products">
            <button className="m-2 px-3 py-2 bg-gray-800 text-white text-sm font-bold uppercase rounded hover:bg-green-500 ml-4 ">Shop Now</button>
          </Link>
        </div>
        <div className="basis-1/2">
          <img className=" ml-9 w-8/12 aspect-square" src={Shop} alt='' /></div>
      </div>

      <hr className='mt-2' />
      <div className="columns-4 mt-20 features ml-12">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img className='w-28' src="https://banner.uclipart.com/20200112/wsb/delivery-text-technology.png" alt='shipping' />
          <p>Free Shipping</p>
          <b className='text-green-600'>For all order over Rs.500</b>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img className='w-28' src="https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Payment_card_credit_pay_cash.png" alt='money' />
          <p>Money Back Guarantee</p>
          <b className='text-green-600'>Within 24 hours</b>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img className='w-28' src="https://banner.uclipart.com/20200112/wsb/delivery-text-technology.png" alt='secure' />
          <p>Online Support 24/7</p>
          <b className='text-green-600'>Dedicated Support</b>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img className='w-28' src="https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Payment_card_credit_pay_cash.png" alt='payments' />
          <p>Payment Secure</p>
          <b className='text-green-600'>100% secure payment</b>
        </div>
      </div>
    </div>
  )
}

export default Home