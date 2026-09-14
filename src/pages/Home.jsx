import NewSec from '../components/layout/NewSec.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CardHolder from '../components/CardHolder.jsx'
import hallowerImg from '../assets/projects/hallower.png'
import drunkardsImg from '../assets/projects/drunkardsWalk.png'
import workoutTrackerImg from '../assets/projects/workoutTracker.png'
import coupleImg from '../assets/projects/couple.png'
import githubIcon from "../assets/githubIcon.png";
import SkillSection from "../components/layout/SkillSection.jsx"
import { Typography, Button } from '@heroui/react';
import { FileText } from 'lucide-react';
import headShot from '../assets/headshot.jpg';

export default function Home() {
    return (
        <div>
            <section className="flex justify-end relative h-[75vh] w-full bg-zinc-900 overflow-hidden -z-1">
                <div className='absolute inset-y-0 left-0 w-3/5'>
                    <img className='h-full w-full object-cover object-center' src={headShot} alt='portrait'/>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent from-70% via-zinc-900/40 via-85% to-zinc-900 to-100%"/> 
                </div>
                <div className='pr-50 relative z-10 flex w-1/3 h-full justify-center items-center flex-col'>
                    <Typography type='h3'>
                        Hello, my name is Alden Wyatt — an undergraduate at Central Washington
                        University working towards my bachelor’s degree in computer science.
                        I build software from full-stack web applications to custom algorithmic systems,
                        taking projects from an idea to a polished product.
                    </Typography>
                </div>
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
                tags={["TypeScript","React","TailWind","SQL","PostgreSQL","Supabase","AWS Amplify"]}/>
                <ProjectCard title="Hallower"
                description="An 8-directional player controller prototype which manages custom collision logic and
                a range of different player states, including simulated z-positioning allowing for aerial movement.
                Produced to ensure modular architecture and optimized performance."
                github="https://github.com/ROOT-BEARD/HALLOWER"
                photo={hallowerImg}
                tags={["C++","Raylib"]}/>
                <ProjectCard title="Drunkards Walk"
                description="	A procedural level generation algorithm which produces an interconnected array of
                integers to represent a level layout using a random-walk approach. It features configurable parameters
                to fine-tune different layout results, paired with ASCII visualization of the final 2D grid."
                github="https://github.com/ROOT-BEARD/Drunkard-s-Walk"
                photo={drunkardsImg}
                tags={["C++"]}/>
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