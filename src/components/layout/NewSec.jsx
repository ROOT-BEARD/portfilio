import './NewSec.css';
import Card from '../ProjectCard.jsx';
import { Typography } from '@heroui/react';

export default function NewSec({ title, descrip, backgroundColor, children }) {
    return (
        <div>
            <div className="BackDrop" style={{ backgroundColor: backgroundColor }}>
                <div className='SectionContainer'>
                    <Typography type='h1'>{title}</Typography>
                    <Typography type = 'body'>{descrip}</Typography>
                    {children}
                </div>
            </div>
        </div>

    );
}