import './Home.css';
import NewSec from '../components/layout/NewSec.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Card from '../components/Card.jsx'
import CardHolder from '../components/CardHolder.jsx'
import backgroundImage from '../assets/placeHolderImg.webp'

function scrollToTop(){
    window.scrollTo({top:0,behavior:'smooth'});
}

export default function Home() {
    return (
        <div>
            <div className='HomePage' style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className='Hero'>
                </div>
            </div>
            <NewSec
                title="What's new"
                descrip="What I have been up to"
            >
            <CardHolder>
                <Card title="Hallower"
                description="A character controller inspried by the game
                Mina the Hallower by Yhact Club games" to="/projects/hallower"/>
                <Card />
                <Card />
            </CardHolder>
            </NewSec>
            <NewSec backgroundColor='rgb(1,1,1)'>
                <button onClick={() => scrollToTop()}>back to top</button>
            </NewSec>
        </div>
    );
}