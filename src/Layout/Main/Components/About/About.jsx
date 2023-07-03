const About = () => {
  return (
    <div className="bg-[#162946]">
      <p className="ps-16 pt-5 text-center text-5xl font-bold text-cyan-400 mb-8">
        About Me
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 ps-16 pe-12 lg:pt-5 py-10 gap-16">
        <div className="max-w-1/2  mx-auto flex flex-col h-full text-white">
          <p className="text-5xl font-bold font-serif my-4">Education</p>
          <div className="pb-5">
            <p className="text-3xl pb-1">Daffodil International University</p>
            <p className="text-lg">B.Sc in Computer Science and Engineering</p>
            <p>January 2019 - July 2023</p>
          </div>
          <div className="pb-5">
            <p className="text-3xl pb-1">Barnamala College</p>
            <p className="text-lg">Higher Secondary School Certificate</p>
            <p>Passed in 2017, From Science division</p>
          </div>
          <div className="pb-5">
            <p className="text-3xl pb-1">Akhter Banu High School</p>
            <p className="text-lg">Secondary School Certificate</p>
            <p>Passed in 2015, From Science division</p>
          </div>
        </div>
        <div className="max-w-1/2  mx-auto flex flex-col justify-center h-full text-white">
          <p>
            I am Shahadat Hossain Sajim. I am a student at Daffodil
            International University department of Computer Science and
            Engineering. <br />
            As a computer science student I am always try to explore new
            technologies to further enhance my skills in different fields.I am
            passionate about building robust web applications by utilizing
            cutting-edge technologies that improves the lives of those around
            me. I specialized in creating software for clients ranging from
            individuals and small-businesses all the way to large enterprise
            corporation.I consistently learn MERN stack development last 7
            month. I learn a lot of technology in that time and did many
            projects. Also, I continuously seek out for opportunities to enhance
            my skills and stay up-to-date with the latest trends in web
            technologies. Now I am seeking an opportunity to start my
            professional web development career.
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
