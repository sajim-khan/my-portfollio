import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLink = () => {
  return (
    <div className="flex fixed flex-col top-[40%] left-0 bg-[#162946]">
      <ul>
        <li className="w-[120px] h-[45px] px-2 flex justify-between items-center ml-[-75px] hover:ml-[0px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://github.com/sajim-khan"
          >
            Github <FaGithub size={30}></FaGithub>
          </a>
        </li>
        <li className="w-[120px] h-[45px] px-2 flex justify-between items-center ml-[-75px] hover:ml-[0px] duration-300  bg-blue-600 ">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://www.facebook.com/shahadatehossen.sajim/"
          >
            Facebook <FaFacebook size={30}></FaFacebook>
          </a>
        </li>
        <li className="w-[120px] h-[45px] px-2 flex justify-between items-center ml-[-75px] hover:ml-[0px] duration-300 bg-blue-900">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://www.linkedin.com/in/shahadat-hossain-sajim-298941215/"
          >
            Linkedin <FaLinkedin size={30}></FaLinkedin>
          </a>
        </li>
        <li className="w-[120px] h-[45px] px-2 flex justify-between items-center ml-[-75px] hover:ml-[0px] duration-300 bg-[#581792]">
          <a
            className="flex justify-between items-center w-full text-white"
            href="/"
          >
            Email <HiOutlineMail size={30}></HiOutlineMail>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
