import PageHeader from '../components/layout/PageHeader.jsx'
import './Home.css';
import tempBack from '../assets/4k-desktop-wallpaper-v0-c3uhsgo1vx541.webp'

export default function Home() {
    return (
        <div>
            <PageHeader />
            <img className='HomePageImg' src={tempBack} alt="Temp background image" draggable={false} />
        </div>
    );
}