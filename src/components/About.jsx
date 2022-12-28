import React from 'react'
import about from './about.png'

const About = () => {
  return (
    <div>
      <div className="pt-6 pb-12">
        <div id="card" className="">
          <h2 className="text-center font-serif  uppercase text-4xl xl:text-4xl">About Us</h2>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">

            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-md  mt-4 w-100 mx-2">
              <div className="h-64 w-auto md:w-1/2 mt-9">
                <img className="inset-0 h-full w-full object-center object-cover" src={about} alt='image2' />
              </div>

              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 className="font-semibold text-2xl text-bold leading-tight truncate text-purple-600">Food Saga</h3>
                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde non error ut fuga illum vitae perspiciatis? Sed explicabo, sequi, sint culpa, non expedita nulla repudiandae molestiae fugit perspiciatis rerum eius eveniet omnis! Aliquam blanditiis vero vitae maiores numquam totam hic fuga amet? Laborum, inventore quaerat. Possimus exercitationem dicta vel deserunt dolorem. Earum, blanditiis exercitationem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam accusamus recusandae vitae quasi, tenetur excepturi, distinctio nulla ducimus quae, praesentium dolorem delectus nesciunt quod officiis ea consequatur! Nisi numquam nihil esse distinctio. Dolores repudiandae ea, dolore alias corporis maxime dicta a illum quis neque sapiente laudantium eveniet ab rem amet aliquam facere? Quibusdam sunt odio voluptas quaerat enim dolor recusandae, velit natus ipsam voluptatibus? Ab nulla earum doloremque vero commodi!.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About