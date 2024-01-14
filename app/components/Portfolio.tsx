import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-slate-50">
      <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">
        MY Portfolio
      </h1>

      <div className="mb-8 flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        <div className="w-full lg:w-1/4">
          <Image
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={"/Kumail.jpg"}
            width={2000}
            height={100}
            alt="kumail"
          />
        </div>

        {/* image2 */}
        <div className="w-full lg:w-1/4">
          <Image
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={"/project1.jpg"}
            width={3000}
            height={100}
            alt="kumail"
          />
        </div>

        {/* image3 */}
        <div className="w-full lg:w-1/4">
          <Image
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={"/project2.jpg"}
            width={2000}
            height={100}
            alt="kumail"
          />
        </div>

        {/* image4 */}
        <div className="w-full lg:w-1/4">
          <Image
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={"/project4.jpg"}
            width={2000}
            height={100}
            alt="kumail"
          />
        </div>

        {/* image5 */}
        <div className="w-full lg:w-1/4">
          <Image
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={"/project5.jpg"}
            width={2000}
            height={100}
            alt="kumail"
          />
        </div>

        {/* image6 */}
        <div className="w-full lg:w-1/4">
          <Image
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={"/project6.jpg"}
            width={2000}
            height={100}
            alt="kumail"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
