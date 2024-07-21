import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"About me (ofcourse)."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Hello! I'm Prathik Shetty, a passionate software developer at ProficientNow, based in Hyderabad. My journey into full stack development began in February 2023. Although I hold a degree in Electronics & Instrumentation Engineering, my true calling has always been in the realm of software." />

                        <AnimatedBody
                            delay={0.1}
                            text="I specialize in JavaScript and TypeScript, and I am proficient in their popular frameworks, including React.js, Next.js, Node.js, Express.js, and Nest.js. My expertise extends to both NoSQL and SQL databases, with significant experience in MongoDB and PostgreSQL."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Currently, I am leveraging Docker for containerization to enhance efficiency in my projects. My diverse background and continuous learning drive me to deliver innovative solutions in the ever-evolving tech landscape."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
