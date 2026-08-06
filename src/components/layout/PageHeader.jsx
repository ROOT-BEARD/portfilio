import { Link } from 'react-router-dom';
import './PageHeader.css';


function Header() {
    return (
        <div>
            <header className="PageHeader">
                <Link to={'/'}>AW|</Link>
                <div>ABOUT</div>
            </header>
        </div>
    );
}

export default Header;