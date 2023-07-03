import toy from "../../../../assets/toy-store.png";
import food from "../../../../assets/food-bank.png";
import sports from "../../../../assets/sports-academia.png";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="bg-[#162946] ps-28 pt-10">
      <h1 className="text-center text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h1>
      {/* first project */}
      {/* <div className="flex flex-col lg:flex-row justify-center items-center gap-14 mb-20 ">
        <div className="w-3/4 lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden img-container">
          <a href="">
            <img
              className="block w-full h-full object-cover object-top rounded "
              src={toy}
              alt=""
            />
          </a>
        </div>
        <div className=" sm:pe-5 text-white h-[300px] lg:h-[470px] lg:pe-14 ">
          <p className="text-5xl font-serif py-2">ToyShop</p>
          <p className="text-2xl font-bold pb-3">
            MERN-Stack: Multivendor e-commerce website for kids.
          </p>
          <p className="text-3xl font-mono font-bold">About Projects:</p>
          <div className="pb-2">
            <p>
              1. This website is an e-commerce platform that offers consumer
              to-consumer and business-to-consumer sales through the website
            </p>
            <p>
              2. Through this website, users can see kids toys and they can add
              their favorite toys
            </p>
            <p>3. Also, sellers can add toys to show their products.</p>
          </div>
          <p>
            <span className="text-2xl font-bold">Technologies :</span> React,
            TailwindCSS, React-router, MongoDB, Express.js, Firebase/auth,
            express.js, nodeJs
          </p>
          <div className="flex flex-row gap-10 mt">
            <p>Live WebSite</p>
            <p>Client</p>
            <p>Server</p>
          </div>
        </div>
      </div> */}

      {/* first project */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:pb-20">
        <div className="w-3/4 lg:w-1/2 h-64 lg:h-[400px] overflow-hidden img-container">
          <a href="">
            <img
              className="block  w-full h-full object-cover object-top rounded"
              src={toy}
              alt=""
            />
          </a>
        </div>
        <div className="sm:pe-5 text-white mt-5 lg:mt-0 lg:pe-14">
          <p className="text-5xl font-serif py-2">ToyShop</p>
          <p className="text-2xl font-bold pb-3">
            MERN-Stack: Multivendor e-commerce website for kids.
          </p>
          <p className="text-3xl font-mono font-bold">About Projects:</p>
          <div className="pb-2">
            <p>
              1. This website is an e-commerce platform that offers consumer
              to-consumer and business-to-consumer sales through the website
            </p>
            <p>
              2. Through this website, users can see kids toys and they can add
              their favorite toys
            </p>
            <p>3. Also, sellers can add toys to show their products.</p>
          </div>
          <p>
            <span className="text-2xl font-bold">Technologies:</span> React,
            TailwindCSS, React-router, MongoDB, Express.js, Firebase/auth,
            express.js, nodeJs
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mt-5">
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Live Website</p>
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Client</p>
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Server</p>
          </div>
        </div>
      </div>

      {/* second project */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:pb-20">
        <div className="w-3/4 lg:w-1/2 h-64 lg:h-[400px] overflow-hidden img-container">
          <a href="">
            <img
              className="block  w-full h-full object-cover object-top rounded"
              src={food}
              alt=""
            />
          </a>
        </div>
        <div className="sm:pe-5 text-white mt-5 lg:mt-0 lg:pe-14">
          <p className="text-5xl font-serif py-2">ToyShop</p>
          <p className="text-2xl font-bold pb-3">
            MERN-Stack: Multivendor e-commerce website for kids.
          </p>
          <p className="text-3xl font-mono font-bold">About Projects:</p>
          <div className="pb-2">
            <p>
              1. This website is an e-commerce platform that offers consumer
              to-consumer and business-to-consumer sales through the website
            </p>
            <p>
              2. Through this website, users can see kids toys and they can add
              their favorite toys
            </p>
            <p>3. Also, sellers can add toys to show their products.</p>
          </div>
          <p>
            <span className="text-2xl font-bold">Technologies:</span> React,
            TailwindCSS, React-router, MongoDB, Express.js, Firebase/auth,
            express.js, nodeJs
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mt-5">
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Live Website</p>
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Client</p>
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Server</p>
          </div>
        </div>
      </div>

      {/* Third  project*/}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:pb-20">
        <div className="w-3/4 lg:w-1/2 h-64 lg:h-[400px] overflow-hidden img-container">
          <a href="">
            <img
              className="block  w-full h-full object-cover object-top rounded"
              src={sports}
              alt=""
            />
          </a>
        </div>
        <div className="sm:pe-5 text-white mt-5 lg:mt-0 lg:pe-14">
          <p className="text-5xl font-serif py-2">ToyShop</p>
          <p className="text-2xl font-bold pb-3">
            MERN-Stack: Multivendor e-commerce website for kids.
          </p>
          <p className="text-3xl font-mono font-bold">About Projects:</p>
          <div className="pb-2">
            <p>
              1. This website is an e-commerce platform that offers consumer
              to-consumer and business-to-consumer sales through the website
            </p>
            <p>
              2. Through this website, users can see kids toys and they can add
              their favorite toys
            </p>
            <p>3. Also, sellers can add toys to show their products.</p>
          </div>
          <p>
            <span className="text-2xl font-bold">Technologies:</span> React,
            TailwindCSS, React-router, MongoDB, Express.js, Firebase/auth,
            express.js, nodeJs
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mt-5">
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Live Website</p>
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Client</p>
            <p className="btn bg-cyan-300 hover:bg-indigo-500">Server</p>
          </div>
        </div>
      </div>
      {/* fifth project */}
    </div>
  );
};

export default Projects;
