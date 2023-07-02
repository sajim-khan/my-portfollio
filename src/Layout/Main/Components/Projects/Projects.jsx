import toy from '../../../../assets/toy-store.png'
import food from '../../../../assets/food-bank.png'
import sports from '../../../../assets/sports-academia.png'

const Projects = () => {
    return (
      <div className="bg-[#162946] ps-28 pt-10">
        <h1 className="text-center text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h1>
        {/* first project */}
        <div className="flex flex-col lg:flex-row w-1/2 justify-between gap-10 mb-10 ">
          <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            <a href="">
              <img
                className="block w-full h-full object-cover object-top rounded"
                src={toy}
                alt=""
              />
            </a>
          </div>
          <div className="text-white">details project</div>
        </div>
        {/* second project */}
        <div className="flex flex-col lg:flex-row w-1/2 justify-between gap-10 my-10 ">
          <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            <a href="https://fastidious-gaufre-0c7ede.netlify.app/">
              <img
                className="block w-full h-full object-cover object-top rounded"
                src={food}
                alt=""
              />
            </a>
          </div>
          <div className="text-white">details project</div>
        </div>
        {/* third project */}
        <div className="flex flex-col lg:flex-row w-1/2 justify-between gap-10 my-10 ">
          <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            <a href="">
              <img
                className="block w-full h-full object-cover object-top rounded"
                src={sports}
                alt=""
              />
            </a>
          </div>
          <div className="text-white">details project</div>
        </div>
      </div>
    );
};

export default Projects;