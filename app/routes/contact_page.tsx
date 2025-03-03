import { Link } from "react-router";
// import { useForm } from "react-hook-form";
import SubscribeUs from "~/components/SubscribeUs";
import ShopOurInsta from "~/components/ShopOurInsta";

export default function Contact() {
  return (
    <div className=" overflow-hidden">
      {/* banner image  */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center  justify-center rounded-xl "
        style={{
          backgroundImage:
            "url('https://cdn.mos.cms.futurecdn.net/e4714a7294a8a2ed365701eab02f8928.jpg')",
        }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-2 text-white ">Contact</h1>
          <p className="text-white">
            Home &gt; <span className="underline">Contact</span>{" "}
          </p>
        </div>
      </div>

      {/* form  */}
      <div className="text-black w-full">
        <div className="flex flex-col md:flex-row gap-10 mx-4 my-4 md:mx-14 md:my-14">
          {/* Left Side - Store Locations */}
          <div className="md:w-1/2 text-start flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
            <p className="text-gray-700 mb-6">
              You can also directly buy products from our stores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Store 1 */}
              <div>
                <h3 className="text-xl font-bold mb-2 underline decoration-1">
                  Office
                </h3>
                <p className="text-gray-700">
                  730 Glenstone Ave 65802, Springfield,US
                </p>
                <Link to="tel:+123 222 333 77" className="text-gray-700 block">
                  +123 222 333 77
                </Link>
                <Link to="mailto:@yourinfo.com" className="text-gray-700 block">
                  @yourinfo.com
                </Link>
              </div>
              {/* Store 2 */}
              <div>
                <h3 className="text-xl font-bold mb-2 underline decoration-1">
                  Management
                </h3>
                <p className="text-gray-700">
                  730 Glenstone Ave 65802, Springfield,US
                </p>
                <Link to="tel:+123 666 777 88" className="text-gray-700 block">
                  +123 666 777 88
                </Link>
                <Link
                  to="mailto:info@yourinfo.com"
                  className="text-gray-700 block"
                >
                  info@yourinfo.com
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 text-start bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Any Questions?</h2>
            <p className="text-gray-700 mb-5">
              Feel free to ask us anything. We’d love to hear from you!
            </p>

            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Name and Email in One Line */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  placeholder="Your full name*"
                  className="w-full md:w-1/2 p-2 border rounded-md focus:outline-black"
                />
                <input
                  type="email"
                  placeholder="Write your email here*"
                  className="w-full md:w-1/2 p-2 border rounded-md focus:outline-black"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-2 border rounded-md focus:outline-black"
              />
              <input
                type="text"
                placeholder="Write your subject here"
                className="w-full p-2 border rounded-md focus:outline-black"
              />
              <textarea
                placeholder="Write your message here*"
                className="w-full p-2 border rounded-md  focus:outline-black"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-500 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Our Stores  section */}

      <div className="my-8 mx-4 md:my-14 md:mx-14 text-black">
        <div className="px-4 md:px-0">
          {/* Centered container with padding */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
            {/* Product Image (Left Side) */}
            <div className="md:w-1/2">
              <img
                src="https://ritwikas.com/cdn/shop/files/71ajk_1eSaL.jpg?v=1690270382"
                alt="Product"
                className="w-full h-auto md:h-[65vh] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Store Information (Right Side) */}
            <div className="md:w-1/2 text-start flex flex-col justify-center mx-auto md:mt-[10vh]">
              <h2 className="text-2xl font-bold mb-4">Our Stores</h2>
              <p className="text-gray-700 mb-6">
                You can also directly buy products from our stores.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Grid for store locations */}
                <div>
                  <h3 className="text-xl font-bold mb-2 underline decoration-1">
                    USA
                  </h3>
                  <p className="text-gray-700">730 Glenstone Ave 65802, US</p>
                  <Link
                    to="tel:+123 666 777 88"
                    className="text-gray-700 block"
                  >
                    +123 666 777 88
                  </Link>
                  <Link
                    to="mailto:yourinfo@gmail.com"
                    className="text-gray-700 block"
                  >
                    yourinfo@gmail.com
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 underline decoration-1">
                    France
                  </h3>
                  <p className="text-gray-700">
                    13 Rue Montmartre 75001,
                    <br /> Paris, France
                  </p>
                  <Link
                    to="tel:+123 222 333 44"
                    className="text-gray-700 block"
                  >
                    +123 222 333 44
                  </Link>
                  <Link
                    to="mailto:yourinfo@gmail.com"
                    className="text-gray-700 block"
                  >
                    yourinfo@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe us Now */}
      <SubscribeUs />
      <ShopOurInsta />

      {/* map  */}

      <div className="w-full h-[50vh] px-14 mt-14 flex justify-center items-center relative mb-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7221852.767402766!2d72.49649714241713!3d27.892910074239207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39037aaf0bd7c733%3A0x540b12c1cbabba63!2sPost%20Office%2C%20Keylong!5e0!3m2!1sen!2sin!4v1714805665113!5m2!1sen!2sin"
          width="800"
          height="600"
          className="w-full h-full items-center"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
