import githubIcon from '../assets/githubIcon.png';
import { Button, Card, Typography } from '@heroui/react';

interface ProjectCardProps {
    github:string,
    title:string,
    description:string,
    photo: string,
    demo:string | null,
    tags:string[] | null
}


export default function ProjectCard({github, title, description, photo, demo, tags}:ProjectCardProps) {

    const tagList = () => {
        return tags ? (tags.map((key,index)=>(
                <Card variant="secondary" key={index}>
                    <Typography type="body-xs">{key}</Typography>
                </Card>
                ))
            ):null
        };

    return (
        <Card className="group h-[700px] sm:w-[500px] w-screen">
            <div className='h-2/5 w-full overflow-hidden rounded-[25px]'>
                <img src={photo} alt='Project Image' className='block h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.08]'/>
            </div>
            <div className='flex flex-col h-1/2 gap-2'>
                <Typography type='h2'>{title}</Typography>
                <Typography type="body">{description}</Typography>
                <div className="flex flex-wrap gap-2">
                    {tagList()}
                </div>
            </div>
            <div className='flex justify-between items-end'>
                <a href={github} target="_blank">
                    <Button variant='tertiary'>
                        <img src={githubIcon} className="w-4 h-4 object-contain"/>
                            GitHub
                    </Button>
                </a>
                {demo?(<a href={demo} target="_blank">
                    <Button>Live Demo</Button>
                </a>):null}
            </div>
        </Card >
    );
}