const About = () => {
  return (
    <div className="bg-[#162946]">
      <h1 className="ps-28 pt-10 text-white text-4xl font-bold">About Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 ps-28 pe-12 lg:pt-5 py-10 gap-16">
        <div className="max-w-1/2  mx-auto flex flex-col h-full text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            alias. At, tempora similique eveniet id odio libero magnam eaque
            incidunt!
          </p>
        </div>
        <div className="max-w-1/2  mx-auto flex flex-col justify-center h-full text-white">
          <p>
            I am Shahadat Hossain Sajim. I am a student at Daffodil
            International University department of Computer Science and
            Engineering. <br />
            As a computer science student I am always try to explore new
            technologies to further enhance my skills in different fields.I am passionate about building robust web applications by utilizing cutting-edge technologies that improves
            the lives of those around me. I specialized in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporation.
          </p>
          <p className="text-3xl font-bold pt-3 text-cyan-400">My Skills</p>
          <p className="font-bold">
            Expertise: HTML | CSS | Bootstrap | Tailwind <br />
            Comfortable: JavaScript| React | Firebase | ExpressJs | ReactRouter{" "}
            <br />
            Familiar: NodeJs | MongoDB | JWT Tools: GitHub | Netlify | Vercel |
            VsCode | Figma
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
