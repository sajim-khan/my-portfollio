import Skills from "../Skills/Skills";
import SocialLink from "./SocialLink/SocialLink";


const Home = () => {
    return (
      <div className="w-full h-screen bg-[#162946]">
        <SocialLink></SocialLink>
        <Skills></Skills>
      </div>
    );
};

export default Home;