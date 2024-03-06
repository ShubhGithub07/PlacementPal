import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-400 to-indigo-950 text-white py-16 h-[60vh]">
        <div className="container mx-auto mt-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Your Placement Journey Starts Here
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Discover opportunities, connect with employers, and pave the way to
            a successful career.
          </p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-200">
            Get Started
          </button>
        </div>
      </div>
      <div className="py-16 bg-[#001e2b]">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mb-24">
            <div className="md:5/12 lg:w-5/12">
              <img
                className=" rounded-xl"
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-white font-bold md:text-4xl">
                PlacementPal is the very best
              </h2>
              <p className="mt-6 text-[#aabdb5]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-[#aabdb5]">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mb-24">
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-white font-bold md:text-4xl">
                PlacementPal is the very best
              </h2>
              <p className="mt-6 text-[#aabdb5]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-[#aabdb5]">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
            <div className="md:5/12 lg:w-5/12">
              <img
                className=" rounded-xl"
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                className=" rounded-xl"
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-white font-bold md:text-4xl">
                PlacementPal is the very best
              </h2>
              <p className="mt-6 text-[#aabdb5]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-[#aabdb5]">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
