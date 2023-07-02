import toy from '../'

const Projects = () => {
    return (
      <div>
      {/* first project */}
        <div>
          <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            <a href="">
              <img
                className="block w-full h-full object-cover object-top rounded"
                src={toy}
                alt=""
              />
            </a>
          </div>
          <div>details project</div>
        </div>
        {/* second project */}
        <div>
          <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            <a href="">
              <img
                className="block w-full h-full object-cover object-top rounded"
                src={toy}
                alt=""
              />
            </a>
          </div>
          <div>details project</div>
        </div>
        {/* third project */}
        <div>
          <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            <a href="">
              <img
                className="block w-full h-full object-cover object-top rounded"
                src={toy}
                alt=""
              />
            </a>
          </div>
          <div>details project</div>
        </div>
      </div>
    );
};

export default Projects;