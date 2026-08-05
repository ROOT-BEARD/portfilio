import './NewSec.css';
import Card from '../Card.jsx';

export default function NewSec({ title, descrip, backgroundColor, children }) {
    return (
        <div>
            <div className="BackDrop" style={{ backgroundColor: backgroundColor }}>
                <div style={{ padding: '50px 0px 0px 27%' }}>
                    <h1>{title}</h1>
                    <h3>{descrip}</h3>
                </div>
                {children}
            </div>
        </div>

    );
}