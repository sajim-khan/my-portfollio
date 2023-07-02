
import About from "../About/About";
import Banner from "../Banner/Banner";
import SocialLink from "./SocialLink/SocialLink";


const Home = () => {
    return (
      <div className="w-full h-screen bg-[#162946]">
        <SocialLink></SocialLink>
        <Banner></Banner>
        <About></About>
      </div>
    );
};

export default Home;