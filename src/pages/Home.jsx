import NewSec from '../components/layout/NewSec.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CardHolder from '../components/CardHolder.jsx'
import headShot from '../assets/headShot.png'
import hallowerImg from '../assets/projects/hallower.png'
import workoutTrackerImg from '../assets/projects/workoutTracker.png'
import coupleImg from '../assets/projects/couple.png'
import { Card, Typography } from '@heroui/react';

export default function Home() {
    return (
        <div>
            <section className="flex justify-end relative h-screen w-full bg-zinc-900 overflow-hidden -z-1">
                <div className='absolute inset-y-0 left-0 w-1/2'>
                    <img className='h-full w-full object-cover object-center' src={headShot} alt='portrait'/>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900" />
                </div>
                <div className='pr-50 relative flex w-1/3 h-full justify-center items-center'>
                    <Typography type='body'>Hello, my name is Alden Wyatt, I am a computer science major at Central Washington University.
                        My coursework along with personal projects have given me a strong foundational knowledge of computer science in advanced data structures,
                        programming languages, and from taking a project from an idea to a deployed product
                    </Typography>
                </div>
            </section>
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
            </CardHolder>
            </NewSec>
        </div>
    );
}