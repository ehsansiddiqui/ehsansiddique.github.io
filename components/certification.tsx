import React from "react";
import CertItem from "@/components/certitem";


import tensorflow from "../public/assets/skills/certified-tensorflow.png";
import iseplogo from "../public/assets/experience/isep-logo.png";

function Certification() {
    return (
        <div id="experience" className="w-full p-2 pt-12">
            <div className="max-w-[80%] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Certifications
                </p>
                <h2 className="py-4">Skills Validation</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div style={{backgroundColor: "white"}} >
                        <CertItem
                            image={tensorflow}
                            title="Google Certified TensorFlow Developer"
                            timeline="2024 - 2026"
                            url="https://www.credential.net/c1461988-c100-47bf-a06d-ef5c58018423#gs.cdgkdn"
                        />
                    </div>
                    {/*<div style={{backgroundColor: "white"}}>*/}
                    {/*    <CertItem*/}
                    {/*        image={iseplogo}*/}
                    {/*        title="Data Scientist Intern"*/}
                    {/*        timeline="2022 - 2022"*/}
                    {/*        url="/projects/superchat"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>


            </div>

        </div>
    );
}

export default Certification;
