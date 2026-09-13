import { Link } from 'react-router-dom';
import './PageHeader.css';
import favicon from "../../assets/favicon.png"


function Header() {
    return (
        <div>
            <header className="PageHeader">
                <img src={favicon}
                className='w-10 h-10'/>
            </header>
        </div>
    );
}

export default Header;