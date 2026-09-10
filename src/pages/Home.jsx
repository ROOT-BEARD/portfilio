import NewSec from '../components/layout/NewSec.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CardHolder from '../components/CardHolder.jsx'
import headShot from '../assets/headShot.png'
import { Card, Typography } from '@heroui/react';

export default function Home() {
    return (
        <div>
            <div className='h-screen flex flex-row items-center justify-center gap-12'>
                <div>
                    <img className='rounded-3xl' src={headShot} alt='portrait'/>
                </div>
                <Card className='max-w-200'>
                    <Typography type='body'>Hello, my name is Alden Wyatt, I am a computer science major at Central Washington University.
                        My coursework along with personal projects have given me a strong foundational knowledge of computer science in advanced data structures,
                        programming languages, and from taking a project from an idea to a deployed product
                    </Typography>
                </Card>
            </div>
            <NewSec
                title="What's new"
                descrip="What I have been up to"
            >
            <CardHolder>
                <ProjectCard title="Hallower"
                description="A character controller inspried by the game
                Mina the Hallower by Yhact Club games" to="/projects/hallower" onClick={() => window.scrollTo({top:0,behavior:'instant'})}/>
                <ProjectCard />
                <ProjectCard />
            </CardHolder>
            </NewSec>
        </div>
    );
}