import './Card.css';
import {Link} from 'react-router-dom';
import temp from '../assets/placeHolderImg.webp';

export default function Card({to, title, description, onClick}) {
    return (
        <Link to={to} className="Card" onClick={onClick}>
            <div className='ImageHolder'>
                <img src={temp} alt='placeHolderImg' className='Image'/>
            </div>
            <h1 style={{paddingLeft:'5%'}}>{title}</h1>
            <p style={{paddingLeft:'10%'}}>{description}</p>
            <h1 style={{padding:'100% 0px 0px 100%'}}>+</h1>
        </Link >
    );
}