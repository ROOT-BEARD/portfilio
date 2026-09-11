import './Card.css';
import githubIcon from "../assets/githubIcon.png";
import {Link} from 'react-router-dom';
import { Button, Card, Typography } from '@heroui/react';

export default function ProjectCard({github, title, description, photo, demo}) {
    return (
        <Card
        className="group h-[500px] w-[400px]">
            <div className='h-full w-full overflow-hidden rounded-[25px]'>
                <img src={photo} alt='Project Image' className='block h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.08]'/>
            </div>
            <Typography type='h4' style={{paddingLeft:'5%'}}>{title}</Typography>
            <p style={{paddingLeft:'10%'}}>{description}</p>
            <div className='h-full flex justify-between items-end'>
                <Link
                    to={github}>
                    <Button
                    variant='tertiary'>
                        <img src={githubIcon}
                            className="w-4 h-4 object-contain"/>
                            GitHub
                    </Button>
                </Link>
                <Link to={demo}>
                    <Button>Live Demo</Button>
                </Link>
            </div>
        </Card >
    );
}