import './NewSec.css';
import Card from '../Card.jsx';

export default function NewSec({ title, descrip, backgroundColor, children }) {
    return (
        <div>
            <div className="BackDrop" style={{ backgroundColor: backgroundColor }}>
                <div className='SectionContainer'>
                    <h1>{title}</h1>
                    <h3>{descrip}</h3>
                    {children}
                </div>
            </div>
        </div>

    );
}