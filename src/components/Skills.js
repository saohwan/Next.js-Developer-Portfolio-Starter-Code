import React from 'react';
import {motion} from "framer-motion";


const Skill = ({name, x, y}) => {

    return (
        <motion.div className="flex item-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute
                "
                    whileHover={{scale: 1.05}}
                    initial={{x: 0, y: 0}}
                    whileInView={{x: x, y: y}} // 스크롤에도 반응
            // animate={{x: x, y: y}} 새로고침 때만 반응
                    transition={{duration: 1.5}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div className="flex item-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark
                "
                            whileHover={{scale: 1.05}}
                >
                    Web
                </motion.div>
                <Skill name="Python" x="-22vw" y="2vw"/>
                <Skill name="Django" x="-5vw" y="-10vw"/>
                <Skill name="FastAPI" x="20vw" y="6vw"/>
                <Skill name="Flask" x="-20vw" y="-15vw"/>
                <Skill name="PostgreSQL" x="-5vw" y="-10vw"/>
                <Skill name="NextJS" x="-5vw" y="-10vw"/>
                <Skill name="Web Design" x="18vw" y="-5vw"/>
                <Skill name="Docker" x="18vw" y="18vw"/>
            </div>
        </>
    );
};

export default Skills;
