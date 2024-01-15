import React from "react";

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <h1 className="font-semibold text-4xl mt-16 ml-12 lg:mt-16 mb-8 lg:mb-7">
        Work History
      </h1>
      <div className="bg-slate-100 p-5 rounded-md mt-2 lg:ml-12 sm:ml-12">
        <h1 className="text-3xl font-normal">Lead Web Desiner</h1>
        <p>
          Greetings! I am kumail , your go-to Lead Web Designer, and this is
          where digital dreams come to life. With a passion for aesthetics and a
          flair for innovation, I specialize in crafting visually stunning and
          highly functional web experiences that leave a lasting impression.{" "}
          <br />
          <span className="font-semibold">
            {" "}
            Discover My Design Palette:
          </span>{" "}
          <br /> Below, you will catch a glimpse of my recent design escapades.
          Each project is a testament to my commitment to elevating the online
          presence of brands and individuals alike.
        </p>{" "}
        <br />
        <h1 className="text-3xl font-normal">Junior Web Desiner</h1>
        <p>
          Welcome to kumail is Design Corner! Hey there! I am kumail a budding
          Junior Web Designer passionate about turning ideas into visually
          appealing digital realities. This is my space, where creativity meets
          code, and I am excited to share my journey with you. Below, you will
          find a sneak peek into some of my recent design adventures. From
          concept to creation, each project reflects my dedication to learning,
          growing, and bringing a fresh perspective to the digital landscape
        </p>
      </div>
    </div>
  );
};

export default Experience;
