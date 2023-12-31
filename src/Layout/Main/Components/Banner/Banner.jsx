import img from "./../../../../assets/sajim.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="bg-[#162946]" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-2 ps-16 lg:ps-28 pe-12 lg:pt-10 py-10 gap-16">
        <div className="max-w-1/2  mx-auto flex flex-col justify-center h-full text-white">
          <p className="text-2xl text-purple-400">Hello, My name is </p>
          <h1 className="text-4xl font-bold font-serif py-2">
            Shahadat Hossain Sajim
          </h1>
          <h2 className="text-2xl mb-2">
            I am a{" "}
            <span className="text-3xl font-sans font-bold text-cyan-400">
              Web Developer
            </span>
          </h2>
          <p>
            As a Web Developer, my career objective is to leverage my expertise
            in building robust web applications, utilizing cutting-edge
            technologies, and delivering exceptional user experiences. I am
            determined to enhance my skills and contribute to an organization
            that values creativity, teamwork, and excellence.
          </p>
          <div className="justify-start mt-4">
            <a href="https://drive.google.com/uc?id=1fJ8V6Qw_DhFxeNsgFpnuThADsGKNGybp&export=download">
              <span className="btn bg-cyan-500 hover:bg-indigo-500">
                Download Resume
                <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>
              </span>
            </a>
          </div>
        </div>
        <div className=" lg:w-[400px] h-[300px] ">
          <img className="rounded-3xl" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
