import toy from "../../../../assets/toy-store.png";
import food from "../../../../assets/food-bank.png";
import sports from "../../../../assets/sports-academia.png";

const Projects = () => {
  return (
    <div className="bg-[#162946] ps-16 lg:ps-28 pt-10" id="project">
      <h1 className="text-center text-5xl font-bold text-cyan-400 mb-16">
        Projects
      </h1>

      {/* Kids toy project */}
      <div className="flex flex-col lg:flex-row justify-center lg:gap-14 lg:pb-16 ">
        <div className="w-3/4 lg:w-1/2 h-64 lg:h-[400px] overflow-hidden img-container">
          <a href="">
            <img
              className="block  w-full h-full object-cover object-top rounded"
              src={toy}
              alt=""
            />
          </a>
        </div>
        <div className="pe-5 text-white mt-5 lg:mt-0 lg:pe-14">
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
          <p className="text-xl">
            <span className="text-2xl font-bold">Technologies:</span> React,
            TailwindCSS, React-router, MongoDB, Express.js, Firebase/auth,
            express.js, nodeJs
          </p>
          <div className="flex flex-col lg:flex-row gap-3 pe-10 lg:gap-10 mt-5 mb-20 lg:mb-10">
            <a
              href="https://toy-store-8043f.web.app/"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Live Website
            </a>
            <a
              href="https://github.com/sajim-khan/toy-shop-client"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Client
            </a>
            <a
              href="https://github.com/sajim-khan/toy-shop-server"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Server
            </a>
          </div>
        </div>
      </div>

      {/* FoodBank project */}
      <div className="flex flex-col lg:flex-row justify-center lg:gap-14 lg:pb-10">
        <div className="w-3/4 lg:w-1/2 h-64 lg:h-[400px] overflow-hidden img-container">
          <a href="">
            <img
              className="block  w-full h-full object-cover object-top rounded"
              src={food}
              alt=""
            />
          </a>
        </div>
        <div className="pe-5 text-white mt-5 lg:mt-0 lg:pe-14">
          <p className="text-5xl font-serif py-2">FoodBank</p>
          <p className="text-2xl font-bold pb-2">
            React & Firebase : Various food from different region
          </p>
          <p className="text-3xl font-mono font-bold">About Projects:</p>
          <div className="pb-2">
            <p>
              1. This website is an e-commerce platform that is for Food
              Researchers to chefs and consumers
            </p>
            <p>
              2. Through this website, Consumers will find the best food items
            </p>
            <p>
              3. Through this website, Consumers can explore different types of
              food and they can choose their favourite food and can view food
              details.
            </p>
          </div>
          <p className="text-lg">
            <span className="text-2xl font-bold">Technologies:</span> React,
            Tailwind CSS, React-router, Firebase Authentication, Express.js,
            NodeJs
          </p>
          <div className="flex flex-col lg:flex-row gap-3 pe-10 lg:gap-10 mt-5 mb-20 lg:mb-10">
            <a
              href="https://fastidious-gaufre-0c7ede.netlify.app/"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Live Website
            </a>
            <a
              href="https://github.com/sajim-khan/chef-recipe-hunter-client"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Client
            </a>
            <a
              href="https://github.com/sajim-khan/chef-recipe-hunter-server"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Server
            </a>
          </div>
        </div>
      </div>

      {/* SportsAcademia project*/}
      <div className="flex flex-col lg:flex-row justify-center lg:gap-14 lg:pb-10">
        <div className="w-3/4 lg:w-1/2 h-64 lg:h-[400px] overflow-hidden img-container">
          <a href="">
            <img
              className="block  w-full h-full object-cover object-top rounded"
              src={sports}
              alt=""
            />
          </a>
        </div>
        <div className="pe-5 text-white mt-5 lg:mt-0 lg:pe-14">
          <p className="text-5xl font-serif py-2">SportsAcademia</p>
          <p className="text-2xl font-bold pb-3">
            MERN-Stack: Educational website for kids.
          </p>
          <p className="text-3xl font-mono font-bold">About Projects:</p>
          <div className="pb-2">
            <p>
              1. This website is an e-commerce platform that offers
              sports-related courses for kids.
            </p>
            <p>
              2. By this website, Students can explore different courses and
              they can choose their favourite course to learn new things and
              view details.
            </p>
            <p>3. Also Instructors can add, update and delete classes.</p>
          </div>
          <p className="text-xl">
            <span className="text-2xl font-bold">Technologies:</span> React,
            TailwindCSS, React-router, MongoDB, Express.js, Firebase/auth,
            express.js, nodeJs
          </p>
          <div className="flex flex-col lg:flex-row gap-3 pe-10 lg:gap-10 mt-5 mb-14">
            <a
              href="https://sports-academia.web.app/"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Live Website
            </a>
            <a
              href="https://github.com/sajim-khan/sports-academia-client"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Client
            </a>
            <a
              href="https://github.com/sajim-khan/sports-academia-server"
              className="btn bg-cyan-300 hover:bg-indigo-500"
            >
              Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
