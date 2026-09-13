import NewSec from '../components/layout/NewSec.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CardHolder from '../components/CardHolder.jsx'
import headShot from '../assets/headShot.png'
import hallowerImg from '../assets/projects/hallower.png'
import drunkardsImg from '../assets/projects/drunkardsWalk.png'
import workoutTrackerImg from '../assets/projects/workoutTracker.png'
import coupleImg from '../assets/projects/couple.png'
import githubIcon from "../assets/githubIcon.png";
import SkillSection from "../components/layout/SkillSection.jsx"
import { Typography, Button } from '@heroui/react';
import { FileText } from 'lucide-react'
import resume from "../resumeTemp.pdf"

export default function Home() {
    return (
        <div>
            <section className="flex justify-end relative h-[75vh] w-full bg-zinc-900 overflow-hidden -z-1">
                <div className='absolute inset-y-0 left-0 w-3/5'>
                    <img className='h-full w-full object-cover object-center' src={headShot} alt='portrait'/>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent from-70% via-zinc-900/40 via-85% to-zinc-900 to-100%"/> 
                </div>
                <div className='pr-50 relative z-10 flex w-1/3 h-full justify-center items-center flex-col'>
                    <Typography type='body'>Hello, my name is Alden Wyatt, I am a computer science major at Central Washington University.
                        My coursework along with personal projects have given me a strong foundational knowledge of computer science in advanced data structures,
                        programming languages, and from taking a project from an idea to a deployed product
                    </Typography>
                </div>
            </section>
            <div className='flex w-full justify-between px-[35%]'>
                <a 
                href='https://github.com/ROOT-BEARD'
                target="_blank"
                >
                    <Button
                        size="lg"
                        variant='tertiary'>
                        <img src= {githubIcon}
                            className="w-4 h-4 object-contain"/>
                            GitHub
                    </Button>
                </a>
                <a href={resume} target='_blank'>
                    <Button
                        size="lg"
                        variant='tertiary'>
                            <FileText/>
                            Resume PDF
                    </Button>
                </a>
            </div>
            <NewSec
                title="Projects"
                descrip="what I have been up to"
            >
            <CardHolder>
                <ProjectCard title="Hallower"
                description="A character controller inspried by the game
                Mina the Hallower by Yhact Club games"
                github="https://github.com/ROOT-BEARD/HALLOWER"
                photo={hallowerImg}/>
                <ProjectCard title="Workout Tracker"
                description="A workout tracker"
                github="https://github.com/ROOT-BEARD/workout-tracker"
                demo="https://d8xfy3b4l0hf.cloudfront.net"
                photo={workoutTrackerImg}/>
                <ProjectCard title="Couple"
                description="A messaging app that simplifys sending cute messages and photos"
                github="https://github.com/ROOT-BEARD/couple"
                demo="https://main.d2geb5vxokmiw8.amplifyapp.com"
                photo={coupleImg}/>
                <ProjectCard title="Drunkards Walk"
                description="A terminal algotim used to create interesting and modifable level layouts
                using the drunkards walk algotyim"
                github="https://github.com/ROOT-BEARD/Drunkard-s-Walk"
                photo={drunkardsImg}/>
            </CardHolder>
            <Typography type='h1'>Skills</Typography>
            <SkillSection
            programmingSkills={
                ["Java","JavaScript","TypeScripts"," C ","C++",
                    "SQL", "Python", "Data Structures & Algorithms",
                    "Object-Oriented Design", "Debugging", "Git", "GitHub",
                    "React", "SupaBase"
                ]
            }
            generalSkills={["Team Player", "Fast Learner", "Flexable", "Dependable",
                "Time Managment"
            ]}>
            </SkillSection>
            </NewSec>
        </div>
    );
}