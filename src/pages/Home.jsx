import NewSec from '../components/layout/NewSec.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CardHolder from '../components/CardHolder.jsx'
import hallowerImg from '../assets/projects/hallower.png'
import drunkardsImg from '../assets/projects/drunkardsWalk.png'
import workoutTrackerImg from '../assets/projects/workoutTracker.png'
import coupleImg from '../assets/projects/couple.png'
import githubIcon from "../assets/githubIcon.png";
import SkillSection from "../components/layout/SkillSection.jsx"
import { Typography, Button, Card } from '@heroui/react';
import { FileText } from 'lucide-react';
import headShot from '../assets/headshot.jpg';

export default function Home() {
    return (
        <div>
            <section className="flex flex-col items-center justify-center relative min-h-[90vh]
             w-full bg-gradient-to-b from-[#2F533E] via-[#1E3628] to-[#121E17] overflow-hidden -z-1 gap-5 pb-0 px-5 sm:pb-20">
                <img className='h-1/3 rounded-2xl outline-10 outline-black' src={headShot} alt='portrait'/>
                <Card variant='secondary' className='sm:w-2/5 w-full bg-black'>
                    <Typography type='h4' className='indent-8'>
                            Hello, my name is Alden Wyatt — an undergraduate at Central Washington
                            University working towards my bachelor’s degree in computer science.
                            I build software from full-stack web applications to custom algorithmic systems,
                            taking projects from an idea to a polished product.
                    </Typography>
                </Card>
            </section>
            <div className='flex w-full items-center justify-between flex-col px-[35%] sm:flex-row'>
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
                <a href="/resume.pdf" target='_blank'>
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
                <ProjectCard title="Workout Tracker"
                description="A workout tracker application which focuses
                on intuitive workout logging, utilizing recharts to offer a clean and interactive way to visualize
                exercise progress over time. Architected with Supabase and Row Level Security (RLS) to manage user-data
                isolation and deliver a responsive backend."
                github="https://github.com/ROOT-BEARD/workout-tracker"
                demo="https://d8xfy3b4l0hf.cloudfront.net"
                photo={workoutTrackerImg}
                tags={["TypeScript","React","TailWind","SQL","Supabase","AWS CloudFront", "AWS S3"]}/>
                <ProjectCard title="Couple"
                description="	A real-time messaging app designed for paired users to exchange notes and images,
                utilizing Supabase Realtime and its AWS S3-compatible buckets for low-latency image sending.
                Paired with Row Level Security and PostgreSQL to ensure strict privacy of messages between users."
                github="https://github.com/ROOT-BEARD/couple"
                demo="https://main.d2geb5vxokmiw8.amplifyapp.com"
                photo={coupleImg}
                tags={["TypeScript","React","TailWind","SQL","Supabase","AWS Amplify"]}/>
                <ProjectCard title="Hallower"
                description="An 8-directional player controller prototype which manages custom collision logic and
                a range of different player states, including simulated z-positioning allowing for aerial movement.
                Produced to ensure modular architecture and optimized performance."
                github="https://github.com/ROOT-BEARD/HALLOWER"
                photo={hallowerImg}
                tags={["C++","Raylib"]}/>
                <ProjectCard title="Drunkard's Walk"
                description="	A procedural level generation algorithm which produces an interconnected array of
                integers to represent a level layout using a random-walk approach. It features configurable parameters
                to fine-tune different layout results, paired with ASCII visualization of the final 2D grid."
                github="https://github.com/ROOT-BEARD/Drunkard-s-Walk"
                photo={drunkardsImg}
                tags={["C++"]}/>
            </CardHolder>
            <Typography type='h1'>Skills</Typography>
            <SkillSection
            languages={
                ["Java","JavaScript","TypeScript","C++",
                    "SQL", "Python"
                ]
            }
            concepts={["Data Structures & Algorithms",
                    "Object-Oriented Design", "Debugging"
            ]}
            softSkills={["Team Player", "Fast Learner", "Adaptable & Flexible", "Dependable",
                "Time Management"
            ]}
            technologies={["Git", "GitHub",
                    "React", "Supabase"]}>
            </SkillSection>
            </NewSec>
        </div>
    );
}