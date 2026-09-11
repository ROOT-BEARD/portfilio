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
            <div className='h-screen flex flex-row items-center justify-center gap-12'>
                <div className='h-full w-full overflow-hidden'>
                    <img className='h-full' src={headShot} alt='portrait'/>
                </div>
                <Card className='max-w-200'>
                    <Typography type='body'>Hello, my name is Alden Wyatt, I am a computer science major at Central Washington University.
                        My coursework along with personal projects have given me a strong foundational knowledge of computer science in advanced data structures,
                        programming languages, and from taking a project from an idea to a deployed product
                    </Typography>
                </Card>
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
            </CardHolder>
            </NewSec>
        </div>
    );
}