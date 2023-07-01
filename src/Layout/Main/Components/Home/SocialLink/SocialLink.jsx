import { FaGithub, FaFacebook, BsLinkedin } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex fixed flex-col top-[40%] left-0">
      <ul>
        <li>
          <a href="/">
            <FaGithub></FaGithub>
          </a>
        </li>
        <li>
          <a href="/">
            <FaFacebook></FaFacebook>
          </a>
        </li>
        <li>
          <a href="/">
            <BsLinkedin></BsLinkedin>
          </a>
        </li>
        <li>
          <a href="/">
            <FaGithub></FaGithub>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
