"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/pariscite.jpg";
import bahrialogo from "../public/assets/bahria-university-logo.png";

const Education = () => {
    return (
        <div id="education" className="w-full md:h-screen p-2 items-center py-16">
            <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        Education
                    </p>
                    <h2 className="py-4">Master&apos;s in Data Science 🎓</h2>
                    <p className="py-2 text-[#808080] font-mono"> 2021 - 2022</p>
                    <p className="py-2 text-gray-600">
                        Hello, I have completed my Masters in Data Science at
                        Université Paris Cité, where my academic journey is deeply rooted in the
                        the ever-evolving field of Machine Learning and AI. I studied courses such as Advanced Data Science,
                        Natural Language Processing, Machine Learning, and Robotics in my masters program.
                        I completed my thesis on detecting anomalies in human trajectories as a part of LISTE group at École d'ingénieurs
                        du numérique (ISEP). The objective was to compare unsupervised
                        approaches for anomaly detection and develop an efficient online detection method. I explored statistical, machine learning,
                        and deep learning approaches, including DBSCAN, Recurrent Neural Networks, and deep generative sequence modeling. I presented my findings at seminars at ISEP
                        and Université Paris Cité and published my work as a first author at the International Congress on Information and Communication
                        Technology in London.
                    </p>
                    <p>
                        <strong>Advisor</strong>
                        <span className="text-red-500"> Prof. Yousra Chabchoub</span>
                    </p>
                    {/*<a target="_blank" href={"http://tinyurl.com/usxj5dyv"}>*/}
                    {/*    <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4 mr-8">*/}
                    {/*        Resume*/}
                    {/*    </button>*/}
                    {/*</a>*/}
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image
                        src={logo}
                        className="rounded-xl transition-transform duration-500"
                        alt="/"
                    />
                </div>


            </div>


            <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8" style={{marginTop:30}}>
                <div className="col-span-2">
                    <h2 className="py-4">Bachelors&apos;s in Computer Science 🎓</h2>
                    <p className="py-2 text-[#808080] font-mono"> 2021 - 2022</p>
                    <p className="py-2 text-gray-600">
                        I have completed my bachelors in Computer Science from Bahria University. I studied courses such as
                        Computer Programming, Object-Oriented Programming, Applied Calculus, Probability and Statistics,
                        Artificial Intelligence, and Discrete Mathematics. These courses provided me with a strong foundation
                        in Computer Science, which was further enhanced by laboratory courses. In my thesis, I worked on the research and development of an
                        in-house collaboration platform for students and professors, integrated with recommendation systems. This platform is currently
                        in use at the university, aiding students in their research and final year projects.

                    </p>
                    <p>
                        <strong>Advisor</strong>
                        <span className="text-red-500"> Prof. Abdul Hafeez</span>
                    </p>

                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"  >
                    <Image
                        src={bahrialogo}
                        className="rounded-xl transition-transform duration-500"
                        alt="/"
                        style={{ backgroundColor: 'white' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
