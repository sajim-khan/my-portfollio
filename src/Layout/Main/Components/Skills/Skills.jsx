import html from "../../../../assets/html.png";
import css from "../../../../assets/css.png";
import bs from "../../../../assets/bootstrap.png";
import tw from "../../../../assets/tailwind.png";
import js from "../../../../assets/js.png";
import react from "../../../../assets/react.png";
import node from "../../../../assets/node.png";
import express from "../../../../assets/express.png";
import mongodb from "../../../../assets/mongodb.png";

const Skills = () => {
  return (
    <div className="bg-[#162946]" id="skill">
      <h1 className="text-center text-4xl font-bold text-cyan-400 pt-5 pb-5">
        My Skills
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-16 py-10 ps-16 ">
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 flex flex-col items-center">
          <img className="w-28 h-24 mt-2" src={html} alt="" />
          <p className="text-2xl mt-2 text-white">HTML</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 flex flex-col items-center">
          <img className="w-24 h-24 mt-2" src={css} alt="" />
          <p className="text-2xl mt-2 text-white">CSS</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500 flex flex-col items-center">
          <img className="w-28 h-24 mt-2" src={bs} alt="" />
          <p className="text-2xl mt-2 text-white ">Bootstrap</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 flex flex-col items-center">
          <img className="w-24 h-24 mt-2" src={tw} alt="" />
          <p className="text-2xl mt-2 text-white">Tailwind CSS</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500 flex flex-col items-center">
          <img className="w-28 h-24 mt-2" src={js} alt="" />
          <p className="text-2xl mt-2 text-white">javascript</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 flex flex-col items-center">
          <img className="w-24 h-24 mt-2" src={react} alt="" />
          <p className="text-2xl mt-2 text-white">React</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-lime-500 flex flex-col items-center">
          <img className="w-24 h-24 mt-2" src={node} alt="" />
          <p className="text-2xl mt-2 text-white">NodeJs</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 flex flex-col items-center">
          <img className="w-24 h-24 mt-2" src={express} alt="" />
          <p className="text-2xl mt-2 text-white">Express</p>
        </div>
        <div className="shadow-md w-3/4 h-40 hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500 flex flex-col items-center">
          <img className="w-28 h-24 mt-2" src={mongodb} alt="" />
          <p className="text-2xl mt-2 text-white">MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
