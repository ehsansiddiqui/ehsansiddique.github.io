"use client";
import Image from "next/image";

import AboutImage from "../public/assets/dpimages.jpeg";
import hoverImage from "../public/assets/dpimages.jpeg";
import React, { useState, useEffect, useRef } from "react";
import pariscite from "../public/assets/imagepariscite.jpg";

const About = () => {
  const [profile, setProfile] = useState(AboutImage);

  const hoverEnter = () => {
    profile === AboutImage ? setProfile(hoverImage) : setProfile(AboutImage);
  };

  return (
    <div id="about" className="w-full p-2 items-center py-16 pb-40">
      <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Hi, I&apos;m Ehsan 🤝</h2>
          <p className="py-2 text-[#808080] font-mono">\\ Hello world 👋</p>
          <p className="py-2 text-gray-600">
            If I have to describe myself in a single word, it would be{" "}
            <strong>&quot;self-starter🏃&quot;</strong>. I am a curious soul who
            is always seeking problems to crunch and put in the best efforts💪
            to solve them. I am enthusiastic about my objectives and focused to achieve
            my goal by working on it consistently. I always incorporate resources into my arsenal🏹 to accomplish my job.
          </p>

          <p className="py-2 text-gray-600">
            I hold a master degree in data science from Université Paris Cité, where I developed a solid foundation in both
            theoretical and applied aspects of data science. My expertise spans various domains, including predictive analytics,
            natural language processing, data visualization, and big data technologies.

          </p>
          <p className="py-2 text-gray-600">I am proficient in programming languages such as Python, R, and SQL, and have hands-on experience with tools and frameworks like TensorFlow, PyTorch, and Hadoop. I am committed to continuous learning
            and staying at the forefront of technological advancements in the field of data science.</p>
          <p className="py-2 text-gray-600">
             During my professional experience, I&apos;ve cultivated a unique approach
            to my work that emphasizes a willingness to take calculated risks.
            This mindset has allowed me to
            push boundaries and uncover innovative solutions to complex
            problems. I thrive under high-pressure situations, consistently
            delivering exceptional results even when faced with tight deadlines
            and demanding environments.
          </p>

          <p className="py-2 text-gray-600">
            Additionally, my tinkering nature has proven invaluable in exploring
            new technologies and methodologies, enabling me to adapt swiftly to
            emerging trends in the fast-paced tech landscape. I am an avid
            participant in international hackathons and coding competitions,
            where I relish the opportunity to collaborate with like-minded
            individuals, exchange ideas, and tackle challenging projects. This
            involvement has not only sharpened my technical skills but also
            expanded my horizons by exposing me to diverse perspectives and
            cutting-edge techniques. It&apos;s this proactive and adventurous
            spirit that fuels my continuous growth and fuels my passion for
            creating meaningful, impactful software solutions.💡🔧🌐👨‍💻
          </p>
          {/*<p>My approach to data science is not just about crunching numbers; it's about storytelling with data. I believe in the power of data to drive innovation and create impactful changes. I am excited to share my journey, projects, and insights with you through this portfolio.</p>*/}
          <p className="py-2 text-gray-600">
            Feel free to explore my work and connect with me for potential collaborations, opportunities,
            or discussions about data science. Let's turn data into knowledge and knowledge into action.
            <br />
            <strong>🔗 Let&apos;s Connect</strong>
          </p>
        </div>
        <div
          onMouseEnter={hoverEnter}
          onMouseLeave={hoverEnter}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            src={profile}
            className="rounded-xl transition-transform duration-500"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
