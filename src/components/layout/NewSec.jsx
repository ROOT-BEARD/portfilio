import './NewSec.css';
import Card from '../Card.jsx';

export default function NewSec() {
    return (
        <div>
            <div className="BackDrop">
                <div style={{ padding: '50px 0px 0px 27%' }}>
                    <h1>What's new</h1>
                    <h3>What I have been up to</h3>
                </div>
                <div className='CardHolder'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>

    );
}