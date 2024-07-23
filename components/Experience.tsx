import React from "react";
import ExpItem from "./expItem";

import algolab from "../public/assets/experience/logo_iimcb.png";
import iseplogo from "../public/assets/experience/isep-logo.png";
import sjsolution from "../public/assets/experience/sj-solutions-logo.jpg";
import ashtexsol from "../public/assets/experience/ashtexsolution-logo.png";

function Experience() {
  return (
    <div id="experience" className="w-full p-2 pt-12">
        <div className="max-w-[80%] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                Experience
            </p>
            <h2 className="py-4">Past Workplaces</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div style={{backgroundColor: "white"}}>
                    <ExpItem
                        image={algolab}
                        title="Junior Data Specialist"
                        timeline="2022 - 2023"
                    />
                </div>
                <div style={{backgroundColor: "white"}}>
                    <ExpItem
                        image={iseplogo}
                        title="Data Scientist Intern"
                        timeline="2022 - 2022"
                    />
                </div>
                <div style={{backgroundColor: "white"}}>
                    <ExpItem
                        image={sjsolution}
                        title="Software Engineer"
                        timeline="2019 - 2021"
                    />
                </div>
                <div style={{backgroundColor: "white"}}>
                    <ExpItem
                        image={ashtexsol}
                        title="Python Developer Intern"
                        timeline="2019 - 2019"
                    />
                </div>
            </div>


        </div>

    </div>
  );
}

export default Experience;
